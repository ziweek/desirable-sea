"use client";

// pages/_app.js
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme } from "next-themes";

export default function AppProvider({ children }: any) {
  const { systemTheme } = useTheme();

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme={systemTheme}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
