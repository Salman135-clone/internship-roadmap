import { createContext, useContext, useEffect, useState } from "react";
import AxiosInstance from "../api/AxiosInstance";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [auth, setAuth] = useState({
    isAuthenticated: false,
    role: null,
  });

  console.log(auth);
  useEffect(() => {
    const checkLogin = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const result = await AxiosInstance.get("/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(result.data);
        setAuth({
          isAuthenticated: true,
          role: result.data.user.role,
        });
      } catch (err) {
        console.error("Token invalid", error);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  const login = (data) => {
    setAuth({
      isAuthenticated: true,
      role: data.role,
    });
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      role: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, userData, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
