"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const [userName, setUserName] = useState('User');
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setUserName(user.user_metadata.full_name || user.email || 'User');
            }
        };
        fetchUser();
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/auth');
    };

    return (
        <aside className="sticky top-0 h-screen w-64 flex-shrink-0 bg-[#191928] p-4 flex flex-col justify-between">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-3 px-2">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGytUYsANYkAxoxcDVjjeD-gnqkFmxHbS7ROwn9KJVrSKI-uiSnXYn3WkzIJ-zeC2tgTLTOWCzBkGDcIdSTz9o2M3kyZ6mJL0Cuq01I3VJQ3neA5bohGWy5wV3woAXCc8O7nWm43ZaxKBJgJ1OlgAF5jxMulvd1lJ_PKfmg92wY_EDLtZSJG-1yZyFP7U5z3gHKcMYmkDo8yJK0OX-sMYULVXKBG6y7DJwHxIJhVSNgKjJBzJkt-rbilfQqqOp31ohHpnxkKwE0ZRg')" }}></div>
                    <h1 className="text-white text-lg font-bold leading-normal">FrameFlow</h1>
                </div>
                <nav className="flex flex-col gap-2">
                    <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors duration-200">
                        <span className="material-symbols-outlined">dashboard</span>
                        <p className="text-sm font-medium">Dashboard</p>
                    </Link>
                    <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors duration-200">
                        <span className="material-symbols-outlined">folder</span>
                        <p className="text-sm font-medium">Projects</p>
                    </Link>
                    <Link href="/upload" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors duration-200">
                        <span className="material-symbols-outlined">upload</span>
                        <p className="text-sm font-medium">Uploads</p>
                    </Link>
                    <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors duration-200">
                        <span className="material-symbols-outlined">settings</span>
                        <p className="text-sm font-medium">Settings</p>
                    </Link>
                </nav>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-3 py-2">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHbRyryQ6Ag15M-NA1HqXIdMh0BUII0e8FM6WV8CbgYK0XiBtEILqHNxEA_eBMohn_uF0meFW7646hN6z2bctf3p-tC6-pJ1JVzOnDOYKbQlXK6xxGaHKoJajGvH-cJ__jqyQbH93r0N8ZlCJIzlJe-M0YW8Dw2VSKisZsf478YkR3QiD2cuwiVQEqUAxWL_V99YEEKPGl5WNtPEZwKRzbcgC5ACR8D-qmMJ9uAmgKkPUOfD8S4vOH9fkfPjq1eJ2YLvkUTR8awnrC')" }}></div>
                    <p className="text-white text-sm font-medium leading-normal">{userName}</p>
                </div>
                <button onClick={handleSignOut} className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors duration-200 w-full">
                    <span className="material-symbols-outlined">logout</span>
                    <p className="text-sm font-medium">Sign Out</p>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
