import { createContext, useEffect, useState } from "react";
import { storageData } from "../utils/storageData";
import { verifyUser } from "../mock-data/data";

export const UserContext = createContext({
  currentUser: null,
  authenticateUser: () => {},
  logout: () => {},
  loading: false,
  error: null,
  setError: () => {},
});

export function UserProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = storageData.getLoggedInUser();
    if (user) setCurrentUser(user);
  }, []);
  async function authenticateUser(email, password) {
    setLoading(true);
    await verifyUser(email, password)
      .then((user) => {
        storageData.setLoggedInUser(user);
        setCurrentUser(user);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.toString());
      });
  }

  function logout() {
    storageData.logout();
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    authenticateUser,
    loading,
    logout,
    error,
    setError,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
