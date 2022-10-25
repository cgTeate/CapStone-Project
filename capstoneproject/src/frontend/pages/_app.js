import '../styles/globals.css'
import 'antd/dist/antd.css';
import {theme} from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { StoreProvider } from '../utils/Store'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider><ChakraProvider theme={theme}>
      
        <Component {...pageProps} />
        
    </ChakraProvider></StoreProvider>) 
  
}

export default MyApp