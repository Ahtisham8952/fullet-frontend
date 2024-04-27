import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const SliderCard = ({image,Name,TrxID}) => {
  return (
    <Box >

   
   <Box bg="#FFFFFF" borderRadius={"20px"} p="10px" mx="10px">
   <Box mb="20px">
   <Image w="100%" src={image}></Image>
   </Box>
   <Box mb="20px">
   <Text
            
            color="#515151"
            fontSize="14px"
            fontWeight="700"
            lineHeight={"150%"}
            textAlign="center"
          >
     {Name}
          </Text>
          <Text
            
            color="#515151"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
            textAlign="center"
          >
     {TrxID}
          </Text>
   </Box>
   <Flex justifyContent={"center"}>
   <Button bg="#190F42" colorScheme={"#190F42"} 
     color="#FFFFFF"
     fontSize="16px"
     fontWeight="500"
     lineHeight={"150%"}
     p="6px 20px"
     borderRadius={"30px"}
   
     >
       Follow
     </Button>
   </Flex>
    

   </Box>
   </Box>
  )
}

export default SliderCard