import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import CardsBackground from '../FeedScreen/CardsBackground'


const DeFiCardsInfo = ({DefiData}) => {
  return (
  <CardsBackground BgImage="/backDropImage.png">

  <Flex justifyContent={"space-between"} pb="20px" borderBottom='1px solid #444444' mb="20px">
  <Text
            
            color="#FFFFFF"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"30px"}
          >
      DeFi
          </Text>
          <Text
            
            color="#FFFFFF"
            fontSize="30px"
            fontWeight="700"
            lineHeight={"40px"}
          >
     $ 560 900 500
          </Text>

  </Flex>
    {DefiData.map((val) => (
   <Box pb="22px" _first={{mb:"22px",py:'23px',borderTop:' 1px solid #444444',borderBottom:'1px solid #444444'}}>
   
    <Box bg="rgba(83, 30, 135, 0.34)" p="8px 27px 8px 8px" borderRadius={{base:'48px',md:'100px'}} >
        <Flex justifyContent={"space-between"} alignItems="center" flexDirection={{base:'column',md:'row'}}>
            <Flex alignItems={"center"} flexDirection={{base:'column',md:'row'}}>
                <Box  display="flex" alignItems={"center"}>
                <Image position={"relative"} zIndex="99"  src="/ethtoken-1.svg"></Image>
                <Image ml="-20px" src="/ethtoken-2.svg"></Image>
                

                </Box>
                <Box ml="21px">
                    <Flex gap="5px">
                    <Text
            
            color="#FFFFFF"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"150%"}
          >
      {val.Name}
          </Text>
          <Text
            
            color="#FFFFFF"
            fontSize="24px"
            fontWeight="300"
            lineHeight={"150%"}
          >
    {val.Username}
          </Text>
                    </Flex>
                    <Flex alignItems={"center"} gap="8px">
                     
                      <Text
            
            color="#907BFF"
            fontSize="20px"
            fontWeight="400"
            lineHeight={"150%"}
          >
     {val.Assets}
          </Text>
          
                    </Flex>
                </Box>
               
            </Flex>
            <Box>

           
            <Text
            
            color="#907BFF"
            fontSize="20px"
            fontWeight="400"
            lineHeight={"30px"}
          >
     Capital Market Value: $115k <Link color="#7BFF80" >  +6%</Link>  
          </Text>
          <Text
            
            color="#907BFF"
            fontSize="20px"
            fontWeight="400"
            lineHeight={"30px"}
          >
    Asset Gains: $112k   <Link color="#7BFF80" >   +46%</Link>  
          </Text>
          </Box>
            <Flex alignItems={"center"} gap="20px" flexDirection={{base:'column',md:'row'}}>
            <Text
            
            color="#907BFF"
            fontSize={{base:'14px',md:'16px',lg:'20px'}}
            fontWeight="400"
            lineHeight={"150%"}
          >
    Position Income: $6900
          </Text>
          <Image cursor={"pointer"} src="/rightarrowstip.svg"></Image>
            </Flex>
        </Flex>

    </Box>
    </Box>
     ))}

</CardsBackground>
  )
}

export default DeFiCardsInfo