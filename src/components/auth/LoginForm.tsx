"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

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

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock authentication
    console.log("Login submitted", values)
    // In a real app, you'd call an API here.
    // For the MVP, we'll just simulate a successful login.
    localStorage.setItem("user", JSON.stringify({ email: values.email, isAuthenticated: true }))
    router.push('/dashboard')
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
                  <Input id="email" placeholder="your.email@example.com" {...field} className="form-input h-14 min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#3b3c54] bg-[#1c1c27] p-[15px] text-base font-normal leading-normal text-white placeholder:text-[#9d9db9] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40" />
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
                  <Input id="password" type="password" {...field} className="form-input h-14 min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#3b3c54] bg-[#1c1c27] p-[15px] text-base font-normal leading-normal text-white placeholder:text-[#9d9db9] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-2">
            <Button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary h-14 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark">
              Sign In
            </Button>
          </div>
        </form>
      </Form>
      <p className="mt-8 text-center text-sm text-[#9d9db9]">
        Don't have an account? <a className="font-medium text-primary hover:underline" href="#">Sign up</a>
      </p>
    </>
  )
}

export default LoginForm
