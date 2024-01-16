import React from 'react'
import { useEffect, useState } from 'react'
import {
    Flex, Box} from '@chakra-ui/react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {
  const getProductos = async ()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    console.log(data)

    return data
  }
  const [product, setProduct] = useState([])
  console.log(product)

  useEffect(()=>{
    getProductos().then((product)=> setProduct(product))
  }, [])

  return (
    <Flex flexDir={'column'} justify={'center'} alignItems={'center'}>
        <Box p="4">

        </Box>
        <Box>
          <ItemCount/>
          
          <ItemList product={product}/>
        </Box>
        
        
    </Flex>
    
  )
}
