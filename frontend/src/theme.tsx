import { createMuiTheme } from '@material-ui/core/styles';
// Create a theme instance.
const theme = createMuiTheme({
  typography:{
    fontFamily: 'Roboto',
    h1:{
      fontFamily:'Nunito Sans',
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
      default: '#030303eb',
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
    MuiDrawer:{
      paper:{
        background: '#000000e3',
        color: '#e6e6e6',
        maxWidth:' 300px',
        width:'100%',
        padding:'5%',
        textTransform:'uppercase',
      }
    },
    MuiButton:{
      label:{
        // textTransform: 'none',
        fontFamily:'Nunito Sans',
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
        '&:hover::before': {
          width: '40%'
        },
        '&::before': {
          content: '""',
          bottom: '0vh',
          left: '10px',
          height: '5px',
          position: 'absolute',
          background: '#DA2E5E',
          width: '0%',
          transition: `width 200ms ease-out`
        },

      },
      colorInherit:{
        padding:'6px 30px'
      },
      outlinedPrimary:{
        borderRadius: '45px',
        borderWidth:'4px',
        padding:'6px 30px',
        borderColor: '#DA2E5E',
        color:'#DA2E5E',
        '&:hover': {
          borderWidth:'4px',
          backgroundColor:'#DA2E5E',
          color: '#e6e6e6'
        },
        '&:hover::before':{
          width:'0%'
        }
      }
    }
  }
});

export default theme;
