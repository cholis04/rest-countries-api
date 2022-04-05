import { DefaultTheme } from 'styled-components';

const global = {
  smallShadow: '0 1px 10px rgba(0, 0, 0, 0.2)',
  maxWidth: '1320px',
  minWidth: '375px',
  screenDesktop: '680px',
};

export const lightMode: DefaultTheme = {
  ...global,
  backgroundColor: 'hsl(0, 0%, 98%)',
  elementColor: 'hsl(0, 0%, 100%)',
  textColor: 'hsl(200, 15%, 8%)',
  textInput: 'hsl(0, 0%, 52%)',
};

export const darkMode: DefaultTheme = {
  ...global,
  backgroundColor: 'hsl(207, 26%, 17%)',
  elementColor: 'hsl(209, 23%, 22%)',
  textColor: 'hsl(0, 0%, 100%)',
  textInput: 'hsl(180, 53%, 97%)',
};