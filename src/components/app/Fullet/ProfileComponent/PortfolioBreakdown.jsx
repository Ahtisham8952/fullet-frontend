import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const PortfolioBreakdown = () => {
  return (
    <Box bg="rgba(83, 30, 135, 0.34)" p="15px 22px" borderRadius={"30px"} >
        <Text
            
            color="#7449BD"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"24px"}
            mb="10px"
          >
       Portfolio breakdown
          </Text>
          <Flex alignItems={"center"} gap="10px" mb="20px" flexDirection={{base:'column',md:'row'}}>
          <Text
            
            color="white"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"24px"}
            mb="10px"
          >
       Assets
          </Text>
          <Box>
          <Flex>
            <Box h="9px" w="78px" borderRadius={"14px"} bg="linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(180deg, #00F227 0%, #54EBD0 100%)">

            </Box>
            <Box h="9px" w="10px" borderRightRadius={"14px"} bg=" linear-gradient(0deg, rgba(0, 0, 0, 0.51), rgba(0, 0, 0, 0.51)), linear-gradient(180deg, #0038FF 0%, #00B2FF 100%)">

</Box>
<Box h="9px" w="78px" borderRightRadius={"14px"} bg="linear-gradient(180deg, #3461FF 0%, #8454EB 100%)">

            </Box>
            <Box h="9px" w="100%" borderRightRadius={"14px"} bg=" linear-gradient(180deg, #FF8934 0%, #EBCA54 100%)">

            </Box>
          </Flex>
          <Flex mt="16px" gap={{base:'0px',md:'10px'}} alignItems={"center"}>
            <Flex alignItems={"center"} gap="5px">
                <Box bg="#12D947" h="12px" w="12px" borderRadius={"50%"}>

                </Box>
                <Text
            
            color="white"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"24px"}
          
          >
      ETH - 25%
          </Text>

            </Flex>
            <Flex alignItems={"center"} gap="5px">
                <Box bg="#004B7D" h="12px" w="12px" borderRadius={"50%"}>

                </Box>
                <Text
            
            color="white"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"24px"}
          
          >
      ETH - 25%
          </Text>

            </Flex>
            <Flex alignItems={"center"} gap="5px">
                <Box bg="#405FFC" h="12px" w="12px" borderRadius={"50%"}>

                </Box>
                <Text
            
            color="white"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"24px"}
          
          >
      ETH - 25%
          </Text>

            </Flex>
            <Flex alignItems={"center"} gap="5px">
                <Box bg="#F7A241" h="12px" w="12px" borderRadius={"50%"}>

                </Box>
                <Text
            
            color="white"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"24px"}
          
          >
      ETH - 25%
          </Text>

            </Flex>
          </Flex>
          </Box>
            
          </Flex>
          <Flex alignItems={"flex-start"} gap="10px"  flexDirection={{base:'column',md:'row'}}>
          <Text
            
            color="white"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"24px"}
            mb="10px"
          >
      Protocols
          </Text>
          <Box>
          <Flex>
            <Box h="9px" w="78px" borderRadius={"14px"} bg="linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(180deg, #00F227 0%, #54EBD0 100%)">

            </Box>
            <Box h="9px" w="10px" borderRightRadius={"14px"} bg=" linear-gradient(0deg, rgba(0, 0, 0, 0.51), rgba(0, 0, 0, 0.51)), linear-gradient(180deg, #0038FF 0%, #00B2FF 100%)">

</Box>
<Box h="9px" w="78px" borderRightRadius={"14px"} bg="linear-gradient(180deg, #3461FF 0%, #8454EB 100%)">

            </Box>
            <Box h="9px" w="100%" borderRightRadius={"14px"} bg=" linear-gradient(180deg, #FF8934 0%, #EBCA54 100%)">

            </Box>
          </Flex>
          <Flex mt="16px" gap={{base:'0px',md:'10px'}} alignItems={"center"}>
            <Flex alignItems={"center"} gap="5px">
                <Box bg="#12D947" h="12px" w="12px" borderRadius={"50%"}>

                </Box>
                <Text
            
            color="white"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"24px"}
          
          >
      ETH - 25%
          </Text>

            </Flex>
            <Flex alignItems={"center"} gap="5px">
                <Box bg="#004B7D" h="12px" w="12px" borderRadius={"50%"}>

                </Box>
                <Text
            
            color="white"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"24px"}
          
          >
      ETH - 25%
          </Text>

            </Flex>
            <Flex alignItems={"center"} gap="5px">
                <Box bg="#405FFC" h="12px" w="12px" borderRadius={"50%"}>

                </Box>
                <Text
            
            color="white"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"24px"}
          
          >
      ETH - 25%
          </Text>

            </Flex>
            <Flex alignItems={"center"} gap="5px">
                <Box bg="#F7A241" h="12px" w="12px" borderRadius={"50%"}>

                </Box>
                <Text
            
            color="white"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"24px"}
          
          >
      ETH - 25%
          </Text>

            </Flex>
          </Flex>
          </Box>
            
          </Flex>


    </Box>
  )
}

export default PortfolioBreakdown