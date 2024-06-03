import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({  children  }) {
    const [user, setUser] = useState(null)

    const authInfo = {
        user
    }

  return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
