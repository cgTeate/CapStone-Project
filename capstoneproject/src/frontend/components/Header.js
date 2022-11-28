import { MagnifyingGlassIcon,PlusCircleIcon} from "@heroicons/react/24/outline";
//import { signOut, useSession } from 'next-auth/react';
import Link from "next/link";
import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import { signOut, useSession } from 'next-auth/react';
// import { Menu } from "antd";
import DropdownLink from "./DropdownLink";
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Spinner, Alert, Button
} from "@chakra-ui/react";
import {Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/menu";
import dynamic from 'next/dynamic'
import {cartReset } from "../redux/cartSlice";
import {getUserReset } from "../redux/userSlice";
import HypeHeadsLogo from "../images/NewHypeHeadsLogo3.png";

function Header() {
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const { isLoading, isAuth, error } = useSelector((state) => state.login);
  const logMeOut = () => {
    // Cookies.remove('cart');
    dispatch(cartReset())
    dispatch(getUserReset())
    sessionStorage.removeItem('access_Token');
    localStorage.removeItem('user');
    router.push("/LoginPage");
  }
  const mystyle = {
    color: "black",
    //backgroundColor: "Gray",
    padding: "30px",
    fontFamily: "Garamond",
    fontSize: "50px",
    fontWeight: "bold",
  };
  const mystyle2 = {
    color: "black",
    //backgroundColor: "Gray",
    padding: "1px",
    fontFamily: "Garamond",
    fontSize: "16px",
    // fontWeight: "bold",
  };
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const { status, data: session } = useSession();
  // const { state, dispatch } = useContext(Store);
  // const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    // setCartItemsCount(cart.products.reduce((a,c)=>a + c.quantity,0))
    const number = Array.isArray(cart.products) ? cart.products.reduce((a, c) => a + c.quantity, 0) : 0;
    setCartItemsCount(number)
  }, [cart.products]);

  // const logoutClickHandler = () => {
  //   Cookies.remove('cart');
  //   dispatch({ type: 'CART_RESET' })
  //   signOut({ callbackUrl: '/login' });
  // }

  const logo = [HypeHeadsLogo];
  return (

    
    <header className="items-center top-0 bg-gray-500">
      <div className="flex justify-between items-center p-5 text-sm text-gray-700flex space-x-4">
        <div id="logo" className="fl_left">
              {logo.map((image) => (
          <div key={image.src} className="">
            <Link href="/">
            <img
            layout="fill"
            style={{ width: 200, height: 100 }}
            src={image.src}
            alt={image.alt}
          />
            </Link>
          </div>
        ))}   
        </div>
        <div className="relative">
          <div className="absolute top-0 middle-2">
            <MagnifyingGlassIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-20 border-black text-lg focus:ring-black focus:border-black rounded-md"
          />
        </div>

        <div className="flex space-x-4 items-center ">
          <Link href="/">
            <a>
              <h1 style={mystyle2}>Home</h1>
            </a>
          </Link>
          <Link href="/KicksPage">
            <a>
              <h1 style={mystyle2}>Kicks</h1>
            </a>
          </Link>
          <Link href="/ApparelPage">
            <a>
              <h1 style={mystyle2}>Apparel</h1>
            </a>
          </Link>

          <Link href="/Cart">
            <a className="p-2">
              <h1 style={mystyle2}>Cart</h1>
              {cartItemsCount > 0 && (
                <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  {cartItemsCount}
                </span>
              )}
            </a>
          </Link>



          <Link href="/FAQSPage">
            <a>
              <h1 style={mystyle2}>FAQS</h1>
            </a>
          </Link>

          {/* <Link href="/order-history">
            <a className="drop" href="#">
              History
            </a>
          </Link> */}
          {/* <Link href="/LoginPage">
            <a className="drop" href="#">
              Login
            </a>
          </Link> */}

          {/* {
            isLoading ? (<Spinner />) : 
            user ? ("Hi " + user) : 
            (
              <Link href="/LoginPage">
            <a className="drop" href="#">
              Login
            </a>
          </Link>
            )
          } */}

                
                 {/* <a className="drop" href="#"> */}
                 {
                isLoading ? (<Spinner />) :
                  user ? (
                    <Menu as="div" className="relative inline-block">
                      <MenuButton as={Button} className="text-blue-600">
                        {"Hi " + user.slice(0,1).toUpperCase() + user.slice(1,6)}
                    </MenuButton>
              <MenuList className="right-150 w-56 origin-top-right shadow-lg ">

                 <MenuItem>
                 <Link href="/profile">
                      <a className="dropdown-link" href="#">
                       Profile
                      </a>
                  </Link>
                  {/* <DropdownLink className="dropdown-link" href="/profile">
                      Profile
                  </DropdownLink> */}
                </MenuItem>
                <MenuItem>
                  <Link href="/order-history">
                      <a className="dropdown-link" href="#">
                       Order History
                      </a>
                  </Link>
                  {/* <DropdownLink
                    className="dropdown-link"
                    href="/order-history"
                  >
                    Order History
                  </DropdownLink> */}
                </MenuItem> 

                <MenuItem>
                <Button
                    href="#"
                    onClick={logMeOut}>
                      <a className="dropdown-link" href="#">
                       Logout
                      </a>
                  </Button>
                  {/* <DropdownLink
                    className="dropdown-link"
                    href="#"
                    onClick={logMeOut}
                    >
                    Logout
                    </DropdownLink> */}
                </MenuItem>
             </MenuList> 
            </Menu>
                  ) :
                (<Link href="/LoginPage">
                  <a className="drop" href="#">
                      Log In
                    </a>
                  </Link>
                )}
                {/* </a>   */}

          {/* <a className="drop" href="#">
                {isLoading ? (<Spinner />) :
                  user ? (
                    <Menu as="div" className="relative inline-block">
                      <MenuButton as={Button} className="text-blue-600">
                        {"Hi " + user}
                    </MenuButton>
                    ) :
                (<Link href="/LoginPage">
                  <a className="drop" href="#">
                      Log In
                    </a>
                  </Link>
                )}
                </a>
                  

                 <a className="drop" href="#">
                  {
                    user ? (<a
                      className="dropdown-link"
                      href="#"
                      onClick={logMeOut}
                      >
                      Logout
                      </a>) : ""}
                </a> 

             

           {/* {status === 'loading' ? (
            'Loading'
          ) : session?.user ? (
            <Menu as="div" className="relative inline-block">
              <Menu.Button className="text-blue-600">
                {session.user.name}
              </Menu.Button>
              <Menu.Items className="absolute right-0 w-56 origin-top-right shadow-lg ">
                <Menu.Item>
                  <DropdownLink className="dropdown-link" href="/profile">
                      Profile
                  </DropdownLink>
                </Menu.Item>
                <Menu.Item>
                  <DropdownLink
                    className="dropdown-link"
                    href="/order-history"
                  >
                    Order History
                  </DropdownLink>
                </Menu.Item>
                <Menu.Item>
                  <a
                    className="dropdown-link"
                    href="#"
                    onClick={logoutClickHandler}
                    >
                    Logout
                    </a>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <Link href="/LoginPage">
              <a className="p-2">
              Log In </a>
            </Link>
          )}  */}


          <Link href="/RegistrationPage">
            <a>
              <h1 style={mystyle2}>Sell</h1>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default dynamic(() => Promise.resolve(Header), {ssr: false});
