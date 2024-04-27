import { Box,Image,Flex,Text } from '@chakra-ui/react'
import React from 'react'
import FeedNetworks from '../FeedScreen/FeedNetworks'
import ProfileTabs from '../ProfileComponent/ProfileTabs'
import DiscoverTabs from './DiscoverTabs'

const DiscoverMain = () => {
  return (
    <Box>
        <Box >
    <Box px={{base:'24px',lg:'100px'}} mt="40px">
        <Flex w="100%" alignItems={"center"} gap="20px" mb='30px'>
            <Box>
            <Text
        
        color="#FFFFFF"
        fontSize="48px"
        fontWeight="600"
        lineHeight={"150%"}
      >
Discover
      </Text>

            </Box>
        
      

        </Flex>
        <Flex alignItems={"center"} flexWrap="wrap" gap="15px" mb="30px">
          
            <FeedNetworks/>
        </Flex>
        

          
            <DiscoverTabs/>

         
       
        </Box>
        </Box>

    </Box>
  )
}

export default DiscoverMain