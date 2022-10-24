import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 780,
      lg: 992,
      xl: 1200,
      xxl: 1536,
    },
  },

  shape: {
    borderRadius: 4,
  },

  zIndex: {
    appBar: 10,
  },
});

const mixinTheme = createTheme(baseTheme, {
  mixins: {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '64px',
      padding: baseTheme.spacing(0, 1),
      zIndex: 11,
    },
  },
});

const createColor = (color) => mixinTheme.palette.augmentColor({ color: { main: color } });

const lightTheme = createTheme(mixinTheme, {
  palette: {
    primary: {
      ...createColor('#21313e'),
      contrastText: baseTheme.palette.common.white,
    },
    secondary: {
      ...createColor('#bb994d'),
      contrastText: baseTheme.palette.common.white,
    },
  },
});

export default lightTheme;
