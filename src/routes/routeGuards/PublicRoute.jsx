import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

export default function PublicRoute({ children }) {
    const navigate = useNavigate();
    const { user, loading } = useContext(UserContext);

    useEffect(() => {
        if (!loading && user) {
            navigate('/dashboard', { replace: true });
        }
    }, [user, loading, navigate]);

    if (loading) return null; // or a spinner

    return children;
}
