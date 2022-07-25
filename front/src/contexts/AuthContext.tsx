import { createContext, ReactNode, useState } from 'react';

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignProps) => Promise<void>
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignProps ){
        console.log("Dados para logar", email)
        console.log("Senha para logar", password)
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}