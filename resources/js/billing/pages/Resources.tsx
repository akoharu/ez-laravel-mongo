import React from "react";
import Master from "@/billing/layouts/Master";
import { ICurrentUser } from "@/billing/interfaces/CurrentUser";

interface IPageProps {
    currentUser: ICurrentUser;
    resourcesPageHtml: string;
}

export default function Resources({
    currentUser,
    resourcesPageHtml,
}: IPageProps) {
    return (
        <Master title="Resources" currentUser={currentUser}>
            <div dangerouslySetInnerHTML={{ __html: resourcesPageHtml }} />
        </Master>
    );
}
