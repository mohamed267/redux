import React from 'react'
import PropTypes from 'prop-types'
import { Stack , Text , Flex , FormControl , FormLabel , Input , Button} from "@chakra-ui/react"
import ItemComponent from './itemComponent'
import { ItemContainer } from '../containers/itemContainer'


const ItemsComponent = ({items=[]}) => {
  return (
    <>
      {
        items.map((item , key)=>(
          <ItemContainer
            key={key} 
            item={item}
          />
        ))
      }
    </>
  )
}

ItemsComponent.propTypes = {}

export default ItemsComponent