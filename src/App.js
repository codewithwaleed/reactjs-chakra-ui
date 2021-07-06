import React from 'react'; // eslint-disable-line
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './themes'
import Home from './Pages/Home'
import Header from './Components/Common/Header'

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Home />
    </ChakraProvider >
  )
}

export default App