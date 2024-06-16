import { Route, Router, Routes } from "@solidjs/router";
import { AuthProvider } from "./components/AuthContext";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import TopPage from "./components/TopPage";


const App = () => {
	return (
		<AuthProvider>
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<ProtectedRoute><TopPage /></ProtectedRoute>} />
			</Routes>
		</Router>
		</AuthProvider>
	)
}



export default App;
