import { Box,Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'
import FeedNetworks from '../FeedScreen/FeedNetworks'
import ProfileTabs from './ProfileTabs'

const ProfileComponent = () => {
  return (
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
Portfolio
      </Text>

            </Box>
        
      <Box  gap="7px" w="84px" display={"flex"} alignItems="center" h="31px"  p="5px" border="1px solid #3461FF"  borderRadius="56px">
<Image src="/clockm.svg"></Image>
<Text
        
        color="#9A99AD"
        fontSize="10px"
        fontWeight="500"
        lineHeight={"13px"}
      >
  1min ago
      </Text>
      </Box>

        </Flex>
        <Flex alignItems={"center"} flexWrap="wrap" gap="15px" mb="30px">
            <Box>
            <Box  gap="13px" borderRadius={"50px"}   bg=" rgba(83, 30, 135, 0.34)" p="5px 20px" display={"flex"} alignItems="center">
        <Image h="34px" w="34px" src='/cyrptoguypic.svg'></Image>
        <Box>
        <Text
            
            color="#FFFFFF"
            fontSize="18px"
            fontWeight="700"
            lineHeight={"30px"}
          >
  cryptoguy
          </Text>
          <Text
            
            color="#9A99AD"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"24px"}
          >
  0x7132...084
          </Text>

        </Box>
  
        </Box>
            </Box>
            <FeedNetworks/>
        </Flex>
        

          
            <ProfileTabs/>

         
       
        </Box>
        </Box>
  )
}

export default ProfileComponent