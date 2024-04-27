import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import AllFeedSection from './FeedSection'
import FeedNetworks from './FeedNetworks'
import FeedSelectPoints from './FeedSelectPoints'
import MenuDropdown from './MenuDropdown'
import RangeSlide from './RangeSlide'
import FeedSection from './FeedSection'
import FollowingFeedSection from './FollowingFeedSection'
import SubscriptionFeedSection from './SubscriptionFeedSection'
import HistoryFeedSection from './HistoryFeedSection'
import ScrollUpBtn from '../../../core/ScrollUpBtn'
const AllUsers=[
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
  {
    Display:'/avatar-5.svg',
    Network:'/currency-2.svg',
    Name:' Bayc1 - ',
    Username:'@cryptobayc1',
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
]
const FeedScreenMain = () => {
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
     Feed
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
            <FeedNetworks/>
            <FeedSelectPoints/>
            <Flex gap="16px" alignItems={"center"} mb="21px" flexWrap={{base:'wrap',lg:'nowrap'}}>
              <MenuDropdown ButtonName="All networks" Color="#444444"/>
              <MenuDropdown ButtonName="Holdings" Color="#444444"/>
              <MenuDropdown ButtonName="Accounts" Color="#444444"/>
              <MenuDropdown ButtonName="DEX" Color="white"/>
              <RangeSlide RangeStart="1 Day" RangeEnd="30 Days" BarBg="linear-gradient(92.3deg, #54EB75 5.08%, #34FFE7 97.16%)"/>
              <RangeSlide RangeStart="10m" RangeEnd="11b" BarBg="linear-gradient(92.51deg, #3461FF 3.3%, #8454EB 93.12%)"/>
            </Flex>
            <Box mb="70px">
            <FeedSection FeedData={AllUsers}/>
            </Box>
            <Box mb="70px">
              <FollowingFeedSection/>
            </Box>
            <Box mb="70px">
              <SubscriptionFeedSection/>
            </Box>
            <Box mb="70px">
              <HistoryFeedSection/>
            </Box>
           
      <Flex justifyContent={"center"} alignItems="center" mb="100px">
        <ScrollUpBtn/>
      </Flex>



        </Box>

    </Box>
  )
}

export default FeedScreenMain