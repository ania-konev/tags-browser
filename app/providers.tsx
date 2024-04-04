"use client";
import { Provider } from "react-redux";
import { store } from "./store";

//I have added this component because Provider from React Redux has to be on the client side.
export function Providers({ children }: { children: JSX.Element }) {
  return <Provider store={store}>{children}</Provider>;
}
