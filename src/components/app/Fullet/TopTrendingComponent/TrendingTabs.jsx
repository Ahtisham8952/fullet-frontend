import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box,Flex,Text,Image } from '@chakra-ui/react'
import OverViewTabContent from '../ProfileComponent/OverViewTabContent'

const TrendingTabs = () => {
  return (
    <Tabs>
        <Flex justifyContent={"space-between"} w="100%" flexWrap={"wrap-reverse"}>

       
        <Box>
        <Box>
            
    
         
            </Box> 
            <TabList borderBottom={"none"} mt="50px" gap='20px' flexWrap={"wrap"}>
      <Tab   fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>All</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid #504977 "}>Top Accounts</Tab>
      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} px="15px" borderRight={"1px solid  #504977"}>Top Collection</Tab>


      <Tab  fontSize="20px"fontWeight="700"lineHeight={"24px"} py="11px" color="#D6CEFF" _selected={{color:'white',borderBottom:'1px solid #3461FF'}} >History</Tab>
    </TabList>
        </Box>
        
        </Flex>
   
  
    <TabPanels p="0px">
      <TabPanel p="0px" mt="30px">
      <OverViewTabContent/>
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

export default TrendingTabs