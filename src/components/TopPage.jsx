import { A } from "@solidjs/router";
import styles from '../App.module.css';
import logo from '../logo.svg';
import { useAuth } from './AuthContext';

const TopPage = () => {
	const { userInfo } = useAuth();
	return (
		<div class={styles.App}>
			<p>Welcome, {userInfo() ? `${userInfo().userDetails} (ID: ${userInfo().userId})`: "Guest"}</p>
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
			<A href="/logout" target="_self">Logout</A>
		</div>
	);
};

export default TopPage;