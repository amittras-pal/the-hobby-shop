import { Box, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function HobbyTile({ title, description, cover }) {
  const tileTextColor = useColorModeValue("blue.500", "blue.200");
  return (
    <Box
      w={"full"}
      boxShadow={"lg"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
      borderWidth={"1px"}
      cursor={"pointer"}
      transition={"all 0.25s ease-in-out"}
      _focusWithin={{
        borderColor: "blue.300",
        color: tileTextColor,
      }}
      _hover={{
        borderColor: "blue.300",
        color: tileTextColor,
      }}>
      <Box
        h={"10rem"}
        bg={"gray.100"}
        mt={-6}
        mx={-6}
        mb={6}
        overflow={"hidden"}>
        <Image src={cover} layout={"fill"} />
      </Box>
      <Stack>
        <Text
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"md"}
          letterSpacing={1.1}>
          {title}
        </Text>
        <Text color={"gray.500"}>{description}</Text>
      </Stack>
    </Box>
  );
}

export default HobbyTile;
