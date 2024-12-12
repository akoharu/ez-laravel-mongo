import React from 'react';
import { Head } from '@inertiajs/react';
interface MasterProps {
    children: React.ReactNode;
    title: string;
}

const APP_NAME = 'EZ Billing';
const Auth: React.FC<MasterProps> = ({ children, title }) => {
    return (
        <div>
            <Head title={`${title} - ${APP_NAME}`} />
            {children}
        </div>
    );
};

export default Auth;
