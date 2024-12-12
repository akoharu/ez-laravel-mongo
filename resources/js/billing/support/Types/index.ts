import { Page } from "@inertiajs/inertia";
import { ICurrentUser } from "@/billing/interfaces/CurrentUser";

export type PageProps<T = object> = {
    currentUser: ICurrentUser;
} & T;

export type AppPageProps = Page<object>;
