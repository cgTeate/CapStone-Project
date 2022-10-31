import '../styles/globals.css'
import 'antd/dist/antd.css';
import {theme} from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { StoreProvider } from '../utils/Store'
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
    <StoreProvider><ChakraProvider theme={theme}>
    {Component.auth ? (
            <Auth adminOnly={Component.auth.adminOnly}>
        <Component {...pageProps} />
        </Auth>
        ) : (
          <Component {...pageProps} />
          )}
    </ChakraProvider></StoreProvider>
  </SessionProvider>
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