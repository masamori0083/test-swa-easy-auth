import { Route, Router } from "@solidjs/router";
import { AuthProvider } from "./components/AuthContext";
import Login from "./components/Login";
import TopPage from "./components/TopPage";


const App = () => {
	return (
		<AuthProvider>
		<Router>
				<Route path="/login" component={Login} />
				<Route path="/" component={TopPage} />
				{/* // 	<ProtectedRoute>
				// 		<TopPage />
				// 	</ProtectedRoute>
				// )} /> */}
		</Router>
		</AuthProvider>
	)
}



export default App;
