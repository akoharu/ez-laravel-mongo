export interface Client {
    id: number;
    name: string;
    email: string;
    mobile_number: string;
    cash_on_hand: number;
    budget_status: 'ON TRACK' | 'OFF TRACK';
    can_login_as_client: boolean;
    mortgage_fact_find: {
        id: number;
        status: string;
        created_at: string;
        updated_at: string;
    } | null;
}
