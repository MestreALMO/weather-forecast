import CtxFahrenheitProvider from "@/context/ctxFahrenheit";
import CtxLocationProvider from "@/context/ctxLocation";
import { FC, ReactNode } from "react";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <CtxFahrenheitProvider>
        <CtxLocationProvider>{children}</CtxLocationProvider>
      </CtxFahrenheitProvider>
    </>
  );
};
