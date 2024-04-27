import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
const Netwroks=[
    {
       bg:'rgba(255, 255, 255, 0.34)',
       Image:'/networkchain.svg',
       NetwrokName:' All Networks'
    },
    {
        bg:' rgba(83, 30, 135, 0.34)',
        Image:'/ethriumimg.svg',
        NetwrokName:' Etherium'
     },
     {
        bg:'rgba(83, 30, 135, 0.34)',
        Image:'/binanceimg.svg',
        NetwrokName:' Binance'
     },
     {
        bg:'rgba(83, 30, 135, 0.34)',
        Image:'/avlancheimg.svg',
        NetwrokName:' Avalanche'
     },
     {
        bg:'rgba(83, 30, 135, 0.34)',
        Image:'/polygenimg.svg',
        NetwrokName:' Polygon'
     },
     {
        bg:' rgba(83, 30, 135, 0.34)',
        Image:'/ethriumimg.svg',
        NetwrokName:' Etherium'
     },
]
const FeedNetworks = () => {
  return (
   <Box>
    <Flex alignItems={"center"} gap={{base:'16px',md:'20px',lg:'30px',xl:'36px'}} flexWrap={{base:'wrap',lg:'nowrap'}}>
    {Netwroks.map((data) => (
        <Box gap="13px" borderRadius={"50px"} bg={data.bg} p="6px 16px 6px 6px" display={"flex"} alignItems="center">
        <Image h="34px" w="34px" src={data.Image}></Image>
   <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="700"
            lineHeight={"30px"}
          >
   {data.NetwrokName}
          </Text>
        </Box>
    ))}
    </Flex>

   </Box>
  )
}

export default FeedNetworks