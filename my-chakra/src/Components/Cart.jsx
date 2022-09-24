import { Box, Image, Text,
  Button,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex
        } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Carts } from '../Context/Context'
import Nav from '../Navbar/Nav'
import {  DeleteIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'



const Cart = () => {
  const { state: { cart }, dispatch } = useContext(Carts)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [total,setTotal]=useState()

  useEffect(()=>{
setTotal(cart.reduce((acc,cur)=>acc+Number(cur.price)*cur.qty,0))
  },[cart])

function refresh(){
  
}

  return (
    <>
      <div>
        <Nav />
      </div>
      <Box fontSize='30px' textAlign='center'  textDecoration='underline'>YOUR CART!!</Box>
      <Box display="flex" padding="10px" justifyContent='space'>

        <Box style={{ display:"flex", padding:"10px" ,boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: "10px", width: "70%", justifyContent: "space-between", flexWrap: "wrap" }}>
          {
            cart.map((car) => {
              return (
                <>
                  <Box key={car.id} style={{ display: "flex",  marginTop: "10px" }}>

                    
                    <Image borderRadius="10px" width='200px' src={car.avatar} alt="" />
                    <Box>
                        <Text color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='md'
                      textTransform='uppercase'
                      ml='2'>{car.name}</Text>
                       <Text fontSize='20px'>₹ {car.price}</Text>
                       {
                         car.fastDelivery ?
                        <Box> <Text>Fast Delivery</Text></Box> :
                        <Box> <Text>4 Days Delivery</Text></Box>
                       }
                <Flex alignItems='center'>
                    Ratings: <Rating rating={car.ratings} />
                </Flex>

                    </Box>
              
                  </Box>
                  <Select onChange={(e)=>dispatch({
                    type:"CHANGE_CART_QTY",
                    payload:{
                      id:car.id,
                      qty:e.target.value,
                    }
                  })} value={car.qty} width="150px" placeholder='Quantity'>
                    {
                        [...Array(car.inStock).keys()].map((x)=>(
                          <option key={x+1}>{x+1}</option>
                        ))
                    }
                </Select>
                <Button onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:car})}><DeleteIcon/></Button>     
                </>
              )
            })
          }
        </Box>
        <Box height="300px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg='aqua' width="30%" marginTop="80px">
          <Box margin="30px">

          <Text color='brown' textDecorationLine="underline" fontSize='30px'>Total Bill to pay</Text>
          <Text color='black' fontSize='20px'>Subtotal of ({cart.length}) items : </Text>
          <Text color='green' fontSize='15px'>COUPON : XYZ54678$500</Text>
          <Box>___________________________________</Box>
          <Text fontWeight='extrabold'>TOTAL AMOUNT : ₹ {total} </Text>
          <Button marginTop='30px'
           width="95%" 
           disabled={cart.length===0}
            margin="center"
             bg="orange" 
             color='white'
             
             onClick={onOpen}
             >Proced to checkout
             </Button>
             <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg='black' fontSize='md' ><Text color='orange'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='md'
                    textTransform='uppercase'
                    ml='2' > THANKS❤️😍🛍️GIVING</Text></ModalHeader>
          <ModalCloseButton />
          <ModalBody bg='black'>
          <Box>
            <Text color='teal.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='md'
                    textTransform='uppercase'
                    ml='2' >HURRAYY !!!!</Text>
            <Text color='teal.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='md'
                    textTransform='uppercase'
                    ml='2' >THANK YOU FOR SHOPPING 😘❤️❤️❤️❤️❤️💕✌️🛒🛍️🛍️🏬🛍️🏬🛍️🛍️🛍️🛍️🛒🛍️🛒🛍️💰💰💰💰💰💰</Text>
            <Text color='teal.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='md'
                    textTransform='uppercase'
                    ml='2' >{cart.length} items has been ordered and soon be delivered at your shipping address</Text>
          </Box>
          </ModalBody>

          <ModalFooter bg='black'>
           
            <Button color='blue' colorScheme='blue' mr={3} variant='ghost'><Link to="/">Go To Home Page</Link></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
       
         </Box>
        </Box>



      </Box>
    </>
  )
}

export default Cart