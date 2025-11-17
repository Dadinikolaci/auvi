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
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock user creation
    console.log("Sign up submitted", values)
    // In a real app, you'd call an API here.
    // For the MVP, we'll just simulate a successful sign up.
    localStorage.setItem("user", JSON.stringify({ email: values.email, isAuthenticated: true, name: values.name }))
    router.push('/dashboard')
  }

  return (
    <>
      <h2 className="text-white tracking-light text-[28px] font-bold leading-tight text-left pb-5">Create an account</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-base font-medium leading-normal">Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="form-input h-14 min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#3b3c54] bg-[#1c1c27] p-[15px] text-base font-normal leading-normal text-white placeholder:text-[#9d9db9] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-base font-medium leading-normal">Email address</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} className="form-input h-14 min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#3b3c54] bg-[#1c1c27] p-[15px] text-base font-normal leading-normal text-white placeholder:text-[#9d9db9] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40" />
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
                <FormLabel className="text-white text-base font-medium leading-normal">Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} className="form-input h-14 min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#3b3c54] bg-[#1c1c27] p-[15px] text-base font-normal leading-normal text-white placeholder:text-[#9d9db9] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-2">
            <Button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary h-14 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark">
              Create Account
            </Button>
          </div>
        </form>
      </Form>
      <p className="mt-8 text-center text-sm text-[#9d9db9]">
        Already have an account? <a className="font-medium text-primary hover:underline" href="#">Sign in</a>
      </p>
    </>
  )
}

export default SignUpForm
