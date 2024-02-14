import { useState } from 'react'

import './app.css'
import { chakraprovider, Box } from '@chakra-ui/react'
function App() {

  return (
    <ChakraProvider>
      <Box h={200} w={233} bg="red"></Box>
    </ChakraProvider>)
}

export default App
