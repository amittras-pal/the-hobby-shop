import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import routeMenu from "../../constants/routeMenu";

function AppHeader() {
  const {
    isOpen,
    onOpen: openSidebar,
    onClose: closeSidebar,
  } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate();
  const location = useLocation();

  const buttonMode = (path) => {
    return location.pathname === path ? "solid" : "ghost";
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.200", "blue.800")}
        px={4}
        position={"sticky"}
        top={0}
        boxShadow={"md"}
        zIndex={2}>
        <Flex h={12} alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"} spacing={2}>
            <IconButton
              size={"sm"}
              variant={"ghost"}
              icon={
                <MdMenu
                  style={{
                    transform: "translateX(65%)",
                  }}
                />
              }
              display={{
                md: "none",
              }}
              aria-label={"Open Menu"}
              onClick={isOpen ? closeSidebar : openSidebar}
            />
            <Heading fontWeight={"normal"} size={"md"}>
              The Hobby Shop
            </Heading>
          </HStack>
          <HStack alignItems={"center"} spacing={2}>
            <Box display={{ base: "none", md: "block" }}>
              {routeMenu.map((item) => (
                <Button
                  as={Link}
                  to={item.path}
                  size={"sm"}
                  ml={2}
                  variant={buttonMode(item.path)}
                  colorScheme={"blue"}
                  leftIcon={<item.icon style={{ size: "2rem" }} />}
                  key={item.label}>
                  {item.label}
                </Button>
              ))}
            </Box>
            <IconButton
              size={"sm"}
              variant={"ghost"}
              colorScheme={"blue"}
              icon={colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
              aria-label={"Change Color Theme"}
              onClick={toggleColorMode}
            />
          </HStack>
        </Flex>
      </Box>
      <Drawer placement="left" onClose={closeSidebar} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth={"1px"}
            display={"flex"}
            alignItems={"center"}>
            <Heading size={"sm"}>The Hobby Shop</Heading>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody px={0}>
            <List>
              {routeMenu.map((item) => (
                <ListItem
                  as={Button}
                  variant={buttonMode(item.path)}
                  colorScheme={"blue"}
                  w={"full"}
                  borderRadius={"0"}
                  display={"flex"}
                  justifyContent={"start"}
                  p={3}
                  key={item.label}
                  onClick={() => {
                    navigate(item.path);
                    closeSidebar();
                  }}>
                  <ListIcon
                    as={() =>
                      item.icon({
                        size: "1.25em",
                        style: { marginRight: "0.75rem" },
                      })
                    }
                  />
                  <Text mt={-1}>{item.label}</Text>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AppHeader;
