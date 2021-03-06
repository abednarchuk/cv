import { indigo, red } from '@material-ui/core/colors'

export const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: indigo[400],
    },
    secondary: {
      main: '#A67150',
    },
    error: {
      main: red[400],
    },
    background: {
      default: '#121212',
      paper: 'rgba(22,22,30)',
    },
  },
}
export const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: indigo[400],
    },
    secondary: {
      main: '#A67150',
    },
    error: {
      main: red[400],
    },
  },
}
