import { createContext, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  return useContext(UserContext);
};
