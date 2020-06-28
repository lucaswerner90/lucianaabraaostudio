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
        // textTransform: 'none',
        fontSize: '0.8751rem',
        fontWeight: 700,
      },
      root:{
        '&:hover': {
          borderColor: '#DA2E5E',
          color:'#DA2E5E',
          boxShadow: 'none',
          borderRadius: '45px',
          borderWidth: '2px'
        },
      },
      colorInherit:{
        padding:'6px 30px'
      },
      outlinedPrimary:{
        borderRadius: '45px',
        borderWidth:'4px',
        borderColor:'transparent',
        padding:'6px 30px',
        '&:hover': {
          borderWidth:'4px'
        },
      }
    }
  }
});

export default theme;
