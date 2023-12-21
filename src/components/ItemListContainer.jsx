import React from 'react'
import {
    Flex, Box} from '@chakra-ui/react'
export const ItemListContainer = ({greeting}) => {
  return (
    <Flex justify={'center'}>
        <Box p="4">
            <h1>{greeting}</h1>
        </Box>
        
    </Flex>
    
  )
}