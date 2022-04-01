import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Signout = () => {
  const { logout } = useAuth0();

  useEffect(() => {
    logout();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return <></>;
};

export default Signout;
