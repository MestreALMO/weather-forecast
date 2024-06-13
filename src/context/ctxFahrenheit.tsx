"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ctxFahrenheitContextProps {
  ctxFahrenheit: boolean;
  setCtxFahrenheit: Dispatch<SetStateAction<boolean>>;
}

const CtxFahrenheitContext = createContext<ctxFahrenheitContextProps>(
  {} as ctxFahrenheitContextProps
);

export default function CtxFahrenheitProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [ctxFahrenheit, setCtxFahrenheit] = useState(false);

  return (
    <CtxFahrenheitContext.Provider value={{ ctxFahrenheit, setCtxFahrenheit }}>
      {children}
    </CtxFahrenheitContext.Provider>
  );
}

export const useCtxFahrenheit = () => {
  const context = useContext(CtxFahrenheitContext);
  const { ctxFahrenheit, setCtxFahrenheit } = context;
  return { ctxFahrenheit, setCtxFahrenheit };
};
