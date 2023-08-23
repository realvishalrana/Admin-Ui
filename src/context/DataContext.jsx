"use client";
import { createContext, useState } from "react";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);

  return (
    <DataContext.Provider
      value={{
        checked: checked,
        setChecked: setChecked,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export {DataContext,DataContextProvider}