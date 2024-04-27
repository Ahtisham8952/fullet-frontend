import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import MenuDropdown from '../FeedScreen/MenuDropdown'
import BalancerDefiSection from './BalancerDefiSection'



const Defidata1=[
    {
        Name:'Capital provided',
        Value:'$100.14K',
    },
    {
        Name:'Asset gains',
        Value:'-$7,800.12',
    },
    {
        Name:'Capital market value',
        Value:'$100.14K',
    },
]
const Defidata2=[
    {
        Name:'Total rewards',
        Value:'$100.14K',
    },
    {
        Name:'Total position gains',
        Value:'$10.14K',
    },
   
]
const DefiTabContent = () => {
  return (
   <Box>
     <Flex gap="20px" mt="20px">
<MenuDropdown ButtonName="All networks" Color="white"/>
<MenuDropdown ButtonName="Highest first" Color="white"/>
        </Flex>
        <Grid  templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)",lg:'repeat(3, 1fr)' }} gap="32px" w="100%" mt="50px">
        {Defidata1.map((vi) => (
            <Box h="133px" bg=" #150C35" border=" 1px solid rgba(255, 255, 255, 0.3)" borderRadius={"20px"} p="18px" >
                <Flex alignItems={"center"} justifyContent="space-between" mb="14px">
                <Text
            
            color="#D6CEFF"
            fontSize="18px"
            fontWeight="500"
            lineHeight={"150%"}
          >
     {vi.Name}
          </Text>
          <Image src="/infoterent.svg"></Image>
                </Flex>
                <Text
            
            color="#FFFFFF"
            fontSize="40px"
            fontWeight="700"
            lineHeight={"48px"}
          >
    {vi.Value}
          </Text>

            </Box>
        ))}
        </Grid>
        <Grid  templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)",lg:'repeat(2, 1fr)' }} gap="32px" w="100% " my="30px">
        {Defidata2.map((vi) => (
            <Box h="133px" bg=" #150C35" border=" 1px solid rgba(255, 255, 255, 0.3)" borderRadius={"20px"} p="18px" >
                <Flex alignItems={"center"} justifyContent="space-between" mb="14px">
                <Text
            
            color="#D6CEFF"
            fontSize="18px"
            fontWeight="500"
            lineHeight={"150%"}
          >
     {vi.Name}
          </Text>
          <Image src="/infoterent.svg"></Image>
                </Flex>
                <Text
            
            color="#FFFFFF"
            fontSize="40px"
            fontWeight="700"
            lineHeight={"48px"}
          >
    {vi.Value}
          </Text>

            </Box>
        ))}
        </Grid>
        <Box>
            <Flex alignItems={"center"} gap="10px">
            <Text
            
            color="#FFFFFF"
            fontSize="26px"
            fontWeight="600"
            lineHeight={"31px"}
          >
     2 current positions
          </Text>
          <Text
            
            color="#D6CEFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"17px"}
          >
    Using market price quotes updated 10 minutes ago. Next available in: 06:45 minutes
          </Text>
            </Flex>

            <BalancerDefiSection/>
            <BalancerDefiSection/>
        </Box>
      

   </Box>
  )
}

export default DefiTabContent