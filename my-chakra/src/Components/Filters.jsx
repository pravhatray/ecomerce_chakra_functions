import { Button, Checkbox, Flex, FormControl, FormHelperText, FormLabel, HStack, position, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Carts } from '../Context/Context'
import Rating from './Rating'

const Filters = () => {
    const { filter: { sort, byRating, byFastDelivery, bystock }, dispatcher } = useContext(Carts)
    //const [rate, setRate] = useState(4)
    console.log(sort, byRating, byFastDelivery, bystock);
    return (

        <>
            <div style={{ backgroundColor: "teal" }}>
                <FormControl padding="20px" as='fieldset'>
                    <FormLabel as='legend'><Text fontSize='20px' color='tomato' as="u">Filter Products</Text></FormLabel>
                    <RadioGroup >

                        <Stack marginTop='5px' direction='column'>
                            <Radio value='1' onChange={() => dispatcher({
                                type: "SORT_BY_PRICE",
                                payload: "lowToHigh"
                            })}
                                checked={sort === "lowToHigh" ? true : false}>
                                <Text fontSize='17px' color='aqua' as="u">ASCENDING</Text>
                            </Radio>

                            <Radio value='2' onChange={() => dispatcher({
                                type: "SORT_BY_PRICE",
                                payload: "highToLow"
                            })}
                                checked={sort === "highToLow" ? true : false}>
                                <Text fontSize='17px' color='aqua' as="u">DESCENDING</Text>
                            </Radio>
                        </Stack>
                    </RadioGroup>


                    <Stack marginTop='10px' spacing={5} direction='column'>
                        <Checkbox colorScheme='green' onChange={() => dispatcher({
                            type: "FILTER_BY_STOCK",
                            
                        })}
                            _checked={bystock}>
                            <Text fontSize='17px' color='aqua' as="u">INCLUDE OUT OF STOCK</Text>
                        </Checkbox>
                        <Checkbox colorScheme='green' onChange={() => dispatcher({
                            type: "FILTER_BY_DELIVERY",
                            
                        })}
                            _checked={byFastDelivery} >
                            <Text fontSize='17px' color='aqua' as="u">FAST DELIVERY</Text>
                        </Checkbox>
                    </Stack>


                    <div>
                        <Flex color='aqua' alignItems='center' marginTop='10px' justifyContent='space-around' >
                            Rating:<Rating onClick={(i) => dispatcher({
                                type: "FILTER_BY_RATING",
                                payload: i + 1
                            })} rating={byRating} style={{ cursor: "pointer" }} />
                        </Flex>

                    </div>


                    <Button onClick={()=>dispatcher({
                        type:"CLEAR_FILTERS"
                    })} colorScheme='orange' marginTop='15px'>NO FILTERS</Button>

                </FormControl>

            </div>
        </>

    )
}

export default Filters