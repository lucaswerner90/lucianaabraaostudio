import { createMuiTheme } from '@material-ui/core/styles';
// Create a theme instance.
const theme = createMuiTheme({
  typography:{
    fontFamily: 'Roboto',
    h1:{
      fontWeight:'bold',
      fontSize: '5rem',
      '@media (min-width: 370px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width: 720px)': {
        fontSize: '5rem',
      },
      '@media (min-width: 980px)': {
        fontSize: '7rem',
      }
    }
  },
  palette: {
    primary: {
      main: '#DA2E5E',
    },
    secondary: {
      main: '#CFCFCF',
    },
    error: {
      main: '#EC89A9',
    },
    background: {
      default: '#222',
    },
    text:{
      primary: '#171717',
      secondary:'#e6e6e6'
    }
  },
  overrides:{
    MuiInput:{
      root:{
        color: '#fff'
      }
    },
    MuiButton:{
      label:{
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: 500
      },
      root:{
        '&:hover': {
          borderColor: '#DA2E5E',
          color:'#DA2E5E',
          boxShadow: 'none',
        },
        border: '2px solid #e6e6e6',
        borderRadius: '45px'
      },
      colorInherit:{
        padding:'6px 30px'
      },
      outlinedPrimary:{
        borderWidth:'4px',
        padding:'6px 30px',
        '&:hover': {
          borderWidth:'4px'
        },
      }
    }
  }
});

export default theme;
