import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [navSize, changeNavSize] = useState("small");
  const [user, setUser] = useState("");

  const handleClick = (value) => {
    setUser(value);
  };

  return (
    <AppContext.Provider value={{ navSize, changeNavSize, user, setUser, handleClick }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
