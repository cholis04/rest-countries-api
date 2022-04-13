import { DefaultTheme } from 'styled-components';

export const global: DefaultTheme = {
  media: {
    screenDesktop: '680px',
  },
  maxWidth: '1320px',
  minWidth: '375px',
  smallShadow: '0 1px 5px 1px rgba(0, 0, 0, 0.1)',
  light: {
    backgroundColor: 'hsl(0, 0%, 98%)',
    elementColor: 'hsl(0, 0%, 100%)',
    textColor: 'hsl(200, 15%, 8%)',
    textValue: 'hsl(200, 12%, 20%)',
    textPlaceHolder: 'hsl(0, 0%, 52%)',
  },
  dark: {
    backgroundColor: 'hsl(207, 26%, 17%)',
    elementColor: 'hsl(209, 23%, 22%)',
    textColor: 'hsl(0, 0%, 90%)',
    textValue: 'hsl(0, 0%, 82%)',
    textPlaceHolder: 'hsl(180, 0%, 80%)',
  },
};
