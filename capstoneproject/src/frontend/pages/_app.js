import '../styles/globals.css'
import 'antd/dist/antd.css';
import {theme} from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp