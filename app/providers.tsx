"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store, persistor } from "@/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider>
          <NextUIProvider navigate={router.push}>
            <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
          </NextUIProvider>
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}