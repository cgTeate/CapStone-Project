import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import ApparelHome from './apparelHome';
import Login from '../components/login'
import SellerReg from '../components/SellerReg'
import Register from '../components/Register'
import KicksMain from '../components/KicksMain'
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

 export default function Header() {
  const { data: session } = useSession();
  const mystyle = {
    color: "black",
    //backgroundColor: "Gray",
    padding: "30px",
    fontFamily: "Garamond",
    fontSize: "50px",
    // fontWeight: "bold",
  };
  return (
   
    <header className="sticky top-0 bg-white">
    <div className="flex justify-between p-5 text-sm text-gray-700flex space-x-4">
      <div id="logo" class="fl_left">
        <h1 style={mystyle}>HYPE HEADS</h1>
      </div>
      <div className="relative mt-2">
          <div className="absolute top-2 middle-2">
            <MagnifyingGlassIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>

        <div className="flex space-x-4 items-center"> 
              <a href=""><Link href="/homePage">Home</Link></a>
              <a  href=""><Link href="/KicksPage">Kicks</Link></a>
              <a className="drop" href="#"><Link href ="/ApparelPage">Apparel</Link></a>           
              <a className="drop" href="#"><Link href = "/">Live Bidding</Link></a>
              <br></br> <a className="drop" href="#"><Link href ="/FAQSPage">FAQS</Link></a>
              <br></br><a className="drop" href="#"><Link href = "/LoginPage">Log In</Link></a>
              <br></br><a className="drop" href="#"><btn 
              className={`mt-10 text-sm tracking-wide text-gray-100 focus:outline-none focus:shadow-outline hover:shadow-xl active:scale-90 transition duration-150  
              ${ session?.user?.accessToken ? 'text-red-400' : 'text-green-400'
             }`}
             onClick={() => (session?.user?.accessToken ? signOut() : signIn())}
              >{session?.user?.accessToken ? 'Log Out' : 'Log In'}
              </btn></a>
              <br></br><a className="drop" href="#"><Link href ="/SellerPage">Sell</Link></a>
        </div>
        
    </div>
    </header>
  )
}