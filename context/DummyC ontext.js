import { createContext, useState } from "react";

export const DummyContext = createContext();

export const DummyProvider = ({ children }) => {
  const [dummydata, setdummydata] = useState("dummy");
};
