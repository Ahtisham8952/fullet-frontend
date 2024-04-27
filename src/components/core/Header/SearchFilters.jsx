import { Box,Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'

const SearchFilters = () => {
  return (
    <Box
    py="24px"
    px="44px"
    position={"absolute"}
    w="752px"
   right={"350px"}
    bg="transparent"
    h="696px"
    border="none"
    bgImage="/searchbardrop.png"
    backgroundSize={"cover"}
    backgroundRepeat="no-repeat"
  >
    <Flex alignItems={"center"} pt="23px">
        <Image src="/trendsearch.svg"></Image>
        <Text
            ml="7px"
            color="#FFFFFF"
            fontSize="10px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Trending
          </Text>
    </Flex>
    </Box>
  )
}

export default SearchFilters