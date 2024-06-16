import { createSignal } from "solid-js";

const providers = ['twitter', 'github', 'aad'];

const Login = () => {
	const [redirect, setRedirect] = createSignal('/home');

	return (
		<div>
			<h1>Login</h1>
			<div>
				{providers.map(provider=>(
					<a key={provider} href={`/.auth/login/${provider}?post_login_redirect_uri=${redirect()}`}>
						<button>{provider}</button>
					</a>
				))}
			</div>
		</div>
	)
}

export default Login;