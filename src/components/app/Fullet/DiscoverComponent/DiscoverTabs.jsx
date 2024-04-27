import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box,Flex,Text,Image } from '@chakra-ui/react'

import DiscoverWraps from './DiscoverWraps'
import TransactionTable from '../ProfileComponent/TransactionTable'
const AllData=[
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
  const AllDaqs=[
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
  const AllDefi=[
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
  const AllToken=[
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
  const Allnft=[
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
const DiscoverTabs = () => {
  return (
    <Tabs>
        <Flex justifyContent={"space-between"} w="100%" flexWrap={"wrap-reverse"}>

       
        <Box>
        <Box>
            
         
         
            </Box> 
            <TabList borderBottom={"none"} mt="50px" gap='20px' flexWrap={"wrap"} mb="30px">
      <Tab   fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>Whales</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>DAOs</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid  #504977"}>DeFi</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>Tokens</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>NFTs</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} >Transaction History</Tab>
    </TabList>
        </Box>
       
        </Flex>
   
  
    <TabPanels p="0px">
      <TabPanel p="0px">
     <DiscoverWraps DiscoverData={AllData} wrapheading="All Accounts"/>
      </TabPanel>

      <TabPanel p="0px">
      <DiscoverWraps DiscoverData={AllDaqs} wrapheading="All DAOs"/>
      </TabPanel>

      <TabPanel p="0px">
      <DiscoverWraps DiscoverData={AllDefi} wrapheading="All Defi"/>
      </TabPanel>

      <TabPanel p="0px">
      <DiscoverWraps DiscoverData={AllToken} wrapheading="All Tokens"/>
      </TabPanel>

      <TabPanel p="0px">
      <DiscoverWraps DiscoverData={Allnft} wrapheading="All NFts"/>
      </TabPanel>

      <TabPanel p="0px">
      <Text
            
            color="#FFFFFF"
            fontSize="32px"
            fontWeight="700"
            lineHeight={"150%"}

mb="20px">
     ALL TRANSACTIONS
          </Text>
     <TransactionTable/>
      </TabPanel>

    </TabPanels>
  </Tabs>
  )
}

export default DiscoverTabs