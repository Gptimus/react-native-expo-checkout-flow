import { useColorScheme } from "react-native";
import { Paragraph, YStack } from "tamagui";

const Home = () => {
  const colorScheme = useColorScheme();
  return (
    <YStack f={1} jc="center" ai="center" backgroundColor={"$backgroundSoft"}>
      <Paragraph color="$secondary" jc="center">
        {colorScheme}
      </Paragraph>
    </YStack>
  );
};

export default Home;
