export interface ICurrentUser {
    id: number;
    name: string;
    email: string;
    referralCode: string;
    isManager: boolean;
    features: string[];
}
