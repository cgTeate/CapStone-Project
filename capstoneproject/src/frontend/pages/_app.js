import '../styles/globals.css'
import 'antd/dist/antd.css';
import "swiper/css";
import {theme} from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { StoreProvider } from '../utils/Store'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useSelector} from 'react-redux'
import { useEffect } from "react";


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
       <PayPalScriptProvider deferLoading={true}>
       <ChakraProvider theme={theme}>
        {Component.auth ? (
          <AuthProvider>
              <Component {...pageProps} />
          </AuthProvider>
        ) : (
          <Component {...pageProps} />
        )
        }
      </ChakraProvider>
       </PayPalScriptProvider>
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

// ! Redux implmentation
function AuthProvider ({ children }) {
  const user = useSelector((state) => state.user.user);
  const {isLoading, isAuth, error} = useSelector((state) => state.login);
  const router = useRouter();
  //save user credentials on local storage
  useEffect(() => {
    if(!localStorage.getItem('user') || user!==localStorage.getItem('user')){
      localStorage.setItem("user", JSON.stringify(user));
    }
    if(user===null){
      router.push('/unauthorized?message=login required');
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }
  }, [user, isLoading]);
  return children;
};

// ! Original Implementation

// function Auth ({ children }) {
//   const user = useSelector((state) => state.user.user);
//   const {isLoading, isAuth, error} = useSelector((state) => state.login);
//   const router = useRouter();
//   if(user===null){
//     router.push('/unauthorized?message=login required');
//   }
//   // const { status} = useSession({
//   //   required: true,
//   //   onUnauthenticated() {
//   //     router.push('/unauthorized?message=login required');
//   //   },
//   // });
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return children;
// }

export default MyApp;