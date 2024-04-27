import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export function MyDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        as={Button}
        onClick={() => setIsOpen(!isOpen)}
        rightIcon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      >
        <Image src="path/to/image" />
      </MenuButton>
      <Box position={"absolute"} right="0px">
      <MenuList top="20px" p="49px" bg="transparent" border={"none"} bgImage="/menubgs.png" h="756px"  backgroundPosition="center top"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}>
       
      </MenuList>
      </Box>
     
    </Menu>
  );
}