import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChakraProvider, Box } from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Box></Box>
  </ChakraProvider>)
}

export default App
