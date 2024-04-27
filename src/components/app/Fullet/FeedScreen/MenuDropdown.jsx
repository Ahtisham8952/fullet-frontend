import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Image,
    Flex,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
const MenuDropdown = ({ButtonName,Color}) => {
  return (
    <Menu>
    <MenuButton  fontSize="10px" color={Color} display={"flex"} alignItems="center" borderRadius={"40px"} h="30px" px="16px" border=" 1px solid #444444" >
        <Flex gap="5px" alignItems={"center"}
       >
        {ButtonName}
    <Image src="/tipdowns.svg"></Image>
        </Flex>

  
    </MenuButton>
    <MenuList>
      <MenuItem>-</MenuItem>
      <MenuItem>-</MenuItem>
      <MenuItem>-</MenuItem>
      <MenuItem>-</MenuItem>
      <MenuItem>-</MenuItem>
    </MenuList>
  </Menu>
  )
}

export default MenuDropdown