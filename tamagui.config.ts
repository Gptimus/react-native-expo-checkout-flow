import { createAnimations } from "@tamagui/animations-react-native";
import { createInterFont } from "@tamagui/font-inter";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { tokens } from "@tamagui/themes";
import { createTamagui, createTheme } from "tamagui";

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

const headingFont = createInterFont();
const bodyFont = createInterFont();

const dark = createTheme({
  primary: "#0e624e",
  secondary: "#fafbfc",
  started: "#000",
  background: "#000",
  color: "#242E38",
  white: "#fff",
  black: "#000",
  muted: "#8e9199",
  inverted: "#fff",
});

const light = createTheme({
  primary: "#0e624e",
  secondary: "#242E38",
  started: "#0e624e",
  background: "#f0f2f3",
  color: "#fff",
  white: "#fff",
  black: "#000",
  muted: "#8e9199",
  inverted: "#000",
});

const config = createTamagui({
  animations,
  defaultTheme: "dark",
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes: {
    light,
    dark,
  },
  fontSize: {
    tiny: 8,
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
  },
  space: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
  },
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
  sizes: {
    // custom size tokens
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
  },
  radii: {
    // custom border radius tokens
    rounded: 4,
    pill: 999,
  },
  shadow: {
    shadowColor: "$black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export type AppConfig = typeof config;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
