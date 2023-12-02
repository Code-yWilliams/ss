import { useMediaQuery, Breakpoint } from "@mui/material";

import theme from "./theme";

const { breakpoints } = theme;

// === breakpoint
export const useOnly = (breakpoint: Breakpoint): boolean =>
  useMediaQuery(breakpoints.only(breakpoint));

// <= breakpoint
export const useDown = (breakpoint: Breakpoint): boolean =>
  useMediaQuery(breakpoints.down(breakpoint));

// >= breakpoint
export const useUp = (breakpoint: Breakpoint): boolean =>
  useMediaQuery(breakpoints.up(breakpoint));
