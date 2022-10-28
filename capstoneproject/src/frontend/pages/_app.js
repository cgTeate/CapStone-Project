import '../styles/globals.css'
import 'antd/dist/antd.css';
import {theme} from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { StoreProvider } from '../utils/Store'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { SessionProvider, useSession } from 'next-auth/react';

function MyApp({ Component, pageProps
  // : { session, ...pageProps } 
}) {
  return (
    // <SessionProvider session={session}>
    // <StoreProvider>
    <Provider store = {store}>
      <ChakraProvider theme={theme}>
      
      <Component {...pageProps} />
      
  </ChakraProvider>
    </Provider>
      
  //   </StoreProvider>
  // </SessionProvider>
) }


export default MyApp