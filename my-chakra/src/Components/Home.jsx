import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useReducer } from 'react'
import Nav from '../Navbar/Nav'
import { useContext } from 'react'
import { Carts } from '../Context/Context'
import ProdList from './ProdList'
import { Box } from '@chakra-ui/react'
import Filters from './Filters'


const Home = () => {
    const { state: { products }, filter: {searchData, sort, byRating, byFastDelivery, bystock } } = useContext(Carts)


    const tarnsition = () => {
        let sortedData = products


        if (sort) {
            sortedData = sortedData.sort((a, b) => (
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            ))
        }

        if (!bystock) {
            sortedData = sortedData.filter((prod) =>
                prod.inStock
            )
        }
        
        if(byFastDelivery){

            sortedData=sortedData.filter((prod)=>
            prod.fastDelivery
            )
            
        }

        if(byRating){

            sortedData=sortedData.filter((prod)=>
            prod.ratings>=byRating
            )
            
        }

        
        if(searchData){

            sortedData=sortedData.filter((prod)=>
            prod.name.toLowerCase().includes(searchData)
            )
            
        }

        return sortedData
    }


    return (
        <>
            <div style={{ position: "sticky", top: "0px" }}>
                <Nav />
            </div>


            <Box display="flex">

                <Filters />
                <Box style={{ display: "flex", width: "84%", justifyContent: "space-around", flexWrap: "wrap" }}>
                    {
                        tarnsition().map((prod) => {
                            return <ProdList prod={prod} key={prod.id} />
                        })
                    }
                </Box>
            </Box>
        </>
    )
}

export default Home