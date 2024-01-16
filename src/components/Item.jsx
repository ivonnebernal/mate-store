import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Text, Stack, Divider, Button, ButtonGroup} from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
export const Item = ({producto}) => {
    console.log(producto)
  return (
    <div>
        
        
    

<Card maxW='sm'>
    <CardBody>
        <Image
            src={producto.image}
            
            borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
            <Heading size='md'>{producto.title}</Heading>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='green'>
                <Link to={`/item/${producto.id}`}>
                    Detalle
                </Link>
                
            </Button>
            
        </ButtonGroup>
    </CardFooter>
</Card>
</div>
)
}
