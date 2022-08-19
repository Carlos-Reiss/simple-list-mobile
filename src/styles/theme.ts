import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    primary: {
      700: '#F2796B',
    },
    secondary: {
      700: '#F7A9A1',
    },
    green: {
      700: '#00875F',
      500: '#00B37F',
      300: '#04D361',
    },
    red: {
      700: '#F62525',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#F6F6F6',
    },
    white: '#FFFFFF',
  },
  fonts: {
    heading: 'Poppins_700Bold',
    body: 'Poppins_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    13: 43,
    14: 56,
  },
});
