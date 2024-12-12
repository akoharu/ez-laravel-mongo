import React from 'react';
import Master from '@/billing/layouts/Master';
import { ICurrentUser } from '@/billing/interfaces/CurrentUser';

interface IPageProps {
    currentUser: ICurrentUser;
}

export default function Dashboard({ currentUser }: IPageProps) {
    return (
        <Master title="Dashboard" currentUser={currentUser}>
            <div>Dashboard</div>
        </Master>
    );
}
