import { Box, Flex,Image,Text,Grid } from '@chakra-ui/react'
import React from 'react'
import MenuDropdown from '../FeedScreen/MenuDropdown'
import ProfileCardsInfo from './ProfileCardsInfo'
const NFTdata=[
    {
        Name:'Capital provided',
        Value:'$100.14K',
    },
    {
        Name:'Asset gains',
        Value:'-$7,800.12',
    },
    {
        Name:'Capital market value',
        Value:'$100.14K',
    },
]
const NFTcards=[
    {
        Display:'/wallettake-5.svg',
      Network:'/currency-1.svg',
      Name:'BAYC -',
      Username:'  Bored Ape Yatch Club Collection',
      Assets:' $247.27',
      Percentage:'+46%',
    },
    {
        Display:'/wallettake-5.svg',
      Network:'/currency-1.svg',
      Name:'BAYC -',
      Username:'  Bored Ape Yatch Club Collection',
      Assets:' $247.27',
      Percentage:'+46%',
    },
  
    {
        Display:'/wallettake-5.svg',
      Network:'/currency-2.svg',
      Name:'BAYC -',
      Username:'  Bored Ape Yatch Club Collection',
      Assets:' $247.27',
      Percentage:'+46%',
    },
    {
        Display:'/wallettake-5.svg',
      Network:'/currency-2.svg',
      Name:'BAYC -',
      Username:'  Bored Ape Yatch Club Collection',
      Assets:' $247.27',
      Percentage:'+46%',
    },
    {
      Display:'/wallettake-5.svg',
      Network:'/currency-2.svg',
      Name:'BAYC -  ',
      Username:'Bored Ape Yatch Club Collection',
      Assets:'$247.27',
      Percentage:'+46%',
    },
   
  ]
const NftTabContent = () => {
  return (
   <Box>
      <Flex gap="20px" mt="20px">
<MenuDropdown ButtonName="All networks" Color="white"/>
<MenuDropdown ButtonName="Highest first" Color="white"/>
        </Flex>
        <Grid  templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)",lg:'repeat(3, 1fr)' }} gap="32px" w="100%" mt="50px">
        {NFTdata.map((vi) => (
            <Box h="133px" bg=" #150C35" border=" 1px solid rgba(255, 255, 255, 0.3)" borderRadius={"20px"} p="18px">
                <Flex alignItems={"center"} justifyContent="space-between" mb="14px">
                <Text
            
            color="#D6CEFF"
            fontSize="18px"
            fontWeight="500"
            lineHeight={"150%"}
          >
     {vi.Name}
          </Text>
          <Image src="/infoterent.svg"></Image>
                </Flex>
                <Text
            
            color="#FFFFFF"
            fontSize="40px"
            fontWeight="700"
            lineHeight={"48px"}
          >
    {vi.Value}
          </Text>

            </Box>
        ))}
        </Grid>
        <Box mt="20px" mb="26px">
             <ProfileCardsInfo CardName="NFT" InfoData={NFTcards}/>
            </Box>
   </Box>
  )
}

export default NftTabContent