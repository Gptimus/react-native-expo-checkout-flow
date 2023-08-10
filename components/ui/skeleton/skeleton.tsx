import { StackProps, YStack } from "tamagui";
import { Animated, StyleSheet, useColorScheme } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";

type SkeletonType = {
  width: number;
  height: number;
  props?: StackProps;
};

export const Skeleton: React.FC<SkeletonType> = ({ height, width, props }) => {
  const colorScheme = useColorScheme();
  const bgColor =
    colorScheme === "light" ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.05)";
  const colors =
    colorScheme === "light" ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.5)";
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width * 2,
        useNativeDriver: true,
        duration: 1000,
      })
    ).start();
  }, [width]);

  const animatedStyle = {
    transform: [
      {
        translateX: translateX.interpolate({
          inputRange: [-width, 0, width],
          outputRange: [-width, 0, width],
        }),
      },
    ],
  };

  return (
    <YStack
      ov={"hidden"}
      backgroundColor={bgColor}
      h={height}
      width={width}
      {...props}
    >
      <Animated.View style={animatedStyle}>
        <LinearGradient
          style={styles.linear}
          colors={["transparent", colors, "transparent"]}
          start={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </YStack>
  );
};

const styles = StyleSheet.create({
  linear: {
    width: "100%",
    height: "100%",
  },
});
