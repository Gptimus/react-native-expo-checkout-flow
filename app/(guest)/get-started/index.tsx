import { GetStartedSkeleton } from "@/components/ui/skeleton/get-started-skeleton";
import { TextStandard } from "@/components/ui/text-stantard";
import { useState } from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Anchor, Button, SizableText, YStack, useMedia } from "tamagui";

const { height, width } = Dimensions.get("screen");

const GetStarted = () => {
  const media = useMedia();
  const [loaded, setLoaded] = useState(false);
  return (
    <YStack f={1} jc={"space-between"} backgroundColor={"$started"}>
      <YStack px={`${!loaded ? "$4" : "auto"}`} f={1}>
        {!loaded && <GetStartedSkeleton height={height * 0.4} />}
        <Image
          style={styles.image}
          source={require("@/assets/images/get-started.png")}
          onLoad={() => setLoaded(true)}
        />
      </YStack>

      <YStack f={1} px={`$4`}>
        <YStack mb="$3">
          <SizableText
            color={"$white"}
            lineHeight={`${media.sm ? "$10" : "$14"}`}
            fontSize={`${media.sm ? "$11" : "$15"}`}
            fontWeight={"900"}
          >
            Welcome
          </SizableText>
          <SizableText
            color={"$white"}
            lineHeight={`${media.sm ? "$10" : "$14"}`}
            fontSize={`${media.sm ? "$10" : "$14"}`}
            fontWeight={"900"}
          >
            to Swiftly
          </SizableText>
        </YStack>
        <YStack f={1} space>
          <YStack f={1}>
            <TextStandard inverted={false}>
              Get shopping done fast with our easy checkout app. Browse, add to
              cart, and purchase items seamlessly. Secure payment and saved info
              make checking out a breeze. Sign up now for the simplest shopping
              experience yet.
            </TextStandard>
          </YStack>
          <YStack f={1}>
            <YStack f={1}>
              <Button
                size={`${media.sm ? "$5" : "$9"}`}
                br={"$10"}
                backgroundColor={"$white"}
                color={"$primary"}
                borderWidth="0"
                pressStyle={styles.opacity}
              >
                Join now
              </Button>
            </YStack>
            <YStack f={1} ai={"center"}>
              <TouchableOpacity>
                <Anchor
                  pressStyle={styles.opacity}
                  color={"white"}
                  lineHeight={`${media.sm ? "$1" : "$8"}`}
                  fontSize={`${media.sm ? "$5" : "$9"}`}
                >
                  Already a member? Login
                </Anchor>
              </TouchableOpacity>
            </YStack>
          </YStack>
        </YStack>
      </YStack>
    </YStack>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.5,
  },
  opacity: {
    opacity: 0.8,
  },
});

export default GetStarted;
