import { createContext, createSignal, onMount, useContext } from "solid-js";

const AuthContext = createContext();

export const AuthProvider = (props) => {
	const [isAuthenticated, setAuthenticated] = createSignal(false);
	const [userInfo, setUserInfo] = createSignal(null);

	const login = () => setAuthenticated(true);

	const getUserInfo = async () => {
		try {const response = await fetch('/.auth/me');
		const payload = await response.json();
		const { clientPrincipal } = payload;
		setUserInfo(clientPrincipal);
		setAuthenticated(true);
		} catch (error) {
			console.error('No profile could be found.');
		}
	};
	onMount(() => getUserInfo());

	return (
		<AuthContext.Provider value={{isAuthenticated, userInfo ,login}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)