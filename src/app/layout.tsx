import { DevtoolsProvider } from "@providers/devtools";
import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { notificationProvider, RefineSnackbarProvider, } from "@refinedev/mui";
import routerProvider from "@refinedev/nextjs-router";
import { Metadata } from "next";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import darktheme from "./theme";

import { AppIcon } from "@components/app-icon";
import { ColorModeContextProvider } from "@contexts/color-mode";
import { authProvider } from "@providers/auth-provider";
import { dataProvider } from "@providers/data-provider";
import '../styles/global.css'

export const metadata: Metadata = {
  title: "TouchSwap Dashboard",
  description: "Admin Dashboard",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  const defaultMode = theme?.value === "dark" ? "dark" : "light";

  return (
    <html lang="en">
      <body>
        <Suspense>
          <RefineKbarProvider>
            <ColorModeContextProvider defaultMode={defaultMode}>
              <ThemeProvider theme={darktheme}>
                <CssBaseline />
                <RefineSnackbarProvider>
                  <DevtoolsProvider>
                    <Refine
                      routerProvider={routerProvider}
                      dataProvider={dataProvider}
                      notificationProvider={notificationProvider}
                      authProvider={authProvider}
                      resources={[
                        {
                          name: "overview",
                          list: "/overview",
                        },
                        {
                          name: "tasks",
                          list: "/tasks",
                          create: "/tasks/create",
                          edit: "/tasks/edit/:id",
                          show: "/tasks/show/:id",
                          meta: {
                            canDelete: true,
                          }
                        },
                      ]}
                      options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                        useNewQueryKeys: true,
                        projectId: "eHfk43-q0eD2R-0yIJzo",
                        title: { text: "TouchSwap", icon: <AppIcon /> },
                      }}
                    >
                      {children}
                      <RefineKbar />
                    </Refine>
                  </DevtoolsProvider>
                </RefineSnackbarProvider>
              </ThemeProvider>
            </ColorModeContextProvider>
          </RefineKbarProvider>
        </Suspense>
      </body>
    </html>
  );
}
