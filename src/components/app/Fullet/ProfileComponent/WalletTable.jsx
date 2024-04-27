import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
const WalletTable = () => {
  return (
   <Box border="1px solid rgba(255, 255, 255, 0.3)" borderRadius={"20px"} p={{base:'10px',lg:'40px'}} mt="40px">
    <TableContainer>
  <Table variant='simple'>
   
    <Thead borderBottom={"none"}>
      <Tr borderBottom={"none"}>
        <Th borderBottom={"none"} color="#FFFFFF">Name</Th>
        <Th borderBottom={"none"} color="#FFFFFF">Vol In (ETH)</Th>
        <Th borderBottom={"none"} color="#FFFFFF" >Vol Out (ETH)</Th>
        <Th borderBottom={"none"} color="#FFFFFF">Txs</Th>
        <Th borderBottom={"none"} color="#FFFFFF">Txs In (ETH)</Th>
        <Th borderBottom={"none"} color="#FFFFFF" >Txs Out (ETH)</Th>
      </Tr>
    </Thead>
    <Tbody >
        
      <Tr bg="rgba(83, 30, 135, 0.34)" p="8px" borderBottom={"20px solid #04031A"} >
        <Td  borderLeftRadius={"60px"} borderBottom={"none"}>
            <Flex gap="20px" alignItems={"center"}>
                <Box position={"relative"} >
                    <Image minH={'57px'} minW="57px" src="/tradmarkim.svg"></Image>
                 

                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      WETH - 
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       Wrapped Ether
          </Text>
                    </Flex>
                
                </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"} borderRightRadius={"60px"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
      </Tr>
      <Tr bg="rgba(83, 30, 135, 0.34)" p="8px" borderBottom={"20px solid #04031A"} >
        <Td  borderLeftRadius={"60px"} borderBottom={"none"}>
            <Flex gap="20px" alignItems={"center"}>
                <Box position={"relative"} >
                    <Image minH={'57px'} minW="57px" src="/tradmarkim.svg"></Image>
                 

                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      WETH - 
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       Wrapped Ether
          </Text>
                    </Flex>
                
                </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"} borderRightRadius={"60px"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
      </Tr>
      <Tr bg="rgba(83, 30, 135, 0.34)" p="8px" borderBottom={"20px solid #04031A"} >
        <Td  borderLeftRadius={"60px"} borderBottom={"none"}>
            <Flex gap="20px" alignItems={"center"}>
                <Box position={"relative"} >
                    <Image minH={'57px'} minW="57px" src="/tradmarkim.svg"></Image>
                 

                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      WETH - 
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       Wrapped Ether
          </Text>
                    </Flex>
                
                </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"} borderRightRadius={"60px"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
      </Tr>
      <Tr bg="rgba(83, 30, 135, 0.34)" p="8px" borderBottom={"20px solid #04031A"} >
        <Td  borderLeftRadius={"60px"} borderBottom={"none"}>
            <Flex gap="20px" alignItems={"center"}>
                <Box position={"relative"} >
                    <Image minH={'57px'} minW="57px" src="/tradmarkim.svg"></Image>
                 

                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      WETH - 
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       Wrapped Ether
          </Text>
                    </Flex>
                
                </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"} borderRightRadius={"60px"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
      </Tr>
      <Tr bg="rgba(83, 30, 135, 0.34)" p="8px" borderBottom={"20px solid #04031A"} >
        <Td  borderLeftRadius={"60px"} borderBottom={"none"}>
            <Flex gap="20px" alignItems={"center"}>
                <Box position={"relative"} >
                    <Image minH={'57px'} minW="57px" src="/tradmarkim.svg"></Image>
                 

                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      WETH - 
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       Wrapped Ether
          </Text>
                    </Flex>
                
                </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"} borderRightRadius={"60px"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
      </Tr>
      <Tr bg="rgba(83, 30, 135, 0.34)" p="8px" borderBottom={"20px solid #04031A"} >
        <Td  borderLeftRadius={"60px"} borderBottom={"none"}>
            <Flex gap="20px" alignItems={"center"}>
                <Box position={"relative"} >
                    <Image minH={'57px'} minW="57px" src="/tradmarkim.svg"></Image>
                 

                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      WETH - 
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       Wrapped Ether
          </Text>
                    </Flex>
                
                </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"} borderRightRadius={"60px"}>
            <Flex alignItems={"center"} gap="11px"> 
                
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      60.62%
          </Text>
          <Box h="8px" w={"111px"} bg="rgba(255, 255, 255, 0.15)" borderRadius={"20px"} position="relative">
            <Box position={"absolute"} top="0px" bg="#C9BFFF" h="8px" w={"62px"} borderRadius={"20px"}>

            </Box>

          </Box>
            </Flex>
        </Td>
      </Tr>
     
    
      
     
    </Tbody>
    
  </Table>
</TableContainer>

   </Box>
  )
}

export default WalletTable