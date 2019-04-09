const colors = {
  black: {
    base: "#222526",
    light: "#4b4e57",
    lighter: "#222526",
    blue: "#2e3246",
    withAlpha: "rgba(0,0,0,0.5)",
  },
  primary: {
    base: "#F9F5E3",
    light: "#F5F5F6",
    dark: "#C6C2B1",
  },
  secondary: {
    base: "#902822",
    light: "#C6574A",
    dark: "#5D0000",
  },
  white: {
    base: "#fff",
  },
}

const transition = {
  easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  duration: "0.4s",
}

const breakpoints = {
  xs: 0,
  sm: `320px`,
  iphoneX: `375px`,
  md: `768px`,
  lg: `996px`,
  xl: `1192px`,
  maxWidth: `1680px`,
}

const theme = {
  breakpoints,
  colors,
  transition,
  fontFamily: {
    body: `Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    heading: `Wellfleet, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  },
}

export default theme
