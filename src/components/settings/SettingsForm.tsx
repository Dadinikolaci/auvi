"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SettingsForm = () => {
    const [loading, setLoading] = useState(true);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setFullName(user.user_metadata.full_name || '');
                setEmail(user.email || '');
            }
            setLoading(false);
        };
        fetchUser();
    }, []);

    const handleUpdate = async () => {
        setLoading(true);
        setMessage('');
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            const { error } = await supabase.auth.updateUser({
                data: { full_name: fullName }
            });
            if (error) {
                setMessage(`Error: ${error.message}`);
            } else {
                setMessage('Profile updated successfully!');
            }
        }
        setLoading(false);
    };

    return (
        <div className="space-y-8">
            <section id="profile">
                <div className="border-b border-white/10 px-6 py-5">
                    <h2 className="text-white text-[22px] font-bold">Profile Settings</h2>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={loading} className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" value={email} disabled className="mt-2" />
                    </div>
                </div>
                <div className="border-t border-white/10 p-6 flex justify-between items-center">
                    {message && <p className="text-sm text-gray-400">{message}</p>}
                    <Button onClick={handleUpdate} disabled={loading}>{loading ? 'Saving...' : 'Save Changes'}</Button>
                </div>
            </section>

            <section id="billing">
                <div className="border-b border-white/10 px-6 py-5">
                    <h2 className="text-white text-[22px] font-bold">Subscription</h2>
                </div>
                <div className="p-6">
                   <p className="text-gray-400">Subscription management is not implemented in this MVP.</p>
                </div>
            </section>
        </div>
    )
}
export default SettingsForm;
