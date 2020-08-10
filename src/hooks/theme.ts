import { DefaultTheme } from "styled-components";
// import { type } from "os";

import { useState } from 'react';

type ThemeName = 'dark' | 'light';

declare module "styled-components" {
  export interface DefaultTheme {
    name: ThemeName,
    defineTheme(name: ThemeName): void,
  }
}

export default function useTheme(): DefaultTheme{
  const [theme, setTheme] = useState<ThemeName>(loadTheme());

  function loadTheme() {
    const theme =  localStorage.getItem('theme') || 'light';
    return theme as ThemeName;
  }

  function defineTheme(theme: ThemeName) {
      localStorage.setItem('theme', theme);
      setTheme(theme);
  }

  return {
    name: theme,
    defineTheme,
  }
}