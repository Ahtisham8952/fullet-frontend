import { Box,Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'

const Settingsdata = ({DataType,SettingsTypes}) => {
  return (
   <Box mb="40px">
   <Box mb="40px">
       <Text
            
            color="#FFFFFF"
            fontSize="32px"
            fontWeight="600"
            lineHeight={"42px"}
          >
      {DataType}
          </Text>
          </Box>
          {SettingsTypes.map((list) => (
  <Flex justifyContent={"space-between"} py="14px" borderBottom={"1px solid rgba(255, 255, 255, 0.15)"}>
  <Flex alignItems={"center"} gap={{base:'14px',md:'16px',lg:'24px'}}>
      <Image src={list.Image}></Image>
      <Text
  
  color="#FFFFFF"
  fontSize={{base:'14px',md:'16px',lg:'24px'}}
  fontWeight="400"
  lineHeight={"34px"}
>
{list.Name}
</Text>
  </Flex>


</Flex>
))}
        
   </Box>
  )
}

export default Settingsdata