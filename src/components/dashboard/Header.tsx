"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

const Header = () => {
    const [userName, setUserName] = useState('User');

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setUserName(user.user_metadata.full_name || user.email || 'User');
            }
        };
        fetchUser();
    }, []);

    return (
        <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-col gap-1">
                <p className="text-white text-3xl font-bold leading-tight tracking-tight">Welcome back, {userName}!</p>
                <p className="text-gray-400 text-base font-normal leading-normal">Here is an overview of your workspace.</p>
            </div>
            <button className="flex items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal shadow-lg shadow-primary/20 hover:bg-opacity-90 transition-all duration-200 transform hover:-translate-y-0.5">
                <span className="material-symbols-outlined text-lg">add_circle</span>
                <span className="truncate">New Project</span>
            </button>
        </div>
    );
};

export default Header;
