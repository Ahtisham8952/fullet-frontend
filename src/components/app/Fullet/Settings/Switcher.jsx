import { Box, Flex, FormLabel, Icon, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

const Switcher = () => {
  const [themeMode, setThemeMode] = useState("dark"); // Initialize state with a string value instead of a tuple

  const handleToggle = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark"); // Use string comparison instead of checking for inclusion
  };

  return (
    <FormLabel
      htmlFor="theme-switcher"
      as="label" // Use a string instead of an object for the "as" prop
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={2}
      position="relative"
    >
      <Input
        id="theme-switcher"
        type="checkbox"
        checked={themeMode === "light"} // Use string comparison instead of checking for inclusion
        onChange={handleToggle} // Pass a function reference instead of an inline function
        display="inline-block"
        appearance="none"
        cursor="pointer"
        height="35px"
        width="82px"
        backgroundColor="transparent"
        border="1px solid"
        borderColor=" #444444"
        borderRadius="full"
        
      />
      <Flex
        className="iconMove" // Remove the backticks, as there are no dynamic values in this string
        transition="all 0.2s ease-in"
        transform={`translateX(${themeMode === "light" ? "50px" : "0"})`} // Use template literals to build the transform string
        position="absolute"
        cursor="pointer"
        top="2px" // Use strings instead of numbers for the "top" and "left" props
        left="1px"
        w="32px"
        h="32px"
        p="4px"
        bg="white"
        borderRadius="full"
      >
        <Icon
          as={themeMode === "light" ? BsSunFill : BsFillMoonFill}
          padding="2px"
          w="24px"
          h="24px"
        />
       
      </Flex>
      <Flex
          
          left={themeMode === "light" ? "20px" : "40px"}
          transition="all 0.2s ease-in"
          position={"absolute"}
        
          color="white"
          fontSize={"14px"}
        >
          {themeMode === "light" ? "off" : "on"}
        </Flex>
    </FormLabel>
  );
};

export default Switcher;
