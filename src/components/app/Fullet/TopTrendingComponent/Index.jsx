import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import TrendingSlider from './TrendingSlider'
import TrendingTabs from './TrendingTabs'

const TrendingMain = () => {
  return (
    <Box>
        <Box px={{base:'24px',lg:'100px'}} mt="40px">
            <Flex gap={"35px"} flexDirection={{base:'column',lg:'row'}} mb="30px">
                <Box w={{base:'100%',lg:'50%'}} mb="30px">
                <TrendingSlider/>
                </Box>
                <Box w={{base:'100%',lg:'50%'}}>
                <TrendingSlider/>
                </Box>
            </Flex>
            <Text
            mb="40px"
            color="#FFFFFF"
            fontSize="48px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Top Trending
          </Text>
          <TrendingTabs/>
            
        </Box>

    </Box>
  )
}

export default TrendingMain