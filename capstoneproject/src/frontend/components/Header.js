import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { Link, Route, Switch } from "react-router-dom"; 
import ApparelHome from './apparelHome';
import Login from '../components/login'
import SellerReg from '../components/SellerReg'
import Register from '../components/Register'
import KicksMain from '../components/KicksMain'

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
              <li>
                <Link to="../components/login">Home</Link>
              </li>
              <li>
                <Link to="/kicksMain">Kicks</Link>
              </li>
              <li>
                <Link to="/apparelHome">Apparel</Link>
              </li>
              <li>
                <Link to="/">Live Bidding</Link>
              </li>  
              <li>
                <Link to="/">FAQS</Link>
              </li>       
              <li>
                <Link to="/Register">Sign Up</Link>
              </li> 
              <li>
                <Link to="/SellerReg">Sell</Link>
              </li> 
        </div>
        <Route path="../components/login"><Login /></Route>
        <Route path="/kicksMain"><KicksMain /></Route>
        <Route path="apparelHome"><ApparelHome /></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
        <Route path="/Register"><Register /></Route>
        <Route path="/SellerReg"><SellerReg /></Route>
    </div>
    </header>
  )
}