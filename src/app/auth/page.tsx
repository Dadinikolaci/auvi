"use client";

import AuthForm from '@/components/auth/AuthForm';

export default function AuthPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-white tracking-light text-[32px] font-bold leading-tight">FrameFlow</h1>
        </div>
        <AuthForm />
      </div>
    </div>
  );
}
