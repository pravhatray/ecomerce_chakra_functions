import { createContext } from "react";
import React from 'react'
// import { faker } from '@faker-js/faker';
import {faker} from '@faker-js/faker'
import { useReducer } from "react";
import { cartReducer, prodreducer } from "../Reducer/cartReducer";


export const Carts = createContext()
faker.seed(20)


const ContextProvider = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        avatar: faker.image.image(),
        inStock: faker.helpers.arrayElement([0,3,4,5,6,7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1,2,3,4,5])
    }))
    
const [state,dispatch]=useReducer(cartReducer,{
    products:products,
    cart:[]
})

const [filter,dispatcher]=useReducer(prodreducer,{
    bystock:false,
    byFastDelivery:false,
    byRating:0,
    searchData:""
})

    return (
        <Carts.Provider value={{state,dispatch,filter,dispatcher}}>
            {children}
        </Carts.Provider>
    )
}

export default ContextProvider