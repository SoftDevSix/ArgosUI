import { createTheme } from "@mui/material/styles";
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZES,
  FONT_WEIGHTS,
} from "./styleConstants";

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
    allVariants: {
      color: COLORS.NEUTRAL_WHITE,
      wordWrap: "break-word",
      wordBreak: "break-word",
    },
    fontFamily: FONT_FAMILY,
    h1: {
      fontFamily: FONT_FAMILY,
      fontWeight: FONT_WEIGHTS.BOLD,
      fontSize: FONT_SIZES.H1,
    },
    h2: {
      fontFamily: FONT_FAMILY,
      fontWeight: FONT_WEIGHTS.BOLD,
      fontSize: FONT_SIZES.H2,
    },
    h3: {
      fontFamily: FONT_FAMILY,
      fontWeight: FONT_WEIGHTS.BOLD,
      fontSize: FONT_SIZES.H3,
    },
    h4: {
      fontFamily: FONT_FAMILY,
      fontWeight: FONT_WEIGHTS.BOLD,
      fontSize: FONT_SIZES.H4,
    },
    body1: {
      fontFamily: FONT_FAMILY,
      fontWeight: FONT_WEIGHTS.REGULAR,
      fontSize: FONT_SIZES.BODY1,
    },
    body2: {
      color: COLORS.BODY_2,
    },
    subtitle1: {
      fontFamily: FONT_FAMILY,
      fontWeight: FONT_WEIGHTS.BOLD,
      fontSize: FONT_SIZES.SUBTITLE1,
    },
    subtitle2: {
      fontFamily: FONT_FAMILY,
      fontWeight: FONT_WEIGHTS.REGULAR,
      fontSize: FONT_SIZES.SUBTITLE2,
      display: "block",
    },
    caption: {
      color: COLORS.CAPTION,
      fontSize: FONT_SIZES.CAPTION,
      display: "block",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          overflowX: "hidden",
          paddingTop: "64px",
          paddingBottom: "64px"
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
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "20px 40px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 16,
          paddingLeft: "10px",
          paddingRight: "10px",
          borderRadius: "0px",
          borderBottomRightRadius: "10px",
          borderTopLeftRadius: "10px",
          textTransform: "capitalize",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "0px",
          borderBottomRightRadius: "10px",
          borderTopLeftRadius: "10px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: 48,
          backgroundColor: COLORS.GREY_BG,
          borderRadius: 10,
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
          color: COLORS.NEUTRAL_WHITE,
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
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.NEUTRAL_WHITE,
          margin: "16px 0",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 56,
          height: 32,
          padding: 0,
          display: "flex",
        },
        thumb: {
          width: 24,
          height: 24,
          marginLeft: 2,
          marginRight: 4,
          marginTop: 1.2,
        },
        switchBase: {
          padding: 2,
          "&:not(.Mui-checked)": {
            color: COLORS.PRIMARY_DEFAULT,
          },
          "&.Mui-checked": {
            transform: "translateX(24px)",
            color: COLORS.PASS_BUTTON,
            "& + .MuiSwitch-track": {
              backgroundColor: COLORS.PRIMARY_HOVER,
              opacity: 1,
            },
          },
        },
        track: {
          borderRadius: 32 / 2,
          opacity: 1,
          color: COLORS.PRIMARY_DEFAULT,
          backgroundColor: COLORS.PRIMARY_HOVER,
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.PRIMARY_DEFAULT,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          paddingTop: 1,
          paddingBottom: 1,
          paddingLeft: 26,
          paddingRight: 26,
          fontSize: 20,
          backgroundColor: COLORS.PRIMARY_HOVER,
          color: COLORS.NEUTRAL_WHITE,
          borderRadius: "8px",
          transition: "background-color 0.3s ease",
          borderWidth: "1px",
          "&:not(:first-of-type)": {
            borderLeftColor: COLORS.GREY_BG,
          },
          "&:not(:last-of-type)": {
            borderRight: "none",
          },
          "&:hover": {
            backgroundColor: COLORS.PRIMARY_DEFAULT,
          },
          "&.Mui-disabled": {
            color: "#6C6C7A",
            backgroundColor: COLORS.GREY_DISABLED,
          },
          "&.Mui-selected": {
            color: COLORS.NEUTRAL_BLACK,
            backgroundColor: COLORS.PASS_BUTTON,
            "&:hover": {
              backgroundColor: COLORS.SUCCESS,
            },
          },
        },
      },
    },
  },
});

export default theme;
