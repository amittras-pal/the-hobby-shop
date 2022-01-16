import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import routeMenu from "../../constants/routeMenu";

function Sidebar({ isSidebarOpen, closeSidebar, buttonMode }) {
  const navigate = useNavigate();
  return (
    <Drawer placement="left" onClose={closeSidebar} isOpen={isSidebarOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          borderBottomWidth={"1px"}
          display={"flex"}
          alignItems={"center"}>
          <Heading size={"sm"}>Explorer's Hobby Shop</Heading>
          <DrawerCloseButton />
        </DrawerHeader>
        <DrawerBody px={0}>
          <List>
            {routeMenu.map((item) => {
              return item.showInMenu ? (
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
              ) : null;
            })}
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;
