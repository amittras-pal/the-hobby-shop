import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import routeMenu from "../../constants/routeMenu";
import LoginModal from "./LoginModal";
import Sidebar from "./Sidebar";

function AppHeader() {
  const {
    isOpen: isSidebarOpen,
    onOpen: openSidebar,
    onClose: closeSidebar,
  } = useDisclosure();
  const {
    isOpen: loginModalOpen,
    onOpen: showLogin,
    onClose: closeLogin,
  } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const location = useLocation();
  const buttonMode = (path) => {
    return location.pathname.includes(path) ? "solid" : "ghost";
  };

  const startLogin = (e) => {
    e.preventDefault();
    showLogin();
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
              onClick={isSidebarOpen ? closeSidebar : openSidebar}
            />
            <Heading fontWeight={"normal"} size={"md"}>
              Explorer's Hobby Shop
            </Heading>
          </HStack>
          <HStack alignItems={"center"} spacing={2}>
            <Box display={{ base: "none", md: "block" }}>
              {routeMenu.map((item) => {
                return item.showInMenu ? (
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
                ) : null;
              })}
            </Box>
            <IconButton
              size={"sm"}
              variant={"ghost"}
              colorScheme={"blue"}
              icon={colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
              aria-label={"Change Color Theme"}
              onClick={toggleColorMode}
              onContextMenu={startLogin}
            />
          </HStack>
        </Flex>
      </Box>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        buttonMode={buttonMode}
      />
      <LoginModal loginModalOpen={loginModalOpen} closeLogin={closeLogin} />
    </>
  );
}

export default AppHeader;
