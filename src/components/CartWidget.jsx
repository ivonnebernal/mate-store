import React from 'react'
import {
    Flex, Box} from '@chakra-ui/react'
export const CartWidget = () => {
  return (
    <div>
        <Flex>
            <Box>
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            </Box>
            <Box><p>6</p></Box>
            
        </Flex>
        
    </div>
  )
}
