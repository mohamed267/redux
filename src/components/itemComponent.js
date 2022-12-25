import React from 'react'
import PropTypes from 'prop-types'
import { Stack , Text , Flex , FormControl , FormLabel , Input , Button} from "@chakra-ui/react"



const ItemComponent = ({item={} , remove , updatePrice , updateQuantity}) => {
  return (
    <>
      {
        <Stack
        border="1px solid"
        borderColor="gray.500"
        borderRadius={"md"}
        p={3}
        >
        <Text
            fontSize={"xl"}
            fontWeight="lg"
        >{item.name}</Text>
        <Flex
            gap={15}
            justifyContent="space-between"
            alignItems={"center"}
        >
            <form>
            <Flex
                gap={5}
            >
                <FormControl>
                <FormLabel> price </FormLabel>
                <Input 
                    value={item.price}
                    onChange={(e)=>updatePrice(parseInt(e.target.value ?e.target.value : 0))}
                />
                
            </FormControl>
            <FormControl>
                <FormLabel> quantity </FormLabel>
                <Input 
                      value={item.quantity}
                      onChange={(e)=>updateQuantity(parseInt(e.target.value ?e.target.value :  1))}
                />
                
            </FormControl>

            </Flex>
            </form>
            <Stack
            justifyContent={"center"}
            alignItems="center"
            >
            <Text fontWeight={"bold"}>total</Text>
            <Text>{item.quantity * item.price}</Text>
            <Button
                variant={"outline"}
                colorScheme="red"
                size="sm"
                onClick={remove}
            > remove</Button>
            </Stack>

        </Flex>

        </Stack>

      }
    </>
  )
}


export default ItemComponent