import {  Box, Flex, Image, Input, Tag, TagLabel } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Carts } from '../Context/Context'

const Nav = () => {
    const { state: { cart }, dispatcher} = useContext(Carts)

    return (
        <>
            <Box position='relative' top='0px' bg='black'  w='100%' h='50px' display='flex' justifyContent='space-around' alignItems='center' color='white'>
                <NavLink to={"/"}>Home Page</NavLink>
                <Input focusBorderColor='lime' width='auto' variant='outline' placeholder='Search Products' onChange={(e)=>{
                    dispatcher({
                        type:"FILTER_BY_SEARCH",
                        payload:e.target.value
                    })
                }} />
                {/* <NavLink to={"/login"}>Login Page</NavLink> */}

                <Flex>
                    <NavLink to={"/cart"}>
                        <Image boxSize='30px' borderRadius='full'
                            objectFit='cover'
                            src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5392891.jpg'
                            alt='cart' />
                    </NavLink>
                    {/* <Badge borderRadius='full' colorScheme='green'>
                           {cart.length}
                    </Badge> */}
                    <Tag height='0px'
                        width='0px'
                        borderRadius='50%'
                        variant='solid'
                        colorScheme='green'>
                        <TagLabel>{cart.length}</TagLabel>
                    </Tag>

                </Flex>
            </Box>
        </>
    )
}
export default Nav