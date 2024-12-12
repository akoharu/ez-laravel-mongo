import React from 'react';
import Master from '@/billing/layouts/Master';
import { ICurrentUser } from '@/billing/interfaces/CurrentUser';

interface IPageProps {
    currentUser: ICurrentUser;
    supportPageHtml: string;
}

export default function Support({ currentUser, supportPageHtml }: IPageProps) {
    return (
        <Master title="Support" currentUser={currentUser}>
            <div dangerouslySetInnerHTML={{ __html: supportPageHtml }} />
        </Master>
    );
}
