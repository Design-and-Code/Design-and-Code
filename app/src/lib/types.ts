import { Breakpoint, BreakpointOverrides, BreakpointsOptions } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { CSSProperties } from '@mui/styles';

export interface Welcome {
  palette: Palette;
  typography: Typography;
}

export interface Palette {
  primary: Primary;
  secondary: Secondary;
  text: Text;
  contrastThreshold: number;
  tonalOffset: number;
}

export interface Primary {
  main: string;
  blurColor: string;
  backgroundBlurColor: string;
  background2: string;
  gradient1: string;
  gradient2: string;
  mainGradient: string;
}

export interface Secondary {
  main: string;
  darkGrey: string;
}

export interface Text {
  primary: string;
  secondary: string;
  gradient: CSSProperties;
}



export interface Typography {
  fontFamily: string;
  h1: Body1;
  h2: Body1;
  h3: Body1;
  h4: Body1;
  h5: Body1;
  h6: Body1;
  subtitle1: Body1;
  subtitle2: Body1;
  body1: Body1;
  body2: Body1;
  button: Body1;
  caption: Caption;
  overline: Body1;
}

export interface Body1 {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: string;
  textTransform?: string;
  overflow?: string;
}

export interface Caption {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
}

export interface CustomTheme {
  typography: TypographyOptions;
  palette: Palette;
  breakpoints: BreakpointsOptions;
}

declare module '@mui/material/styles' {
  interface Theme {
    typography: Typography;
    palette: Palette;
    breakPoint: {
      xs: true; // removes the `xs` breakpoint
      sm: true;
      md: true;
      lg: true;
      xl: true;
    }
  }
}
