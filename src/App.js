import logo from './logo.svg';
import './App.css';
import { useCounter } from '@chakra-ui/react';
import {Stack} from "@chakra-ui/react"
import NewItemCard from './components/NewItemCard';
import ItemsComponent from './components/ItemsComponent';
import { ItemsContainer } from './containers/itemsContainer';
import { NewItemContainer } from './containers/newItmeConmtainer';
import {SummaryContainer} from './containers/summaryContainer'

const  items = [
  {name : "tafou" }
]

function App() {
 
  return (
    <Stack 
      alignItems={"center"}
    >
      <Stack
        w={"50%"}
        border="1px solid"
        borderColor="gray.500"
        p={5}
        my={5}
        borderRadius="md"
        spacing={5}
      >
        <NewItemContainer />
      <ItemsContainer />
      <SummaryContainer />

      </Stack>


    </Stack>
  );
}

export default App;
