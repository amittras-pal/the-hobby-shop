import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Progress,
  Tag,
  TagLabel,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import { MdChevronRight } from "react-icons/md";

function Medium() {
  const toast = useToast();
  const tileTextColor = useColorModeValue("blue.500", "blue.200");

  const [mediumPosts, setMediumPosts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pal.amittras"
        );
        const { data } = response;
        setMediumPosts(data);
      } catch (error) {
        setMediumPosts([]);
        toast({
          title: "Failed to fetch posts!",
          description: "Failed to retrieve medium posts by Amittras Pal.",
          status: "error",
          duration: 5000,
          isClosable: false,
        });
      }
    })();
  }, [toast]);

  if (!mediumPosts) return <Progress isIndeterminate size={"md"} />;

  return (
    <Container maxW={"container.xl"} mt={6}>
      <Heading size={"lg"} mb={6}>
        {mediumPosts?.feed?.title}
      </Heading>
      {mediumPosts?.items.map((post) => (
        <Box
          key={post.guid}
          w={"full"}
          outline={"none"}
          borderWidth={"1px"}
          rounded={"lg"}
          p={4}
          mb={4}
          boxShadow={"lg"}
          //   transition={"all 0.25s ease-in-out"}
          //   _focusWithin={{
          //     borderColor: "blue.300",
          //     color: tileTextColor,
          //   }}
          //   _hover={{
          //     borderColor: "blue.300",
          //     color: tileTextColor,
          //   }}
        >
          <Heading
            size={"md"}
            as="a"
            href={post.link}
            target={"_blank"}
            outline={"none"}
            transition={"all 0.25s ease-in-out"}
            _hover={{
              color: tileTextColor,
            }}>
            {post.title}
          </Heading>
          <Text fontStyle={"italic"} fontSize={"sm"} textColor={"gray.500"}>
            {DateTime.fromSQL(post.pubDate).toLocaleString(
              DateTime.DATETIME_MED
            )}
          </Text>
          <Flex mt={4} flexWrap={"wrap"} w={"full"} gap={2}>
            {post.categories.map((category) => (
              <Tag
                key={category}
                size={"sm"}
                variant={"subtle"}
                colorScheme={"blue"}>
                <TagLabel>{category}</TagLabel>
              </Tag>
            ))}
          </Flex>
        </Box>
      ))}
      <Flex justifyContent={"flex-end"} w={"full"}>
        <Button
          as="a"
          href="https://medium.com/@pal.amittras"
          size={"sm"}
          variant={"solid"}
          colorScheme={"blue"}
          boxShadow={"md"}
          rightIcon={<MdChevronRight />}>
          Read On Medium
        </Button>
      </Flex>
    </Container>
  );
}

export default Medium;
