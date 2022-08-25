import "@testing-library/jest-dom/extend-expect";
import { render, RenderOptions } from "@testing-library/react";
import { GlobalContextProvider } from "context/GlobalContext";
import React, { ReactElement } from "react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "./createMockRouter";

interface Props {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: Props) => {
  return (
    <GlobalContextProvider>
      <RouterContext.Provider value={createMockRouter}>
        {children}
      </RouterContext.Provider>
    </GlobalContextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
