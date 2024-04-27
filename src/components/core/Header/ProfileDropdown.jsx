import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
const MenuItems = [
  {
    Image: "/homeicons.svg",
    Text: "Home",
  },
  {
    Image: "/profileimage.svg",
    Text: "Profile",
  },
  {
    Image: "/feedimage.svg",
    Text: "Feed",
  },
  {
    Image: "/trendingimage.svg",
    Text: "Trending",
  },
  {
    Image: "/Discpoverimage.svg",
    Text: "Discover",
  },
  {
    Image: "/defencimage.svg",
    Text: "Defence",
  },
  {
    Image: "/favicons.svg",
    Text: "Favourites",
  },
  {
    Image: "/settingsicon.svg",
    Text: "Settings",
  },
  {
    Image: "/conatcticons.svg",
    Text: "Contact",
  },
];
export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
      p="0px"
      bg="transparent"
      colorScheme="transparent"
        as={Button}
        onClick={() => setIsOpen(!isOpen)}
        rightIcon={isOpen ? <CloseIcon /> : <Image src="/threelines.svg"></Image>}
      >
       
      </MenuButton>
      <MenuList
        py="60px"
        px="49px"
        position={"absolute"}
        right="-164px"
        w={"330px"}
       
        bg="transparent"
        border="none"
        bgImage="/menubgs.png"
        backgroundSize={"cover"}
        backgroundRepeat="no-repeat"
      >
        <Flex justifyContent={"center"} mb="31px">
          <Button
            bg="transparent"
            colorScheme={"transparent"}
            color="#FFFFFF"
            fontSize="10px"
            fontWeight="400"
            lineHeight={"20px"}
            h="48px"
            p="8px"
            alignItems={"center"}
            w="208px"
            justifyContent={"space-between"}
            borderRadius={"50px"}
            border="1px solid rgba(255, 255, 255, 0.25)"
          >
            <Image src="/btnlocks.svg"></Image>
            <Text
              mt="5px"
              color="rgba(255, 255, 255, 0.5)"
              fontSize="16px"
              fontWeight="500"
              lineHeight={"150%"}
            >
              Unlock all Features
            </Text>
          </Button>
        </Flex>

        <Box>
          <Image mb="20px" mx="auto" src="/threelines.svg"></Image>
          {MenuItems.map((val) => (
            <Flex
            cursor={"pointer"}
              gap="28px"
              py="20px"
              borderBottom={" 1px solid rgba(255, 255, 255, 0.15)"}
            >
              <Image src={val.Image}></Image>
              <Text
                color="#FFFFFF"
                fontSize="24px"
                fontWeight="600"
                lineHeight={"150%"}
              >
                {val.Text}
              </Text>
            </Flex>
          ))}
        </Box>
      </MenuList>
    </Menu>
  );
}
