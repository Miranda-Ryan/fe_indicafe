import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppSpinner from "../../Spinner/Spinner";

const Signout = () => {
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth0();

  useEffect(() => {
    setLoading(true);
    logout();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return <>{loading ? <AppSpinner type="clock" /> : null}</>;
};

export default Signout;
