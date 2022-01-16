import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import tileCover1 from "../../../resources/image/photo-tile-cover.jpg";

function Hobbies() {
  const tileTextColor = useColorModeValue("red.500", "red.200");

  return (
    <Container maxW={"container.xl"} py={4} px={2}>
      <Grid templateColumns={"repeat(4, 1fr)"} gap={4} p={2}>
        <GridItem colSpan={[4, 2]}>
          <Box
            mb={4}
            position={"relative"}
            w={"full"}
            minH={"10rem"}
            bgImage={`url(${tileCover1})`}
            bgSize={"cover"}
            boxShadow={"lg"}
            rounded={"md"}
            borderWidth={"thin"}
            outline={"none"}
            overflow={"hidden"}
            style={{ transition: "all 0.25s ease-in-out", outline: "none" }}
            _focusWithin={{
              borderColor: "blue.300",
              color: tileTextColor,
            }}
            _hover={{
              borderColor: "blue.300",
              color: tileTextColor,
            }}>
            <Box
              p={4}
              w={"full"}
              position={"absolute"}
              bottom={0}
              bgImage={`linear-gradient(to bottom, #00000000, #000000AA)`}>
              <Heading size={"md"} mb={4}>
                Photography
              </Heading>
              <Text>
                Checkout the way I explore and freeze the world around me . . .
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Hobbies;
