import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { FallbackProps } from "react-error-boundary";

export const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <VStack pt={"100px"}>
      <Heading color={"red.400"}>Error happend!</Heading>
      <Text fontSize={"xl"}>{error.message}</Text>
      <Button onClick={resetErrorBoundary}>Reset</Button>
    </VStack>
  );
};
