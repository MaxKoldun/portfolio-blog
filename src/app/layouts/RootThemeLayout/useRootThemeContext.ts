import { RootThemeLayoutContext, ThemeContextType } from './RootThemeLayout';

import { useContext } from 'react';

export function useRootThemeContext(): ThemeContextType {
  const context = useContext(RootThemeLayoutContext);

  if (!context) {
    throw new Error(
      'useRootThemeContext must be used within RootThemeLayoutContext'
    );
  }

  return context;
}
