import React, { PropsWithChildren } from "react";
import { SizableText, useMedia } from "tamagui";

export const HeadingStandard: React.FC<PropsWithChildren> = ({ children }) => {
  const media = useMedia();
  return (
    <SizableText
      color={"$secondary"}
      lineHeight={`${media.sm ? "$8" : "$12"}`}
      fontSize={`${media.sm ? "$9" : "$13"}`}
      fontWeight={"900"}
    >
      {children}
    </SizableText>
  );
};
