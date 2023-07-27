import { createTheme } from '@mui/material/styles';

const typography = {
  fontFamily: '"Manrope", sans-serif',
  // 32px
  h1: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  // 24px
  h2: {
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  // 22px
  h4: {
    fontSize: '1.375rem',
    fontWeight: 700,
  },
  h5: {
    fontSize: '1.375rem',
    fontWeight: 600,
  },
  // 18px
  bodyL: {
    fontSize: '1.125rem',
    fontWeight: 700,
  },
  bodyL_2: {
    fontSize: '1.125rem',
    fontWeight: 600,
  },
  bodyL_3: {
    fontSize: '1.125rem',
    fontWeight: 500,
  },
  bodyL_4: {
    fontSize: '1.125rem',
    fontWeight: 400,
  },
  // 16px
  bodyM: {
    fontSize: '1rem',
    fontWeight: 700,
  },
  bodyM_2: {
    fontSize: '1rem',
    fontWeight: 600,
  },
  bodyM_3: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  bodyM_4: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  // 15px
  bodyM2: {
    fontSize: '0.9375rem',
    fontWeight: 700,
  },
  bodyM2_2: {
    fontSize: '0.9375rem',
    fontWeight: 600,
  },
  bodyM2_3: {
    fontSize: '0.9375rem',
    fontWeight: 500,
  },
  bodyM2_4: {
    fontSize: '0.9375rem',
    fontWeight: 400,
  },
  // 14px
  bodyM3: {
    fontSize: '0.875rem',
    fontWeight: 700,
  },
  bodyM3_2: {
    fontSize: '0.875rem',
    fontWeight: 600,
  },
  bodyM3_3: {
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  bodyM3_4: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  // 13px
  bodyM4: {
    fontSize: '0.8125rem',
    fontWeight: 700,
  },
  bodyM4_2: {
    fontSize: '0.8125rem',
    fontWeight: 600,
  },
  bodyM4_3: {
    fontSize: '0.8125rem',
    fontWeight: 500,
  },
  bodyM4_4: {
    fontSize: '0.8125rem',
    fontWeight: 400,
  },
  subtitle1: undefined,
  subtitle2: undefined,
  body1: undefined,
  body2: undefined,
  caption: undefined,
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0BAB7C',
      contrastText: '#fff',
    },
    primaryLight: {
      main: '#0BAB7C1A',
      contrastText: '#0BAB7C',
    },
    secondary: {
      main: '#F5F5F8',
      contrastText: '#92929D',
    },
    secondaryoutlined: {
      main: '#696974',
    },
    small: {
      main: '#FAFAFB',
      contrastText: '#92929D',
    },
    customColor: {
      jobCardBg: '#FFF',
      companyJobCardBg: '#FFF',
      navBarBg: '#FFF',
      backDrop: 'rgba(0, 0, 0, 0.1)',
      activeDrawer: '#F4F4F4',
      requirementBg: '#FAFAFB',
      pageBG: '#F9FAFC',
      toggleBtn: '#f1f1f5 !important',
      toggleBtn2: '#65C466',
      seeMoreBtnClr: '#F1F1F5',
    },
    text: {
      primary: '#171725',
      secondary: '#696974',
      natural6: '#92929D',
    },
  },
  typography: {
    ...typography,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0BAB7C',
      contrastText: '#fff',
    },
    primaryLight: {
      main: '#0BAB7C1A',
      contrastText: '#0BAB7C',
    },
    secondary: {
      main: '#21212B',
      contrastText: '#696974',
    },
    secondaryoutlined: {
      main: '#696974',
    },
    small: {
      main: '#21212B',
      contrastText: '#92929D',
    },
    customColor: {
      jobCardBg: '#1c1c24',
      companyJobCardBg: '#21212B',
      navBarBg: '#13131A',
      backDrop: 'rgba(255, 255, 255, 0.10)',
      activeDrawer: '#21212B',
      requirementBg: '#21212B',
      pageBG: '#13131A',
      toggleBtn: '#21212B !important',
      toggleBtn2: '#2ECA45',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#92929D',
      natural6: '#92929D',
    },
  },
  typography: {
    ...typography,
  },
});
