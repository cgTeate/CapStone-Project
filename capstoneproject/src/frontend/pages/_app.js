import '../styles/globals.css'
import 'antd/dist/antd.css';
import {theme} from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { StoreProvider } from '../utils/Store'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function MyApp({ Component, pageProps
  // : { session, ...pageProps } 
}) {
  return (
    /* 
    ! Redux implmentation
   */

    // <SessionProvider session={session}>
    // <StoreProvider>
    <Provider store = {store}>
      <ChakraProvider theme={theme}>
      
      <Component {...pageProps} />
      
  </ChakraProvider>
    </Provider>
      
  //   </StoreProvider>
  // </SessionProvider>

  /* 
    ! Original implmentation
   */

  //   <SessionProvider session={session}>
  //   <StoreProvider>
  //     <PayPalScriptProvider deferLoading={true}>
  //     <ChakraProvider theme={theme}>
  //   {Component.auth ? (
  //           <Auth adminOnly={Component.auth.adminOnly}>
  //       <Component {...pageProps} />
  //       </Auth>
  //       ) : (
  //         <Component {...pageProps} />
  //         )}
  //   </ChakraProvider>
  //   </PayPalScriptProvider>
  //   </StoreProvider>
  // </SessionProvider>
) }

function Auth ({ children }) {
  const router = useRouter();
  const { status} = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}

export default MyApp;