import CtxLocationProvider from "@/context/ctxLocation";
import { FC, ReactNode } from "react";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <CtxLocationProvider>{children}</CtxLocationProvider>
    </>
  );
};
