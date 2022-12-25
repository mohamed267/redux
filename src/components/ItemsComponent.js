import React from 'react'
import PropTypes from 'prop-types'
import { Stack , Text , Flex , FormControl , FormLabel , Input , Button} from "@chakra-ui/react"


const ItemsComponent = ({items=[]}) => {
  return (
    <>
      {
        items.map((item , key)=>(
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
                    <Input />
                    
                </FormControl>
                <FormControl>
                    <FormLabel> quantity </FormLabel>
                    <Input />
                    
                </FormControl>

                </Flex>
              </form>
              <Stack
                justifyContent={"center"}
                alignItems="center"
              >
                <Text fontWeight={"bold"}>total</Text>
                <Text>350</Text>
                <Button
                  variant={"outline"}
                  colorScheme="red"
                  size="sm"
                > remove</Button>
              </Stack>

            </Flex>

          </Stack>
        ))
      }
    </>
  )
}

ItemsComponent.propTypes = {}

export default ItemsComponent