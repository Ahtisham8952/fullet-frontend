import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box,Flex,Text,Image } from '@chakra-ui/react'
import OverViewTabContent from '../ProfileComponent/OverViewTabContent'
import OverView from './OverView'
const viewmap=[
    {
      Display:'/stungrade.svg',
      Network:'/currency-1.svg',
      Name:' Avalanche',
    
      Assets:' $ 220 000 500',
      Percentage:'+46%',
    },
    {
        Display:'/stungrade.svg',
        Network:'/currency-1.svg',
        Name:' Avalanche',
      
        Assets:' $ 220 000 500',
        Percentage:'+46%',
      },
      {
        Display:'/stungrade.svg',
        Network:'/currency-1.svg',
        Name:' Avalanche',
      
        Assets:' $ 220 000 500',
        Percentage:'+46%',
      },
   
  ]
const DefenceTabs = () => {
  return (
    <Tabs>
        <Flex justifyContent={"space-between"} w="100%" flexWrap={"wrap-reverse"}>

       
        <Box>
        <Box>
            
    
         
            </Box> 
            <TabList borderBottom={"none"} mt="50px" gap='20px' flexWrap={"wrap"}>
      <Tab   fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>All</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>DAOs</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid  #504977"}>Contracts</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>Tokens</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid  #504977"}>NFTs</Tab>


      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} >DeFi</Tab>
    </TabList>
        </Box>
        
        </Flex>
   
  
    <TabPanels p="0px">
      <TabPanel p="0px" mt="30px">
     <OverView ViewData={viewmap}/>
      </TabPanel>

      <TabPanel p="0px">
     
      </TabPanel>

      <TabPanel p="0px">
    
      </TabPanel>

      <TabPanel p="0px">
     
      </TabPanel>

      <TabPanel p="0px">
      
      </TabPanel>

      <TabPanel p="0px">
      
      </TabPanel>

    </TabPanels>
  </Tabs>
  )
}

export default DefenceTabs