import { createContext, useContext, useState } from "react";

interface AuthData {
    authData?: any;
    user: {
        _id: string;
        email: string;
        first_name: string;
        last_name: string;
        address_one: string;
        address_two: string;
        state: string;
        post_code: string;
        __v: number;
    };
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthData>({
    user: {
         _id: '',
            email: '',
            first_name: '',
            last_name: '',
            address_one: '',
            address_two: '',
            state: '',
            post_code: '',
            __v: 0,
    },
    isAuthenticated: false,
});


interface AuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [authData, setAuthData] = useState<AuthData>({
        user: {
            _id: '',
            email: '',
            first_name: '',
            last_name: '',
            address_one: '',
            address_two: '',
            state: '',
            post_code: '',
            __v: 0,
        },
        isAuthenticated: true,
    });

    const readValues:any = { 
        authData,
        setAuthData,
    };

    return <AuthContext.Provider value={readValues}>{children}</AuthContext.Provider>;
}


export function useAuth() {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context
}