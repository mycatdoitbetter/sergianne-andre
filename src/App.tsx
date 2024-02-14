import './app.css'
import { ChakraProvider, Box } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <Box h={200} w={233} bg="red"></Box>
    </ChakraProvider>)
}

export default App
