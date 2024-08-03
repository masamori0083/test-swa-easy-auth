import { A } from "@solidjs/router";

const providers = ['github', 'aad'];

const Login = () => {


	return (
		<div>
			<h1>Login</h1>
			<div>
			{providers.map(provider => (
          <A key={provider} href={`/.auth/login/${provider}`} target="_self">
						<button>{provider}</button>
					</A>
				))}
			</div>
		</div>
	);
};


export default Login;