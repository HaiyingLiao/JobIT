import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
          main: "#0BAB7C",
          contrastText: "#fff"
        },
        primaryLight: {
          main: "#0BAB7C1A",
          contrastText: "#0BAB7C"
        },
        secondary: {
          main: "#F5F5F8",
          color1: "#C7F4C2",
          color2: "#D7D0FF",
          color3: "#FDDD8C",
          color4: "#FFBBD7",
          contrastText: "#92929D"
        },
        text :{
            primary:'#171725',
            secondary:'#696974',
        }
      },
      typography: {
        fontFamily: "'Manrope', sans-serif",
        h1: {
          fontSize: '2rem',
          fontWeight: 700,
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 700,
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 600,
        },
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
      }
});

export default theme;