import { A } from "@solidjs/router";

const providers = ['github', 'aad'];

const Login = () => {
	// const [redirect, setRedirect] = createSignal('/home');


	return (
		<div>
			<h1>Login</h1>
			<div>
			{providers.map(provider => (
          <A key={provider} href={`/.auth/login/${provider}`} target="_self">
						<button>{provider}</button>
					</A>
				))}
				<A href="/.auth/login/aad" target="_self">Login</A>
			</div>
		</div>
	);
};


export default Login;