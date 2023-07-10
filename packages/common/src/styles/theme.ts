const color = {
  primary: {
    navy: "#051B30",
  },
  gray: {
    "01": "#EDEDED",
    "02": "#E3E3E3",
    "03": "#DDDDDD",
    "04": "#A7A7A7",
    "05": "#9A9A9A",
    "06": "#4F4F4F",
    "07": "#3C3C3C",
    "08": "#353535",
    "09": "#232323",
    "10": "#191919",
  },
  white: "#FFFFFF",
  black: "#000000",
} as const;

const typo = {
  h1: {
    fontSize: "1.75rem",
    fontWeight: "700",
    lineHeight: "2.1875rem",
  },
  p: {
    fontSize: "0.6875rem",
    fontWeight: "400",
    lineHeight: "1.125rem",
  },
} as const;

export const theme = {
  color,
  typo,
} as const;
