import { createContext, useState } from "react";

export const SchemeContext = createContext();

export const SchemeProvider = ({ children }) => {
  const [selectedScheme, setSelectedScheme] = useState("Upcoming Marriage");

  return (
    <SchemeContext.Provider value={{ selectedScheme, setSelectedScheme }}>
      {children}
    </SchemeContext.Provider>
  );
};
