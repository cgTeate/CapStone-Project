import '../styles/globals.css'
import 'antd/dist/antd.css';
import {theme} from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { StoreProvider } from '../utils/Store'
import { SessionProvider, useSession } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
    <StoreProvider><ChakraProvider theme={theme}>
      
        <Component {...pageProps} />
        
    </ChakraProvider></StoreProvider>
  </SessionProvider>
) }


export default MyApp