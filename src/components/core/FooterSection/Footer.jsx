import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { authRoutes } from "../../../constants";
const Features = [
  {
    list: " Track Wallets",
  },
  {
    list: " Track NFTs",
  },
  {
    list: " Track DAO/DeFi",
  },
  {
    list: " Follow Traders",
  },
];
const Support = [
  {
    list: " Track Wallets",
  },
  {
    list: " Track NFTs",
  },
  {
    list: " Track DAO/DeFi",
  },
  {
    list: " Follow Traders",
  },
];
const Resources = [
  {
    list: " About Us",
  },
  {
    list: " Blogs",
  },
  {
    list: "  Guides",
  },
  {
    list: " Career opportunities",
  },
];
const Footer = () => {
  const { pathname } = useRouter();

  const hideFooter = authRoutes.includes(pathname);

  return (
    <>
      {!hideFooter && (
        <Box
          w="100%"
          px={{ base: "20px", xxl: "102px" }}
          mx="auto"
          pb={{ base: "40px", lg: "82px" }}
        >
          <Flex
            gap={{ base: "20px", md: "40px", lg: "130px" }}
            alignItems={"center"}
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent="space-between"
          >
            <Flex
              w={{ base: "100%", lg: "30%" }}
              justifyContent={{ base: "center", lg: "flex-start" }}
            >
              <Box>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  mx={{ base: "auto", md: "0px" }}
                />
                <Text
                  color="#C9BFFF"
                  fontSize="15px"
                  fontWeight="500"
                  lineHeight={"150%"}
                  maxW={{ base: "100%", md: "280px" }}
                  my="20px"
                  textAlign={{ base: "center", md: "left" }}
                >
                  Welcome to the best web3 tracker on the internet.
                </Text>

                <Image src="/storesimag.png" alt="logo" />
              </Box>
            </Flex>

            <Box w={{ base: "100%", lg: "70%" }}>
              <Flex
                gap="20px"
                textAlign={"center"}
                justifyContent={{ base: "center", md: "space-between" }}
                flexDirection={{ base: "column", md: "row" }}
              >
                <Box>
                  <Text
                    color="#FFFFFF"
                    fontSize="24px"
                    fontWeight="700"
                    lineHeight={"150%"}
                    mb="10px"
                  >
                    Features
                  </Text>
                  {Features.map((val, i) => (
                    <Text
                      key={i}
                      color="#FFFFFF"
                      fontSize="18px"
                      fontWeight="500"
                      lineHeight={"150%"}
                    >
                      {val.list}
                    </Text>
                  ))}
                </Box>
                <Box>
                  <Text
                    color="#FFFFFF"
                    fontSize="24px"
                    fontWeight="700"
                    lineHeight={"150%"}
                    mb="10px"
                  >
                    Support
                  </Text>
                  {Support.map((val, i) => (
                    <Text
                      key={i}
                      color="#FFFFFF"
                      fontSize="18px"
                      fontWeight="500"
                      lineHeight={"150%"}
                    >
                      {val.list}
                    </Text>
                  ))}
                </Box>
                <Box>
                  <Text
                    color="#FFFFFF"
                    fontSize="24px"
                    fontWeight="700"
                    lineHeight={"150%"}
                    mb="10px"
                  >
                    Resources
                  </Text>
                  {Resources.map((val, i) => (
                    <Text
                      key={i}
                      color="#FFFFFF"
                      fontSize="18px"
                      fontWeight="500"
                      lineHeight={"150%"}
                    >
                      {val.list}
                    </Text>
                  ))}
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            mt="47px"
          >
            <Box>
              <Text
                color="#FFFFFF"
                fontSize="18px"
                fontWeight="700"
                lineHeight={"150%"}
                textAlign="center"
                mb="15px"
              >
                Socials
              </Text>
              <Flex
                gap="16px"
                alignItems={"center"}
                mb="42px"
                justifyContent={"center"}
              >
                <Link href="#">
                  <Image src="/fbicon.png"></Image>
                </Link>
                <Link>
                  <Image src="/twiicon.svg"></Image>
                </Link>
                <Link>
                  <Image src="/insticon.svg"></Image>
                </Link>
                <Link>
                  <Image src="/linkedicon.svg"></Image>
                </Link>
              </Flex>
              <Box>
                <Text
                  color="#FFFFFF"
                  fontSize="14px"
                  fontWeight="400"
                  lineHeight={"150%"}
                  textAlign="center"
                >
                  Copyright ©Fullet 2022. All rights reserved.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Footer;
