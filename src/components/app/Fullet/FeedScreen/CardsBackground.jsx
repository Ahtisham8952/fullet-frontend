import { Box } from '@chakra-ui/react'
import React from 'react'

const CardsBackground = ({children,BgImage}) => {
  return (
   <>
   <Box 
    // bgImage="url('/backDropImage.png')"
    bgImage={BgImage}
  bgSize="cover"
  bgRepeat="no-repeat"
  

  px={{base:'15px',lg:'40px'}}
  pt="133px"
  pb="20px"
  >
    {children}
  </Box>
   </>
  )
}

export default CardsBackground