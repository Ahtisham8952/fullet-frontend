import { Center, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState, useEffect, useCallback } from "react";


const ScrollUpBtn = () => {
  const [isScrollBtn, setIsScrollBtn] = useState(false);

  const showScrollBtn = useCallback(() => {
    if(window.scrollY === 0) {
      setIsScrollBtn(false);
    } else  setIsScrollBtn(true);
  }, [isScrollBtn]);

  useEffect(() => {
    window.addEventListener("scroll", showScrollBtn);
    return () => window.removeEventListener("scroll", showScrollBtn);
  }, [isScrollBtn]);

  const handleScroll = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {isScrollBtn && (
        <Center
        
          onClick={handleScroll}
         border="1px solid #D6CEFF"
          boxShadow="base"
         
         
          borderRadius="30px"
          bg="transparent"
          h="40px"
          px="12px"
          cursor="pointer"
        >
        <Flex alignItems={"center"} gap="10px">
        <Text
            
            color="#D6CEFF"
            fontSize="10px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Back up
          </Text>
          <Image src="/tiptopsgone.svg"></Image>
        </Flex>
        </Center>
      )}
    </>
  );
};

export default ScrollUpBtn;
