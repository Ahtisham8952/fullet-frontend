import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import CardsBackground from './CardsBackground'

const FeedSection = ({FeedData}) => {
  return (
  <CardsBackground BgImage="/backDropImage.png">

  
    {FeedData.map((val) => (
   <Box pb="22px" _first={{mb:"22px",py:'23px',borderTop:' 1px solid #444444',borderBottom:'1px solid #444444'}}>
   
    <Box bg="rgba(83, 30, 135, 0.34)" p="8px 27px 8px 8px" borderRadius={{base:'48px',md:'100px'}} >
        <Flex justifyContent={"space-between"} alignItems="center" flexDirection={{base:'column',md:'row'}}>
            <Flex alignItems={"center"} flexDirection={{base:'column',md:'row'}}>
                <Box position={"relative"}>
                <Image  src={val.Display}></Image>
                <Box position={"absolute"} bottom="0px" right={"2px"}>
                <Image  src={val.Network}></Image>
                </Box>

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
                      <Image src="/currencyicon.svg"></Image>
                      <Text
            
            color="#907BFF"
            fontSize="20px"
            fontWeight="400"
            lineHeight={"150%"}
          >
     {val.Assets}
          </Text>
          <Text
            
            color="#7BFF80"
            fontSize="18px"
            fontWeight="500"
            lineHeight={"150%"}
          >
     {val.Percentage}
          </Text>
                    </Flex>
                </Box>
               
            </Flex>
            <Flex alignItems={"center"} gap="20px" flexDirection={{base:'column',md:'row'}}>
            <Text
            
            color="rgba(198, 140, 255, 0.7)"
            fontSize={{base:'14px',md:'16px',lg:'20px'}}
            fontWeight="400"
            lineHeight={"150%"}
          >
      Activity | 928 Transactions/30d
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

export default FeedSection