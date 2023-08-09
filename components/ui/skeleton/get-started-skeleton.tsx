import { YStack, getTokens } from "tamagui";
import { Skeleton } from "./skeleton";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type SkeletonCardType = {
  height: number;
};

export const GetStartedSkeleton: React.FC<SkeletonCardType> = ({ height }) => {
  const { width } = useWindowDimensions();
  const v = getTokens().size["4"].val;

  return (
    <SafeAreaView>
      <YStack space="$2">
        <Skeleton height={height} width={width - v} props={{ br: 8 }} />
      </YStack>
    </SafeAreaView>
  );
};
