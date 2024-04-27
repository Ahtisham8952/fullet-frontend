import {
  Box,
  Link,
  Image,
  Button,
  Container,
  Flex,
  Input,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import MobileMenu from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { useRouter } from "next/router";
import { ProfileDropdown } from "../Header/ProfileDropdown";
import { FuletContext } from "../../../context";
import SearchFilters from "../Header/SearchFilters";
import { authRoutes } from "../../../constants";

const links = [
  {
    label: "Home",
    href: "/",
    isDisabled: false,
    Border: "2px solid rgba(52, 97, 255, 1)",
  },
  { label: "Feed", href: "/feedscreen", isDisabled: false },
  { label: "Profile", href: "/profile", isDisabled: false },
  { label: "Settings", href: "/settings", isDisabled: false },
];

const Header = () => {
  const { isSearchBarExpanded, expandSearchBar } = useContext(FuletContext);
  const { pathname } = useRouter();

  const hideHeader = authRoutes.includes(pathname);

  return (
    <>
      {!hideHeader && (
        <Box py="12px" bg="#04031A">
          <Container maxW={"100%"} px={{ base: "24px", md: "100px" }}>
            <Flex justifyContent="space-between" alignItems="center" gap="20px">
              <Flex>
                <Link
                  href="/"
                  maxW={{ sm: "128px", base: "100px" }}
                  ml={{ sm: "16px", base: "15px" }}
                  textDecoration="none !important"
                  position="relative"
                  mt={{ base: "6px", md: "2px" }}
                >
                  <Image src="/logo.svg" alt="logo" />
                </Link>
              </Flex>

              <Flex
                alignItems={"center"}
                display={{ lg: "flex", base: "none" }}
              >
                <NavLinks links={links} />
                <Flex alignItems={"center"}>
                  <Box
                    h="48px"
                    filter={
                      " drop-shadow(0px 13px 17px rgba(119, 87, 239, 0.2))"
                    }
                    mr="33px"
                    border="2px solid #3461FF"
                    borderRadius={"56px"}
                    p="8px 14px"
                    display={"flex"}
                    alignItems="center"
                  >
                    <Image src="/seacrhicons.svg"></Image>
                    <Input
                      style={{
                        width: isSearchBarExpanded && "736px",
                        transition: "all 0.5s linear",
                      }}
                      onFocus={expandSearchBar}
                      onBlur={expandSearchBar}
                      color="white"
                      textAlign="center"
                      outline={"none"}
                      _focusVisible={{ borderLeft: "none" }}
                      border="none"
                      placeholder="search"
                    ></Input>
                  </Box>
                  <Button
                    h="48px"
                    bg="transparent"
                    colorScheme={"transparent"}
                    color="#9A99AD"
                    fontSize="16px"
                    fontWeight="500"
                    lineHeight={"24px"}
                    p="12px 24px"
                    borderRadius={"56px"}
                    border="2px solid rgba(52, 97, 255, 1)"
                  >
                    Connect
                  </Button>
                  {/* <Image ml="33px" src="/threelines.svg"></Image> */}
                  <Box ml="33px">
                    <ProfileDropdown />
                  </Box>
                </Flex>
              </Flex>
              <Box display={{ lg: "none", base: "block" }}>
                <MobileMenu />
              </Box>
            </Flex>
          </Container>
        </Box>
      )}
      {isSearchBarExpanded && (
        <Box
          zIndex="1000"
          w="100%"
          h="100vh"
          pos="fixed"
          top="100px"
          left="0"
          bg="rgba(0,0,0,0.8)"
        >
          <SearchFilters />
        </Box>
      )}
    </>
  );
};

export default Header;
