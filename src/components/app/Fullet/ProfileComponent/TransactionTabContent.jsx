import { Box, Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'
import MenuDropdown from '../FeedScreen/MenuDropdown'
import TransactionTable from './TransactionTable'

const TransactionTabContent = () => {
  return (
   <Box>
    <Flex gap="20px" mt="20px">
<MenuDropdown ButtonName="All networks" Color="white"/>
<MenuDropdown ButtonName="Highest first" Color="white"/>
        </Flex>
<TransactionTable/>
   </Box>
  )
}

export default TransactionTabContent