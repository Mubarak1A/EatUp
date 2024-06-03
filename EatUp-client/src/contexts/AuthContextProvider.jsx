import { createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({  children  }) {
  return (
    <div>
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
