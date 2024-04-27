import { Box,Text,Image,Flex, } from '@chakra-ui/react'
import React from 'react'
import FeedSection from './FeedSection'
import MenuDropdown from './MenuDropdown'
const HistoryUsers=[
    {
      Display:'/avtar-1.svg',
      Network:'/currency-1.svg',
      Name:' Me -',
      Username:'@cryptoguy',
      Assets:' $ 220 000 500',
      Percentage:'+46%',
    },
    {
      Display:'/linear-1.svg',
      Network:'/currency-1.svg',
      Name:' Uniswap - ',
      Username:'@crypo',
      Assets:' $ 220 000 500',
      Percentage:'+46%',
    },
  
    {
      Display:'/avatar-2.svg',
      Network:'/currency-2.svg',
      Name:' Elon Musk -',
      Username:' @e_daddy',
      Assets:' $ 220 000 500',
      Percentage:'+46%',
    },
    {
      Display:'/avatar-3.svg',
      Network:'/currency-2.svg',
      Name:'Perry - ',
      Username:'@cryptoknown',
      Assets:' $ 220 000 500',
      Percentage:'+46%',
    },
    {
      Display:'/avatar-4.svg',
      Network:'/currency-2.svg',
      Name:' Lady - ',
      Username:'@cryptoqueen',
      Assets:' $ 220 000 500',
      Percentage:'+46%',
    },
   
  ]
const HistoryFeedSection = () => {
  return (
  <>
  <Flex alignItems={"center"} gap="20px" flexWrap={{base:'wrap',md:'nowrap'}}>
    <Box position={"relative"} pr="23px" borderRight={"1px solid #504977"} mr="35px">
    <Text
            
            color="#FFFFFF"
            fontSize="20px"
            fontWeight="700"
            lineHeight={"150%"}
          >
      History
          </Text>
          <Box bottom={"-6px"} left="22px" position={"absolute"} w="31px" h="3px" bg="linear-gradient(180deg, #3461FF 0%, #8454EB 100%)" borderRadius={"4px"}>

          </Box>
    </Box>
    <Flex gap="16px" mr="72px" flexWrap={{base:'wrap',md:'nowrap'}}>
    <MenuDropdown ButtonName="All networks" Color="#444444"/>
              <MenuDropdown ButtonName="Holdings" Color="#444444"/>
              <MenuDropdown ButtonName="Accounts" Color="#444444"/>
              <MenuDropdown ButtonName="DEX" Color="white"/>
    </Flex>
    <Box w="100%" maxW={"556px"} h="1px" bg="#444444">

    </Box>
  </Flex>
  <Box mt="42px">


  <FeedSection FeedData={HistoryUsers}/>
  </Box>
  </>
  )
}

export default HistoryFeedSection