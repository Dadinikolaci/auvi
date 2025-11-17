"use client";

import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-[#1E1E1E] rounded-xl p-8 shadow-2xl">
      <div className="mb-6">
        <div className="flex h-10 w-full items-center justify-center rounded-lg bg-[#282839] p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal ${isLogin ? 'bg-background-dark text-white shadow-[0_0_4px_rgba(0,0,0,0.1)]' : 'text-[#9d9db9]'}`}
          >
            <span className="truncate">Sign In</span>
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal ${!isLogin ? 'bg-background-dark text-white shadow-[0_0_4px_rgba(0,0,0,0.1)]' : 'text-[#9d9db9]'}`}
          >
            <span className="truncate">Sign Up</span>
          </button>
        </div>
      </div>
      {isLogin ? <LoginForm /> : <SignUpForm />}
    </div>
  );
};

export default AuthForm;
