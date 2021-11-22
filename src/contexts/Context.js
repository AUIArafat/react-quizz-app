import { createContext, useEffect, useState } from "react";
import { storageData } from "../utils/storageData";
import { verifyUser } from "../mock-data/data";

export const UserContext = createContext({
  currentUser: null,
  authenticateUser: () => {},
  loading: false,
});

export function UserProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = storageData.getLoggedInUser();
    if (user) setCurrentUser(user);
  }, []);
  async function authenticateUser(email, password) {
    setLoading(true);
    await verifyUser(email, password)
      .then((user) => {
        setCurrentUser(user);
        storageData.setLoggedInUser(user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  const value = {
    currentUser,
    authenticateUser,
    loading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
