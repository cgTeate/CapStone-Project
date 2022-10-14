import '../styles/globals.css'
import 'antd/dist/antd.css';
import {theme} from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
      
  )
}

export default MyApp