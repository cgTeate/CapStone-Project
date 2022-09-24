import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/login'
import Register from '../components/Register'
import RegistrationForm from '../components/RegistrationForm'
import SidebarAntD from '../components/SidebarAntD'
import Slider from '../components/Slider'
import ProductHome from '../components/kicksHome'
import ApparelHome from '../components/apparelHome'
import {Stack, VStack} from '@chakra-ui/react'

export default function Home() {
    
    // console.log(Object.keys(customer));
    // console.log(Object.values(customer));
    // const customerKeys = Object.keys(customer);
    // console.log("Keys", customerKeys);
// divider={<StackDivider borderColor='gray.200' />}
      // spacing={4}
      // align='stretch'
  return (

    <div >
      <Head>
        <title>Hype Heads Full Stack App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      {/* <Header/> */}
      
      
      

      <Login/>
      {/*<Slider/>*/}
      


      
      {/*<ProductHome/>*/}
      
      {/*<VStack> */}
      {/*<ApparelHome/>*/}
      
      {/*</VStack>*/}
       {/* Registration Form */}
       
      {/* <RegistrationForm/> */}
      {/* <Register/> */}

    {/* Return Customer info */}
    {/* <SidebarAntD/> */}
    
      
    </div>
  )
}
