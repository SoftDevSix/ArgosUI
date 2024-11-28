import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";

type HeaderContextType = {
  showHeader: boolean;
  setShowHeader: Dispatch<SetStateAction<boolean>>;
};

const HeaderContext = createContext<HeaderContextType>({
  showHeader: true,
  setShowHeader: () => {},
});

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showHeader, setShowHeader] = useState(true);

  const contextValue = useMemo(
    () => ({ showHeader, setShowHeader }),
    [showHeader, setShowHeader]
  );

  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContext;
