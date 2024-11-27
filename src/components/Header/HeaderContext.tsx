import React, { createContext, Dispatch, SetStateAction, useState } from "react";

type HeaderContextType = {
  showHeader: boolean;
  setShowHeader: Dispatch<SetStateAction<boolean>>;
};

const HeaderContext = createContext<HeaderContextType>({
  showHeader: true,
  setShowHeader: () => {},
});

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <HeaderContext.Provider value={{ showHeader, setShowHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContext;
