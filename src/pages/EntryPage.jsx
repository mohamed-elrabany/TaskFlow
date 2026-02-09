import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";


export default function EntryPage() {
  const navigate = useNavigate();
  const { user, loading } = useContext(UserContext);

  useEffect(() => {
    if (!loading) {
      if (user) navigate("/dashboard", { replace: true });
      else navigate("/welcome", { replace: true });
    }
  }, [user, loading, navigate]);

  return <div>Checking user data...</div>;
}
