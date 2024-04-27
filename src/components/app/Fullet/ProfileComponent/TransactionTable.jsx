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
const TransactionTable = () => {
  return (
   <Box border="1px solid rgba(255, 255, 255, 0.3)" borderRadius={"20px"} p={{base:'10px',lg:'40px'}} mt="40px">
    <TableContainer>
  <Table variant='simple'>
   
    <Thead borderBottom={"none"}>
      <Tr borderBottom={"none"}>
        <Th borderBottom={"none"} color="#FFFFFF">Network & Protocol</Th>
        <Th borderBottom={"none"} color="#FFFFFF">From</Th>
        <Th borderBottom={"none"} color="#FFFFFF" >To</Th>
        <Th borderBottom={"none"} color="#FFFFFF">Asset In</Th>
        <Th borderBottom={"none"} color="#FFFFFF">Asset Out</Th>
        <Th borderBottom={"none"} color="#FFFFFF" >Fees</Th>
      </Tr>
    </Thead>
    <Tbody >
        
      <Tr bg="rgba(83, 30, 135, 0.34)" p="8px" borderBottom={"20px solid #04031A"} >
        <Td  borderLeftRadius={"60px"} borderBottom={"none"}>
            <Flex gap="20px">
                <Box position={"relative"} >
                    <Image minH={'57px'} minW="57px" src="/tradmarkim.svg"></Image>
                   <Box position={"absolute"} bottom="2px" right={"5px"}>
                   <Image src="/horsenet.svg"></Image>
                   </Box>

                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Swap -
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       ETH x FULLET
          </Text>
                    </Flex>
                    <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
      9:30 AM
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
     Txs - 2308202
          </Text>
                </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      0xD273...
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      0xD273...
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
     100’000 ETH
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitesla.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
   900’000 TSL
          </Text>
            </Flex>
        </Td>
        <Td   borderRightRadius={"60px"} borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
    1 ETH
          </Text>
            </Flex>
        </Td>
      </Tr>
      <Tr bg="rgba(83, 30, 135, 0.34)" p="8px" borderBottom={"20px solid #04031A"} >
        <Td  borderLeftRadius={"60px"} borderBottom={"none"}>
            <Flex gap="20px">
                <Box position={"relative"} >
                    <Image minH={'57px'} minW="57px" src="/tradmarkim.svg"></Image>
                   <Box position={"absolute"} bottom="2px" right={"5px"}>
                   <Image src="/horsenet.svg"></Image>
                   </Box>

                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Swap -
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       ETH x FULLET
          </Text>
                    </Flex>
                    <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
      9:30 AM
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
     Txs - 2308202
          </Text>
                </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      0xD273...
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      0xD273...
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
     100’000 ETH
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitesla.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
   900’000 TSL
          </Text>
            </Flex>
        </Td>
        <Td   borderRightRadius={"60px"} borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
    1 ETH
          </Text>
            </Flex>
        </Td>
      </Tr>
      <Tr bg="rgba(83, 30, 135, 0.34)" p="8px" borderBottom={"20px solid #04031A"} >
        <Td  borderLeftRadius={"60px"} borderBottom={"none"}>
            <Flex gap="20px">
                <Box position={"relative"} >
                    <Image minH={'57px'} minW="57px" src="/tradmarkim.svg"></Image>
                   <Box position={"absolute"} bottom="2px" right={"5px"}>
                   <Image src="/horsenet.svg"></Image>
                   </Box>

                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Swap -
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       ETH x FULLET
          </Text>
                    </Flex>
                    <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
      9:30 AM
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
     Txs - 2308202
          </Text>
                </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      0xD273...
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      0xD273...
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
     100’000 ETH
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitesla.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
   900’000 TSL
          </Text>
            </Flex>
        </Td>
        <Td   borderRightRadius={"60px"} borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
    1 ETH
          </Text>
            </Flex>
        </Td>
      </Tr>
      <Tr bg="rgba(83, 30, 135, 0.34)" p="8px" borderBottom={"20px solid #04031A"} >
        <Td  borderLeftRadius={"60px"} borderBottom={"none"}>
            <Flex gap="20px">
                <Box position={"relative"} >
                    <Image minH={'57px'} minW="57px" src="/tradmarkim.svg"></Image>
                   <Box position={"absolute"} bottom="2px" right={"5px"}>
                   <Image src="/horsenet.svg"></Image>
                   </Box>

                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Swap -
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       ETH x FULLET
          </Text>
                    </Flex>
                    <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
      9:30 AM
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
     Txs - 2308202
          </Text>
                </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      0xD273...
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      0xD273...
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
     100’000 ETH
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitesla.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
   900’000 TSL
          </Text>
            </Flex>
        </Td>
        <Td   borderRightRadius={"60px"} borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
    1 ETH
          </Text>
            </Flex>
        </Td>
      </Tr>
      <Tr bg="rgba(83, 30, 135, 0.34)" p="8px" borderBottom={"20px solid #04031A"} >
        <Td  borderLeftRadius={"60px"} borderBottom={"none"}>
            <Flex gap="20px">
                <Box position={"relative"} >
                    <Image minH={'57px'} minW="57px" src="/tradmarkim.svg"></Image>
                   <Box position={"absolute"} bottom="2px" right={"5px"}>
                   <Image src="/horsenet.svg"></Image>
                   </Box>

                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Swap -
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       ETH x FULLET
          </Text>
                    </Flex>
                    <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
      9:30 AM
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
     Txs - 2308202
          </Text>
                </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      0xD273...
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      0xD273...
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
     100’000 ETH
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitesla.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
   900’000 TSL
          </Text>
            </Flex>
        </Td>
        <Td   borderRightRadius={"60px"} borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
    1 ETH
          </Text>
            </Flex>
        </Td>
      </Tr>
      <Tr bg="rgba(83, 30, 135, 0.34)" p="8px" borderBottom={"20px solid #04031A"} >
        <Td  borderLeftRadius={"60px"} borderBottom={"none"}>
            <Flex gap="20px">
                <Box position={"relative"} >
                    <Image minH={'57px'} minW="57px" src="/tradmarkim.svg"></Image>
                   <Box position={"absolute"} bottom="2px" right={"5px"}>
                   <Image src="/horsenet.svg"></Image>
                   </Box>

                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Swap -
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       ETH x FULLET
          </Text>
                    </Flex>
                    <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
      9:30 AM
          </Text>
          <Text
            
            color="#C5BAFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
     Txs - 2308202
          </Text>
                </Box>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      0xD273...
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
      0xD273...
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
     100’000 ETH
          </Text>
            </Flex>
        </Td>
        <Td borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitesla.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
   900’000 TSL
          </Text>
            </Flex>
        </Td>
        <Td   borderRightRadius={"60px"} borderBottom={"none"}>
            <Flex alignItems={"center"} gap="11px"> 
                <Image src="/minitycon.svg"></Image>
                <Text
            
            color="#FFFFFF"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"14px"}
          >
    1 ETH
          </Text>
            </Flex>
        </Td>
      </Tr>
    
      
     
    </Tbody>
    
  </Table>
</TableContainer>

   </Box>
  )
}

export default TransactionTable