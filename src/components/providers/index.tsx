import CtxCoordinatesProvider from "@/context/ctxRegion";
import { FC, ReactNode } from "react";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <CtxCoordinatesProvider>{children}</CtxCoordinatesProvider>
    </>
  );
};
