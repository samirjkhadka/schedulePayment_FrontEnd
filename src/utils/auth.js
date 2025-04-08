// utils/auth.js
export const login = (email, password) => {
    const dummyToken = "fake-jwt-token";
    localStorage.setItem("token", dummyToken);
    localStorage.setItem("user", JSON.stringify({ email }));
    return true;
  };
  
  export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };
  
  export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  