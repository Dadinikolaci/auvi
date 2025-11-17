"use client";

import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter, usePathname } from 'next/navigation';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const isAuthPage = pathname === '/auth';
        if (session) {
          if (isAuthPage) {
            router.replace('/dashboard');
          }
        } else {
          if (!isAuthPage) {
            router.replace('/auth');
          }
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [pathname, router]);

  return <>{children}</>;
}
