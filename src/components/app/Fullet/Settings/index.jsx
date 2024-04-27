import { Box, Text,Flex,Image,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import FeedNetworks from '../FeedScreen/FeedNetworks'
import LanguageDropdown from './LanguageDropdown'
import Settingsdata from './Settingsdata'
import Switcher from './Switcher'

const dataSettings=[
    {
        Image:'/settingicon-1.svg',
        Name:'Export Fullit data',
    },
    {
        Image:'/settingicon-2.svg',
        Name:'Import Fullit data',
    },
    {
        Image:'/earthicon.svg',
        Name:'Clear Fullit data',
    },
    {
        Image:'/fishicons.svg',
        Name:'Delete Account',
    },
]
const companySettings=[
    {
        Image:'/settingicon-1.svg',
        Name:'Docs',
    },
    {
        Image:'/settingicon-2.svg',
        Name:'Careers',
    },
    {
        Image:'/earthicon.svg',
        Name:'Terms & Services',
    },
    {
        Image:'/fishicons.svg',
        Name:'Discord',
    },
]
const privacySettings=[
    {
        Image:'/settingicon-1.svg',
        Name:'Privacy Policy',
    },
    {
        Image:'/settingicon-2.svg',
        Name:'Cookie Notice',
    },
  
]


const SettingsMain = () => {
    
  return (
    <Box px={{base:'24px',lg:'100px'}} mt="40px">
       <Flex alignItems={"center"} gap="30px" flexWrap={{base:'wrap',lg:'nowrap'}}>
       <Text
            
            color="#FFFFFF"
            fontSize="48px"
            fontWeight="600"
            lineHeight={"150%"}
          >
   Settings
          </Text>
          <Box>
          <FeedNetworks/>
          </Box>

       </Flex>
       <Box p={{base:'20px',lg:'40px'}} my="60px" bg="rgba(0, 0, 0, 0.5)" border={" 1px solid #444444"} borderRadius="40px" backdropFilter={"blur(30px)"} > 
       <Box mb="40px">
       <Text
            
            color="#FFFFFF"
            fontSize="32px"
            fontWeight="600"
            lineHeight={"42px"}
          >
      General
          </Text>
          </Box>
          <Box mb="40px">

        
          <Flex justifyContent={"space-between"} pb="14px" borderBottom={"1px solid rgba(255, 255, 255, 0.15)"}>
            <Flex alignItems={"center"} gap={{base:'14px',md:'16px',lg:'24px'}}>
                <Image src="/settingicon-1.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize={{base:'14px',md:'16px',lg:'24px'}}
            fontWeight="400"
            lineHeight={"34px"}
          >
       Base Currency
          </Text>
            </Flex>
            <Flex border="1px solid #444444" borderRadius={"40px"} gap="10px" alignItems={"center"} p="5px">
            <Image src="/flagamerica.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="700"
            lineHeight={"21px"}
          >
      USD
          </Text>
            </Flex>

          </Flex>
          <Flex justifyContent={"space-between"} py="14px" borderBottom={"1px solid rgba(255, 255, 255, 0.15)"}>
            <Flex alignItems={"center"} gap={{base:'14px',md:'16px',lg:'24px'}}>
                <Image src="/settingicon-2.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize={{base:'14px',md:'16px',lg:'24px'}}
            fontWeight="400"
            lineHeight={"34px"}
          >
     Language
          </Text>
            </Flex>
          <Box>
            <LanguageDropdown ButtonName="EN" Color="white"/>
          </Box>

          </Flex>
          <Flex justifyContent={"space-between"} py="14px" borderBottom={"1px solid rgba(255, 255, 255, 0.15)"}>
            <Flex alignItems={"center"} gap={{base:'14px',md:'16px',lg:'24px'}}>
                <Image src="/earthicon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize={{base:'14px',md:'16px',lg:'24px'}}
            fontWeight="400"
            lineHeight={"34px"}
          >
    Set connected account as default home page
          </Text>
            </Flex>
         

          </Flex>
          <Flex justifyContent={"space-between"} py="14px" borderBottom={"1px solid rgba(255, 255, 255, 0.15)"}>
            <Flex alignItems={"center"} gap={{base:'14px',md:'16px',lg:'24px'}}>
                <Image src="/fishicons.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize={{base:'14px',md:'16px',lg:'24px'}}
            fontWeight="400"
            lineHeight={"34px"}
          >
   Theme
          </Text>
            </Flex>
         <Box>
          <Switcher/>
         </Box>

          </Flex>
          <Flex justifyContent={"space-between"} py="14px" borderBottom={"1px solid rgba(255, 255, 255, 0.15)"}>
            <Flex alignItems={"center"} gap={{base:'14px',md:'16px',lg:'24px'}}>
                <Image src="/nfticonsg.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize={{base:'14px',md:'16px',lg:'24px'}}
            fontWeight="400"
            lineHeight={"34px"}
          >
  Disable Behaviour Tracking
          </Text>
            </Flex>
         <Box>
          <Switcher/>
         </Box>

          </Flex>
          <Flex justifyContent={"space-between"} py="14px" borderBottom={"1px solid rgba(255, 255, 255, 0.15)"}>
            <Flex alignItems={"center"} gap={{base:'14px',md:'16px',lg:'24px'}}>
                <Image src="/curenty.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize={{base:'14px',md:'16px',lg:'24px'}}
            fontWeight="400"
            lineHeight={"34px"}
          >
  Enable / Disable Networks
          </Text>
            </Flex>
         <Box>
          <Switcher/>
         </Box>

          </Flex>
          <Flex justifyContent={"space-between"} py="14px" borderBottom={"1px solid rgba(255, 255, 255, 0.15)"}>
            <Flex alignItems={"center"} gap={{base:'14px',md:'16px',lg:'24px'}}>
                <Image src="/tools.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize={{base:'14px',md:'16px',lg:'24px'}}
            fontWeight="400"
            lineHeight={"34px"}
          >
 Include NFTs in totals
          </Text>
            </Flex>
         

          </Flex>
          <Flex justifyContent={"space-between"} py="14px" borderBottom={"1px solid rgba(255, 255, 255, 0.15)"}>
            <Flex alignItems={"center"} gap={{base:'14px',md:'16px',lg:'24px'}}>
                <Image src="/notifies.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize={{base:'14px',md:'16px',lg:'24px'}}
            fontWeight="400"
            lineHeight={"34px"}
          >
Notifications
          </Text>
            </Flex>
         
            <Box>
            <LanguageDropdown ButtonName="Edit" Color="white"/>
          </Box>
          
         

          </Flex>
          <Flex justifyContent={"space-between"} py="14px" borderBottom={"1px solid rgba(255, 255, 255, 0.15)"}>
            <Flex alignItems={"center"} gap={{base:'14px',md:'16px',lg:'24px'}}>
                <Image src="/contactors.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize={{base:'14px',md:'16px',lg:'24px'}}
            fontWeight="400"
            lineHeight={"34px"}
          >
Contact us
          </Text>
            </Flex>
         
          
         

          </Flex>
          </Box>
          <Box>
          <Settingsdata DataType="Data" SettingsTypes={dataSettings}/>
          </Box>
          <Box>
          <Settingsdata DataType="Company" SettingsTypes={companySettings}/>
          </Box>
          <Box>
          <Settingsdata DataType="privacy" SettingsTypes={privacySettings}/>
          </Box>
          
       </Box>
             

               
        </Box>
  )
}

export default SettingsMain