"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SettingsForm = () => {
    return (
        <div className="flex-1">
            <section className="flex flex-col bg-[#1C1C27]/50 rounded-xl mb-8" id="profil">
                <div className="border-b border-white/10">
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 py-5">Profile Settings</h2>
                </div>
                <div className="p-6 flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row items-end gap-4">
                        <div className="flex flex-col min-w-40 flex-1">
                            <Label htmlFor="firstName" className="text-white text-sm font-medium leading-normal pb-2">First Name</Label>
                            <Input id="firstName" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-white/10 bg-background-dark h-12 placeholder:text-[#9d9db9] px-4 text-base font-normal leading-normal" defaultValue="Marko"/>
                        </div>
                        <div className="flex flex-col min-w-40 flex-1">
                            <Label htmlFor="lastName" className="text-white text-sm font-medium leading-normal pb-2">Last Name</Label>
                            <Input id="lastName" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-white/10 bg-background-dark h-12 placeholder:text-[#9d9db9] px-4 text-base font-normal leading-normal" defaultValue="Marković"/>
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-white text-sm font-medium leading-normal pb-2">Email Address</Label>
                        <Input id="email" type="email" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-white/10 bg-background-dark h-12 placeholder:text-[#9d9db9] px-4 text-base font-normal leading-normal" defaultValue="marko.markovic@email.com"/>
                    </div>
                </div>
                <div className="border-t border-white/10 p-6 flex justify-end">
                    <Button>Save Changes</Button>
                </div>
            </section>
            <section className="flex flex-col bg-[#1C1C27]/50 rounded-xl mb-8" id="naplata">
                <div className="border-b border-white/10">
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 py-5">Your Subscription</h2>
                </div>
                <div className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg border border-primary/50 bg-primary/10">
                        <div className="flex flex-col">
                            <p className="text-white font-semibold">Pro Plan</p>
                            <p className="text-[#9d9db9] text-sm">Next billing date: Dec 24, 2024</p>
                        </div>
                        <p className="text-white font-bold text-lg mt-2 sm:mt-0">$25.00 / month</p>
                    </div>
                </div>
                <div className="border-t border-white/10 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <p className="text-sm text-[#9d9db9]">Manage your subscription, change your plan, or update your billing information.</p>
                    <Button variant="outline" className="bg-transparent hover:bg-white/5">Manage Subscription</Button>
                </div>
            </section>
        </div>
    )
}
export default SettingsForm;
