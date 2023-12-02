import { createTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

import {
  white,
  black,
  yellow50,
  gray10,
  gray20,
  gray30,
  gray40,
  gray60,
  red10,
  red40,
  red50,
  green10,
  green40,
  green50,
  blue10,
  blue40,
  blue50,
} from "./colors";
import shadows from "./shadows";

const fontWeights = [300, 500, 600, 700];
const spacing = [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 72, 76, 80];
const fontFamily = "proxima-nova, sans-serif";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontSize: 16,
    fontFamily,
    fontWeightLight: fontWeights[0],
    fontWeightRegular: fontWeights[1],
    fontWeightMedium: fontWeights[2],
    fontWeightBold: fontWeights[3],
    h1: {
      fontSize: 72,
    },
    h2: {
      fontSize: 64,
    },
    h3: {
      fontSize: 48,
    },
    h4: {
      fontSize: 32,
      fontWeight: fontWeights[3],
    },
    h5: {
      fontSize: 24,
      fontWeight: fontWeights[3],
    },
    h6: {
      fontSize: 24,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 16,
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 12,
    },
  },

  spacing,

  shadows,

  palette: {
    background: { default: gray20 },
    common: { white, black },
    primary: { main: blue50 },
    success: { main: green50 },
    error: { main: red50 },

    text: {
      primary: gray60,
      secondary: gray40,
    },
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          border: "2px solid transparent",
          textTransform: "none",
        },
        contained: {
          color: white,
        },
        outlined: {
          padding: "6px 16px",
          backgroundColor: white,
          borderWidth: "2px !important",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: blue40,
          },
          "&:not([disabled]):focus": {
            backgroundColor: blue40,
          },
        },
        outlinedPrimary: {
          borderColor: blue50,
          "&:hover": {
            backgroundColor: blue10,
          },
        },
        containedSuccess: {
          color: white,
          "&:hover": {
            backgroundColor: green40,
          },
          "&:not([disabled]):focus": {
            backgroundColor: green40,
          },
        },
        outlinedSuccess: {
          borderColor: green50,
          "&:hover": {
            backgroundColor: green10,
          },
        },
        containedError: {
          color: white,
          "&:hover": {
            backgroundColor: red40,
          },
          "&:not([disabled]):focus": {
            backgroundColor: red40,
          },
        },
        outlinedError: {
          borderColor: red50,
          "&:hover": {
            backgroundColor: red10,
          },
        },
        text: {
          padding: "6px 8px",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        endAdornment: {
          top: "unset",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          width: "100%",

          "&.valid": {
            [`&.${outlinedInputClasses.notchedOutline}`]: {
              borderColor: green50,
            },
            "&.MuiFormLabel-root": {
              color: green50,
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderColor: gray30,

          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderWidth: 1,
            borderColor: gray30,
            boxShadow: shadows[1],
          },

          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: gray30,
          },

          "&.Mui-disabled": {
            backgroundColor: gray10,
          },
        },
        notchedOutline: {
          borderColor: gray30,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: gray60,
          fontWeight: fontWeights[2],
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: gray60,
          fontWeight: fontWeights[2],
          "& .Mui-focused": {
            color: gray40,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: white,
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        color: "primary",
        size: "small",
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "primary",
        size: "small",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        action: {
          marginTop: 0,
          marginRight: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 8,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 24,
          fontWeight: fontWeights[2],
        },
      },
    },
    MuiDialogContent: {
      defaultProps: {
        dividers: true,
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: gray60,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: spacing[4],
          gap: spacing[3],
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 56,
          minHeight: "56px !important",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        item: {
          padding: 0,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 14,
          padding: spacing[4],
          backgroundColor: gray60,
        },
        arrow: {
          color: gray60,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: yellow50,
          height: 4,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",

          "&.Mui-selected": {
            color: gray60,
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          overflow: "visible",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-active": {
            color: `${blue50} !important`,
          },
          "&.Mui-completed": {
            color: `${green40} !important`,
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          "&.MuiStepLabel-active": {
            fontWeight: fontWeights[600],
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        stickyHeader: {
          backgroundColor: white,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: `${yellow50}90`,
        },
        barColorPrimary: {
          backgroundColor: yellow50,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
  },
});

export default theme;
