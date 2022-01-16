import {
  Box,
  GridItem,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function HobbyTile({ title, description, cover, link }) {
  const tileTextColor = useColorModeValue("blue.500", "blue.200");
  return (
    <GridItem
      as={Link}
      to={link}
      outline={"none"}
      colSpan={[4, 2]}
      borderWidth={"1px"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.25s ease-in-out"}
      _focusWithin={{
        borderColor: "blue.300",
        color: tileTextColor,
      }}
      _hover={{
        borderColor: "blue.300",
        color: tileTextColor,
      }}>
      <Box w={"full"} boxShadow={"lg"} p={6}>
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
    </GridItem>
  );
}

export default HobbyTile;
