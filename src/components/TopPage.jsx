import styles from '../App.module.css';
import logo from '../logo.svg';
import { useAuth } from './AuthContext';

async function getUserInfo() {
	const response = await fetch('./auth/me');
	const payload = await response.json();
	const { clientPrincipal } = payload;
	return clientPrincipal;
}

const TopPage = () => {
	const { userInfo, logout } = useAuth();
	return (
		<div class={styles.App}>
			<p>Welcome, {userInfo() ? userInfo().userDetails: "Guest"}</p>
			<header class={styles.header}>
				<img src={logo} class={styles.logo} alt="logo" />
				<p>
					Edit <code>src/TopPage.jsx</code> and save to reload.
				</p>
				<a
					class={styles.link}
					href="https://github.com/solidjs/solid"
					target="_blank"
					rel="noopener noreferrer"
					>
					Learn Solid
					</a>
			</header>
			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default TopPage;