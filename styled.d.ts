import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    media: {
      screenDesktop: string;
    };
    maxWidth: string;
    minWidth: string;
    smallShadow: string;
    light: {
      backgroundColor: string;
      elementColor: string;
      textColor: string;
      textValue: string;
      textPlaceHolder: string;
    };
    dark: {
      backgroundColor: string;
      elementColor: string;
      textColor: string;
      textValue: string;
      textPlaceHolder: string;
    };
  }
}
