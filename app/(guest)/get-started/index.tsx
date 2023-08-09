import { GetStartedSkeleton } from "@/components/ui/skeleton/get-started-skeleton";
import { TextStandard } from "@/components/ui/text-stantard";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  Anchor,
  Button,
  Image,
  SizableText,
  YStack,
  useMedia,
  useWindowDimensions,
} from "tamagui";

const GetStarted = () => {
  const { height, width } = useWindowDimensions();
  const media = useMedia();
  const [loaded, setLoaded] = useState(false);
  return (
    <YStack f={1} jc={"space-between"} backgroundColor={"$started"}>
      <YStack px={`${!loaded ? "$4" : "auto"}`} f={1}>
        {!loaded && <GetStartedSkeleton height={height * 0.4} />}
        <Image
          resizeMode="contain"
          source={{
            uri: "https://krcmqbhhmmqactonljmp.supabase.co/storage/v1/object/public/public-files/get-started.png?t=2023-08-09T15%3A44%3A13.519Z",
            height: height * 0.5,
            width: width,
          }}
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
                pressStyle={{ opacity: 0.8 }}
              >
                Join now
              </Button>
            </YStack>
            <YStack f={1} ai={"center"}>
              <TouchableOpacity>
                <Anchor
                  pressStyle={{ opacity: 0.8 }}
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

export default GetStarted;
