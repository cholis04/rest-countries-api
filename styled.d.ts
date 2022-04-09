import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    smallShadow: string;
    maxWidth: string;
    minWidth: string;
    screenDesktop: string;
    backgroundColor: string;
    elementColor: string;
    textColor: string;
    textValue: string;
    textPlaceHolder: string;
  }
}
