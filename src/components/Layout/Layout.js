import React, { useContext, useEffect } from "react";

import { UserContext } from "../../Context/UserContext";

const Layout = (props) => {
  const { authCheckState } = useContext(UserContext);

  useEffect(() => {
    authCheckState();
  }, [authCheckState]);

  return <div>{props.children}</div>;
};

export default Layout;
