import { createContext, useState } from "react";

const authContext = createContext({});
const FollowingContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [logged, setLogged] = useState(false);

  return (
    <authContext.Provider value={{ auth, setAuth, logged, setLogged }}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
