import { createTheme } from "@mui/material/styles";
import { Color } from "./colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: Color.PRIMARY_DEFAULT,
      light: Color.PRIMARY_HOVER,
      dark: Color.PRIMARY_ACTION,
    },
    secondary: {
      main: Color.SECONDARY,
    },
    info: {
      main: Color.LINK,
    },
    success: {
      main: Color.SUCCESS,
    },
    error: {
      main: Color.ERROR,
    },
    warning: {
      main: Color.WARNING_DEFAULT,
      light: Color.WARNING_CRITICAL,
      dark: Color.WARNING_HEAVY,
    },
    background: {
      default: Color.PRIMARY_ACTION,
    },
  },
  typography: {
    allVariants: {
      color: Color.NEUTRAL_WHITE,
      wordWrap: "break-word",
      wordBreak: "break-word",
    },
    fontFamily: '"Comme", sans-serif',
    h1: {
      fontFamily: '"Comme", sans-serif',
      fontWeight: 700,
      fontSize: "32px",
    },
    h2: {
      fontFamily: '"Comme", sans-serif',
      fontWeight: 700,
      fontSize: "24px",
    },
    h3: {
      fontFamily: '"Comme", sans-serif',
      fontWeight: 700,
      fontSize: "18.72px",
    },
    h4: {
      fontFamily: '"Comme", sans-serif',
      fontWeight: 700,
      fontSize: "16px",
    },
    body1: {
      fontFamily: '"Comme", sans-serif',
      fontWeight: 400,
      fontSize: "16px",
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
          backgroundColor: Color.PRIMARY_DEFAULT,
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
              borderColor: Color.PRIMARY_DEFAULT,
            },
            "&:hover fieldset": {
              borderColor: Color.SECONDARY,
            },
            "&.Mui-focused fieldset": {
              borderColor: Color.SECONDARY,
            },
            "& .MuiInputBase-input": {
              color: Color.NEUTRAL_WHITE,
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
            color: Color.SECONDARY,
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
              borderColor: Color.SECONDARY,
            },
            "&:hover fieldset": {
              borderColor: Color.SECONDARY,
            },
            "&.Mui-focused fieldset": {
              borderColor: Color.SECONDARY,
            },
            "& .MuiInputBase-input": {
              color: Color.NEUTRAL_WHITE,
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: Color.SECONDARY,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: Color.PRIMARY_ACTION,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: Color.PRIMARY_ACTION,
          },
          "&.Mui-selected": {
            backgroundColor: Color.PRIMARY_HOVER,
          },
        },
      },
    },
  },
});

export default theme;
