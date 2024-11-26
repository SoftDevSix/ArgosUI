import React, { createContext, useContext, useState } from "react";

const HeaderContext = createContext({
  showHeader: true,
  setShowHeader: (_value: boolean) => {},
});

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showHeader, setShowHeader] = useState(true);
  return (
    <HeaderContext.Provider value={{ showHeader, setShowHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
