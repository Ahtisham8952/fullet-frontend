import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box,Flex,Text,Image } from '@chakra-ui/react'
import PortfolioBreakdown from './PortfolioBreakdown'
import OverViewTabContent from './OverViewTabContent'
import TokensTabContent from './TokensTabContent'
import TransactionTabContent from './TransactionTabContent'
import NftTabContent from './NftTabContent'
import DefiTabContent from './DefiTabContent'
import WalletTabContent from './WalletTabContent'
const ProfileTabs = () => {
  return (
    <Tabs>
        <Flex justifyContent={"space-between"} w="100%" flexWrap={"wrap-reverse"}>

       
        <Box>
        <Box>
            <Text
            
            color="rgba(255, 255, 255, 0.65)"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
            mb="13px"
          >
       Balance
          </Text>
          <Flex alignItems={"center"} gap="10px">
          <Flex  bg="rgba(83, 30, 135, 0.34)" p="7px 23px 5px 8px" alignItems={"center"} gap="19px" borderRadius={"100px"}>
            <Image h="41px" w="41px" src="/walletpics.svg"></Image>
            <Text
            
            color="#D6CEFF"
            fontSize="24px"
            fontWeight="500"
            lineHeight={"24px"}
           
          >
       $ 560 900 500
          </Text>

          </Flex>
          <Text
            
            color="#7BFF80"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"24px"}
          >
      6% YTD
          </Text>

          </Flex>
         
            </Box> 
            <TabList borderBottom={"none"} mt="50px" gap='20px' flexWrap={"wrap"}>
      <Tab   fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>Overview</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>Wallet</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid  #504977"}>Tokens</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>DeFi</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>NFTs</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} >Transactions</Tab>
    </TabList>
        </Box>
        <Box mb="20px">

       
      <PortfolioBreakdown/>
      </Box>
        </Flex>
   
  
    <TabPanels p="0px">
      <TabPanel p="0px">
      <OverViewTabContent/>
      </TabPanel>

      <TabPanel p="0px">
       <WalletTabContent/>
      </TabPanel>

      <TabPanel p="0px">
      <TokensTabContent/>
      </TabPanel>

      <TabPanel p="0px">
       <DefiTabContent/>
      </TabPanel>

      <TabPanel p="0px">
        <NftTabContent/>
      </TabPanel>

      <TabPanel p="0px">
       <TransactionTabContent/>
      </TabPanel>

    </TabPanels>
  </Tabs>
  )
}

export default ProfileTabs