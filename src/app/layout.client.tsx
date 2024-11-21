"use client";
import ReduxProvider from "@/provider/ReduxProvider";
import React, { FC, ReactNode } from "react";

interface ILayoutClient {
  children: ReactNode;
}
const LayoutClient: FC<ILayoutClient> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutClient;
