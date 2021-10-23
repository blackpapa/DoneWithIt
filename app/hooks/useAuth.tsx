import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthStorage from "../auth/storage";
import AuthContext from "../auth/context";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = async (authToken: any) => {
    const user = jwtDecode(authToken);
    setUser(user);
    //Storage the token
    await AuthStorage.storageToken(authToken);
  };

  const logout = () => {
    setUser(null);
    AuthStorage.removeToken();
  };

  return { user, setUser, logout, login };
};

export default useAuth;
