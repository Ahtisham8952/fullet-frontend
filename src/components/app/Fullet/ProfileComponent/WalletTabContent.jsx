import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MenuDropdown from '../FeedScreen/MenuDropdown'
import ETHChart from './ETHChart'
import WalletTable from './WalletTable'

const WalletTabContent = () => {
  return (
    <Box>
        <Flex gap="20px" mb="40px">
<MenuDropdown ButtonName="All networks" Color="white"/>
<MenuDropdown ButtonName="Highest first" Color="white"/>
        </Flex>
        <Box display={"flex"} gap="27px" w="100%"  flexDirection={{base:'column',lg:'row'}}>
            <ETHChart/>
            <ETHChart/>
        </Box>
        <Box mt="70px">
        <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
            mb="30px"
          >
      Top Interacting Wallets
          </Text>
        <WalletTable/>
        </Box>
       
    </Box>
  )
}

export default WalletTabContent