import React, { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';
import { ICurrentUser } from '@/billing/interfaces/CurrentUser';
import { AuthProvider } from '../Context/AuthContext';
import posthog from 'posthog-js';

interface MasterProps {
    children: React.ReactNode;
    title: string;
    currentUser: ICurrentUser;
}

const APP_NAME = 'EZ Billing';
const Master: React.FC<MasterProps> = ({ children, title, currentUser }) => {
    useEffect(() => {
        if (currentUser) {
            posthog.identify(currentUser.id.toString(), {
                email: currentUser.email,
                id: currentUser.id,
            });
        }
    }, [currentUser]);

    return (
        <AuthProvider user={currentUser}>
            <Head title={`${title} - ${APP_NAME}`} />
            <div className="antialiased">
                <main className="md:px-20 pt-[7.5rem] px-4">{children}</main>
            </div>
        </AuthProvider>
    );
};

export default Master;
