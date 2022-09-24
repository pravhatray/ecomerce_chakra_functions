import React from 'react'
import { Box, Button, Flex, Image, Img, Spacer, Text } from '@chakra-ui/react'
import Rating from './Rating'
import { useContext } from 'react'
import { Carts } from '../Context/Context'

const ProdList = ({ prod }) => {
    const { name, avatar, price, ratings, inStock, fastDelivery } = prod
    const {state:{cart},dispatch}=useContext(Carts)
   
    
    return (
        <>
            <Box marginTop='10px'>
                <Image borderRadius='10px' width="300px" src={avatar} />
                <Box> <Text color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'>{name}</Text></Box>
                <Box> <Text>₹ {price}</Text></Box>
                {
                    fastDelivery ?
                        <Box> <Text>Fast Delivery</Text></Box> :
                        <Box> <Text>4 Days Delivery</Text></Box>
                }
                <Flex alignItems='center'>
                    Ratings: <Rating rating={ratings} />
                </Flex>

                {
                    cart.some(p=>p.id===prod.id)?
                    (  <Button onClick={()=>{
                        dispatch({
                            type:"REMOVE_FROM_CART",
                            payload:prod
                        })
                    }} colorScheme='red'>Remove from Cart</Button>)
                    :( <Button onClick={()=>{
                        dispatch({
                            type:"ADD_TO_CART",
                            payload:prod
                        })
                    }}  colorScheme='messenger' disabled={!inStock}>
                        {!inStock ? "Out of Stock" : "Add to Cart"}
                        </Button>)
                }

              
               

            </Box>



        </>
    )
}

export default ProdList