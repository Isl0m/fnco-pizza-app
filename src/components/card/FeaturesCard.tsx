import { VStack, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  src: string;
  text: string;
};

export const FeaturesCard: FC<Props> = ({ src, text }) => {
  return (
    <VStack gap={4}>
      <Image boxSize={200} src={src} alt={text} />
      <Text fontWeight={"bold"}>{text}</Text>
    </VStack>
  );
};
