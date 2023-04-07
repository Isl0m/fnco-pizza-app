import { Avatar, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { Rating } from "../rating";

type Props = {
  avatarSrc: string;
  fullname: string;
  comment: string;
  rating: number;
};

export const CommentCard: FC<Props> = ({
  avatarSrc,
  fullname,
  comment,
  rating,
}) => {
  return (
    <Stack
      my={2}
      direction={"row"}
      spacing={4}
      align={"center"}
      maxW={"md"}
      p={4}
      bgColor={useColorModeValue("gray.200", "gray.700")}
      borderRadius={"lg"}
    >
      <Avatar src={avatarSrc} w={20} h={20} borderRadius={"0.25rem"} />
      <Stack direction={"column"} spacing={0} fontSize={"sm"}>
        <Text fontWeight={600}>{fullname}</Text>
        <Text color={"gray.500"} noOfLines={3}>
          {comment}
        </Text>
        <Rating rating={rating} />
      </Stack>
    </Stack>
  );
};
