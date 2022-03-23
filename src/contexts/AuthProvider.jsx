import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../../firebase";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const unsubscribre = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return () => unsubscribre();
	}, []);

  const handleError = (error) => {
    setLoading(false);
    const errorCode = error.code;
				const errorMessage = error.message;
				setError(`${errorCode} : ${errorMessage}`);
				//alert(`${errorCode} : ${errorMessage}`);
	};
	const cleanError = () => {
		setError();
	}
  
	const login = async (email, password) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.catch((error) => {
        handleError(error);
			});
	};

	const register = async (email, password) => {
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password).catch((error) => {
			handleError(error);
		});
	};

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
      })
      .catch((error) => {
        handleError(error);
      });
  };

	return (
		<AuthContext.Provider value={{ currentUser, loading, error,setCurrentUser,logout, login, register, cleanError}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
};
