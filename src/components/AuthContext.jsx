import { createContext, createSignal, useContext } from "solid-js";

const AuthContext = createContext();

export const AuthProvider = (props) => {
	const [isAuthenticated, setAuthenticated] = createSignal(false);

	const login = () => setAuthenticated(true);
	const logout = () => setAuthenticated(false);

	return (
		<AuthContext.Provider value={{isAuthenticated, login, logout}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)