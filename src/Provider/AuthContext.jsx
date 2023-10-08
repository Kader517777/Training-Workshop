import { createContext, useEffect, useState } from "react";
import auth from "../authentication.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const userContext = createContext(null);
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loggedinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user

                setUser(user);
            } else {
                // User is signed out
                // ...
            }
        }
        )
    }, []);

    const signUp = () => {
        signOut(auth).then(() => {
            setUser(null);
        }).catch((error) => {
            console.log(error);
        });
    }
    console.log(user);
    const authInfo = {
        user,
        createUser,
        loggedinUser,
        signUp,
    }

    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;