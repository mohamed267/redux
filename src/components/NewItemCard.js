import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Input , FormControl , FormLabel  ,Stack , Button} from "@chakra-ui/react"
import { itemAdded } from '../actions'

const NewItemCard = ({dispatch , onSubmit}) => {
    const [data , setData] =  useState({
        name : "", 
        price: ""
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(itemAdded(
            data.name , 
            data.price
        ))
    }
  return (
    <form
        onSubmit={handleSubmit}
    >
        <Stack
            spacing={4}
        >
            <FormControl>
                <FormLabel> item neme </FormLabel>
                <Input 
                    value={data.name}
                    onChange={(e)=>setData({...data , name : e.target.value})}
                />
                
            </FormControl>
            <FormControl>
                <FormLabel> price </FormLabel>
                <Input 
                    value={data.price}
                    onChage={(e)=>setData({...data , price : e.target.value})}
                />
            </FormControl>
            <Button
                colorScheme={"blue"}
                type="submit"
            >
                add item 
            </Button>

        </Stack>

        
    </form>
  )
}


export default NewItemCard