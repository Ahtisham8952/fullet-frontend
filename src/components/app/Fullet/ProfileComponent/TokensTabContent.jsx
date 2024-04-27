import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import FollowingFeedSection from '../FeedScreen/FollowingFeedSection'
import MenuDropdown from '../FeedScreen/MenuDropdown'
import DeFiCardsInfo from './DeFiCardsInfo'
import ProfileCardsInfo from './ProfileCardsInfo'
const WalletCards=[
    {
      Display:'/teslacarsicon.svg',
      Network:'/currency-1.svg',
      Name:' BNB -',
      Username:' Binance',
      Assets:' $247.27',
      Percentage:'+46%',
    },
    {
      Display:'/wallettake-2.svg',
      Network:'/currency-1.svg',
      Name:'AURA -  ',
      Username:'Aura Finance',
      Assets:' $247.27',
      Percentage:'+46%',
    },
  
    {
      Display:'/wallettake-3.svg',
      Network:'/currency-2.svg',
      Name:' 1Inch - ',
      Username:' 1 Inch Network',
      Assets:' $247.27',
      Percentage:'+46%',
    },
    {
      Display:'/wallettake-4.svg',
      Network:'/currency-2.svg',
      Name:'ETH -  ',
      Username:'Ethereum Network',
      Assets:' $247.27',
      Percentage:'+46%',
    },
    {
      Display:'/wallettake-5.svg',
      Network:'/currency-2.svg',
      Name:'BAYC -  ',
      Username:'Bored Ape Yatch Club Collection',
      Assets:'$247.27',
      Percentage:'+46%',
    },
   
  ]
  const DefiCards=[
    {
      
    
      Name:'Pool - ',
      Username:' ETH/LIT on curve',
      Assets:'CP: $112k',
    
    },
    {
     
     
      Name:'Pool - ',
      Username:' ETH/LIT on curve',
      Assets:'CP: $112k',
    },
  
    {
     
    
      Name:'Pool - ',
      Username:' ETH/LIT on curve',
      Assets:'CP: $112k',
    },
    {
      
    
      Name:'Pool - ',
      Username:' ETH/LIT on curve',
      Assets:'CP: $112k',
    },
    {
     
    
      Name:'Pool - ',
      Username:' ETH/LIT on curve',
      Assets:'CP: $112k',
    },
   
  ]
  
const TokensTabContent = () => {
  return (
    <Box>
        <Flex gap="20px">
<MenuDropdown ButtonName="All networks" Color="white"/>
<MenuDropdown ButtonName="Highest first" Color="white"/>
        </Flex>
        <Box mt="20px" mb="26px">
             <ProfileCardsInfo CardName="Wallet" InfoData={WalletCards}/>
            </Box>
            <Flex gap="20px">
<MenuDropdown ButtonName="All networks" Color="white"/>
<MenuDropdown ButtonName="Highest first" Color="white"/>
        </Flex>
            <Box mt="20px" mb="26px">
             <DeFiCardsInfo DefiData={DefiCards}/>
            </Box>
            
           
    </Box>
  )
}

export default TokensTabContent