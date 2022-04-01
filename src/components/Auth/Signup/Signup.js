import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect({ screen_hint: "signup" });
  }, []);

  return <></>;
};

export default Signup;
