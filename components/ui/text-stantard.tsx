import React, { PropsWithChildren } from "react";
import { Paragraph, useMedia } from "tamagui";

type TextStandardType = PropsWithChildren<{
  inverted?: boolean;
}>;

export const TextStandard: React.FC<TextStandardType> = ({
  children,
  inverted = true,
}) => {
  const media = useMedia();
  return (
    <Paragraph
      lineHeight={`${media.sm ? "$1" : "$8"}`}
      fontSize={`${media.sm ? "$5" : "$9"}`}
      color={`${inverted ? "$inverted" : "white"}`}
    >
      {children}
    </Paragraph>
  );
};
