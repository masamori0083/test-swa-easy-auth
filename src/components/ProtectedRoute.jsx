import { useNavigate } from "@solidjs/router";
import { useAuth } from "./AuthContext";

const ProtectedRoute = (props) => {
	const { isAuthenticated } = useAuth();
	const navigate = useNavigate();

	if(!isAuthenticated()) {
		navigate('/login', { replace: true });
		return null;
	}
	return props.children;
};

export default ProtectedRoute;