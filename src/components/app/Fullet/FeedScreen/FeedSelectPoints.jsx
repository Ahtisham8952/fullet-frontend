import { Box,Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'
const SelectPoint=[
    {
        Name:'All',
        Color:'#FFFFFF',
        weight:'700'
    },
    {
        Name:'Following',
        Color:'#D6CEFF',
        weight:'400'
    },
    {
        Name:'Subscriptions',
        Color:'#D6CEFF',
        weight:'400'
    },
    {
        Name:'History',
        Color:'#D6CEFF',
        weight:'400'
    },
]
const FeedSelectPoints = () => {
  return (
   <Box mb="20px" mt="30px">
    <Flex>
    {SelectPoint.map((val) => (
        <Box  pr={{base:'10px',md:'24px'}}  borderRight=" 1px solid #504977" mr="24px" _last={{borderRight:'none'}}>
        <Text
            
            color={val.Color}
            fontSize={{base:'14px',md:'16px',lg:'20px'}}
            fontWeight={val.weight}
            lineHeight={"24px"}
          >
      {val.Name}
          </Text>
        </Box>
    ))}
    
    </Flex>

   </Box>
  )
}

export default FeedSelectPoints