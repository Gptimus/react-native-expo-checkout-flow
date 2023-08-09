import { HeadingStandard } from "@/components/ui/heading-standard";
import { TextStandard } from "@/components/ui/text-stantard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, XStack, YStack, useMedia, useWindowDimensions } from "tamagui";
import { ChevronRight } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

const Home = () => {
  const { height } = useWindowDimensions();
  const media = useMedia();

  const handleShowGetStarted = () => {
    router.replace("/(guest)/get-started");
  };

  return (
    <YStack backgroundColor={"$background"} f={1} px="$4">
      <SafeAreaView style={styles.container}>
        <YStack f={1} jc={"space-between"}>
          <YStack space="$6">
            <XStack f={1} py={"$6"}>
              <YStack h={2} f={5} bc={"$primary"}></YStack>
              <YStack h={2} f={2} bc={"$muted"}></YStack>
            </XStack>
            <YStack ai={"center"} px={`${media.sm ? "$8" : "$20"}`}>
              <HeadingStandard>What are your expectations?</HeadingStandard>
            </YStack>
            <XStack space height={height * 0.37}>
              <YStack f={1} space={`${media.sm ? "$2" : "$4"}`}>
                <YStack
                  f={1}
                  pl={"$4"}
                  jc={"center"}
                  br={"$6"}
                  backgroundColor={"$color"}
                >
                  <TextStandard>Activity partner</TextStandard>
                </YStack>
                <YStack
                  f={1}
                  pl={"$4"}
                  jc={"center"}
                  br={"$6"}
                  backgroundColor={"$color"}
                >
                  <TextStandard>Casual dating</TextStandard>
                </YStack>
                <YStack
                  f={4}
                  pl={"$4"}
                  pb={"$3"}
                  jc={"flex-end"}
                  br={"$6"}
                  backgroundColor={"$color"}
                >
                  <TextStandard>Start a family</TextStandard>
                </YStack>
              </YStack>
              <YStack f={1} space={`${media.sm ? "$2" : "$4"}`}>
                <YStack
                  f={5}
                  jc={"flex-end"}
                  br={"$6"}
                  backgroundColor={"$primary"}
                  pl={"$4"}
                  pb={"$3"}
                >
                  <TextStandard inverted={false}>Depends</TextStandard>
                  <TextStandard inverted={false}>on our</TextStandard>
                  <TextStandard inverted={false}>connections</TextStandard>
                </YStack>
                <YStack
                  f={1}
                  pl={"$4"}
                  jc={"center"}
                  br={"$6"}
                  backgroundColor={"$color"}
                >
                  <TextStandard>First friend</TextStandard>
                </YStack>
              </YStack>
            </XStack>
          </YStack>
          <YStack>
            <Button
              onPress={handleShowGetStarted}
              size={`${media.sm ? "$5" : "$9"}`}
              br={"$10"}
              backgroundColor={"$primary"}
              color={"white"}
              borderWidth="0"
              pressStyle={{ opacity: 0.9 }}
              iconAfter={<ChevronRight size={25} />}
            >
              Continue
            </Button>
          </YStack>
        </YStack>
      </SafeAreaView>
    </YStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
