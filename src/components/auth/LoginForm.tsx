"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
})

const LoginForm = ({ toggleForm }: { toggleForm: () => void }) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/dashboard');
    }
  }

  return (
    <>
      <h2 className="text-white tracking-light text-[28px] font-bold leading-tight text-left pb-5">Welcome back</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-base font-medium leading-normal" htmlFor="email">Email address</FormLabel>
                <FormControl>
                  <Input id="email" placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-baseline justify-between">
                  <FormLabel className="text-white text-base font-medium leading-normal" htmlFor="password">Password</FormLabel>
                  <a className="text-sm font-medium text-primary hover:underline" href="#">Forgot password?</a>
                </div>
                <FormControl>
                  <Input id="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="pt-2">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </div>
        </form>
      </Form>
      <p className="mt-8 text-center text-sm text-[#9d9db9]">
        Don&apos;t have an account?{" "}
        <button onClick={toggleForm} className="font-medium text-primary hover:underline">
          Sign up
        </button>
      </p>
    </>
  )
}

export default LoginForm
