import * as React from "react";
import { createContext } from "react";
import { ICurrentUser } from "@/billing/interfaces/CurrentUser";

type AuthContextProps = {
    user: ICurrentUser;
};

const AuthContext = createContext<Partial<AuthContextProps>>({});

const AuthProvider = (props: any) => {
    return (
        <AuthContext.Provider
            value={{
                user: props.user,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
