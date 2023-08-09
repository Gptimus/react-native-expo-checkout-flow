import { StatusBar, useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { TamaguiProvider, Theme } from "tamagui";
import config from "@/tamagui.config";
import { Slot } from "expo-router";
const RootLayout = () => {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === "dark" ? "dark" : "light"}>
        <Slot />
        <StatusBar
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        />
      </Theme>
    </TamaguiProvider>
  );
};

export default RootLayout;
