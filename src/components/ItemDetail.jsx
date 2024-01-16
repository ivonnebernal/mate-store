import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Text, Stack, Divider, Button, ButtonGroup} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
export const ItemDetail = ({product}) => {
const {id} = useParams()
const filteredProducts = product.filter((producto)=> producto.id == id)
  return (
    filteredProducts.map((p )=>{
        return(
            <div key={p.id}>
<Card maxW='sm'>
    <CardBody>
        <Image
            src={p.image}
            
            borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
            <Heading size='md'>{p.title}</Heading>
            <Text>
                {p.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                ${p.price}
            </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='green'>
                Comprar
            </Button>
            
        </ButtonGroup>
    </CardFooter>
</Card>
    
    </div>
        )
        
    })
    
  )
}