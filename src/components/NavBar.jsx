import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer
} from '@chakra-ui/react'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    
    return (
    <div >
        <Flex justify={'space-between'} bg= 'green.100'>
            <Menu >
                <Box p='4' >
                    <Link to={"/"}>
                        <h3>Mates C&R</h3>
                    </Link>
                    
                </Box>
                <Box p='4' >
                    
                    <MenuButton px={4} py={2} transition='all 0.2s' borderRadius='md' borderWidth='1px' _hover={{ bg: 'green.400' }} _expanded={{ bg: 'green.400' }} _focus={{ boxShadow: 'outline' }} >
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <Link ><MenuItem>men's clothing</MenuItem></Link>
                        
                        <MenuItem>jewelery</MenuItem>
                        <MenuItem>electronics</MenuItem>
                    </MenuList>
                </Box>
                <Box p='4'>
                    <CartWidget/>
                </Box>
            </Menu>
            
            
        </Flex>
        
  </div>
  )
}
