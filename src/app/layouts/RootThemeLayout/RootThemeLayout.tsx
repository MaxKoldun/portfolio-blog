'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';

export type ThemeContextType = {
  theme: CSSStyleDeclaration;
  getCSSProperty: (property: string) => string | undefined;
};

export const RootThemeLayoutContext = createContext<ThemeContextType | undefined>(undefined);

interface RootThemeLayoutProps {
  children: ReactNode;
}

export function RootThemeLayout({ children }: RootThemeLayoutProps) {
  const [theme, setTheme] = useState<CSSStyleDeclaration | null>(null);

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setTheme(rootStyles);
  }, []);

  function getCSSProperty(property: string): string | undefined {
    if (!theme) return undefined;
    return theme.getPropertyValue(property).trim();
  }

  if (!theme) return null;

  return (
    <RootThemeLayoutContext.Provider value={{ theme, getCSSProperty }}>
      {children}
    </RootThemeLayoutContext.Provider>
  );
}