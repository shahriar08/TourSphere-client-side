import { useEffect, useState } from 'react';
import {
    getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut,
    createUserWithEmailAndPassword
} from "firebase/auth";
import initializeAuthentication from '../components/Firebase/firebase.init';


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const signInUsingForm = (event) => {
        event.preventDefault();
        const email = event.target["email"].value;
        const password = event.target["password"].value;

        signInWithEmailAndPassword(auth, email, password).then((result) => {
            setUser(result.user);
        }).catch(error => {
            const errorCode = error?.code;
            const errorMessage =
                errorCode === "auth/user-not-found"
                    ? "Invalid Email or Password"
                    : error.message;
            setError(errorMessage);
        })
    }
    const signupUsingForm = (event) => {
        event.preventDefault();
        const email = event.target["email"].value;
        const password = event.target["password"].value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                const errorCode = error?.code;
                const errorMessage =
                    errorCode === "auth/user-not-found"
                        ? "Invalid Email or Password"
                        : error.message;
                setError(errorMessage);
            })
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    
    return {
        user,
        error,
        signupUsingForm,
        signInUsingGoogle,
        signInUsingForm,
        logOut
    }
}

export default useFirebase;