import {useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

export default function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const { user, loading } = useContext(UserContext);

    useEffect(() => {
        if (!loading && !user) {
            navigate('/', { replace: true });
        }
    }, [user, loading, navigate]);

    if (loading) return null; // or a spinner

    return children;
}
