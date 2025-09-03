import { createContext, useContext, useState, useEffect } from "react";

const authContext = () => {
  const AuthContext = createContext();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      const decoded = jwt_decode(token);
    }
  }, []);
const login=()=>{
setuser
}
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
