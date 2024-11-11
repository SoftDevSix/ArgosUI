import { createTheme } from "@mui/material/styles";
import { COLORS } from "./colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.PRIMARY_DEFAULT,
      light: COLORS.PRIMARY_HOVER,
      dark: COLORS.PRIMARY_ACTION,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
    info: {
      main: COLORS.LINK,
    },
    success: {
      main: COLORS.SUCCESS,
    },
    error: {
      main: COLORS.ERROR,
    },
    warning: {
      main: COLORS.WARNING_DEFAULT,
      light: COLORS.WARNING_CRITICAL,
      dark: COLORS.WARNING_HEAVY,
    },
    background: {
      default: COLORS.PRIMARY_ACTION,
    },
  },
  typography: {
    fontFamily: '"Comme", sans-serif',
    h1: {
      fontFamily: '"Comme", sans-serif',
      fontWeight: 700, 
      fontSize: '32px',
    },
    h2: {
      fontFamily: '"Comme", sans-serif',
      fontWeight: 700,
      fontSize: '24px',
    },
    h3: {
      fontFamily: '"Comme", sans-serif',
      fontWeight: 700,
      fontSize: '18.72px',
    },
    h4: {
      fontFamily: '"Comme", sans-serif',
      fontWeight: 700, 
      fontSize: '16px',
    },
    body1: {
      fontFamily: '"Comme", sans-serif',
      fontWeight: 400, 
      fontSize: '16px',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          overflowX: "hidden",
          marginTop: "24px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.PRIMARY_DEFAULT,
          borderRadius: "16px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          paddingLeft: "10px",
          paddingRight: "10px",
          borderRadius: "4px",
          textTransform: "capitalize",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: 40,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: COLORS.PRIMARY_DEFAULT,
            },
            "&:hover fieldset": {
              borderColor: COLORS.SECONDARY,
            },
            "&.Mui-focused fieldset": {
              borderColor: COLORS.SECONDARY,
            },
            "& .MuiInputBase-input": {
              color: COLORS.NEUTRAL_WHITE,
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "15px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#000",
          fontSize: "17px",
          "&.Mui-focused": {
            color: COLORS.SECONDARY,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderColor: "#fff",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: COLORS.SECONDARY,
            },
            "&:hover fieldset": {
              borderColor: COLORS.SECONDARY,
            },
            "&.Mui-focused fieldset": {
              borderColor: COLORS.SECONDARY,
            },
            "& .MuiInputBase-input": {
              color: COLORS.NEUTRAL_WHITE,
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: COLORS.SECONDARY,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: COLORS.PRIMARY_ACTION,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: COLORS.PRIMARY_ACTION,
          },
          "&.Mui-selected": {
            backgroundColor: COLORS.PRIMARY_HOVER,
          },
        },
      },
    },
  },
});

export default theme;
