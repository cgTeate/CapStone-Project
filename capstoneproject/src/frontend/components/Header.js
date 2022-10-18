import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import ApparelHome from "./apparelHome";
import Login from "../components/login";
import SellerReg from "../components/SellerReg";
import Register from "../components/Register";
import KicksMain from "../components/KicksMain";
import Link from "next/link";

export default function Header() {
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
          <Link href="/">
            <a>
              <h1 style={mystyle}>HYPE HEADS</h1>
            </a>
          </Link>
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
          <Link href="/homePage">Home</Link>
          <Link href="/KicksPage">Kicks</Link>
          <Link href="/ApparelPage">
            <a class="drop">Apparel</a>
          </Link>

          <Link href ="/LiveBidding">
            <a class="drop" href="#">
              Live Bidding
            </a>
          </Link>

          
       
          <Link href="/FAQSPage">
            <a class="drop" href="#">
              FAQS
            </a>
          </Link>
         



          <Link href="/LoginPage">
     
            <a class="drop" href="#">
              Log In
            </a>
          </Link>
          


          <Link href="/SellerPage">
         
            <a class="drop">
              Sell
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
