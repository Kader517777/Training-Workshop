import { createContext, useState } from "react";

export const useContext = createContext(null);
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const authInfo = {
        user,
    }

    return (
        <useContext.Provider value={authInfo}>
            {children}
        </useContext.Provider>
    );
};

export default AuthContext;