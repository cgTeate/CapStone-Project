//  <li><a href="pages/1-TimeProgram.html">Adidas</a></li>
//                   <li><a href="pages/inPerson.html">Air Jordan</a></li>
//                   <li><a href="pages/virtual.html">Nike</a></li>
//                   <li><a href="pages/sidebar-left.html">New Balance</a></li>
//                   <li><a href="pages/sidebar-left.html">Reebok</a></li>
//                   <li><a href="pages/sidebar-left.html">Converse</a></li>
//                   <li><a href="pages/sidebar-left.html">Puma</a></li>
//                   <li><a href="pages/sidebar-left.html">Vans</a></li>
                  // <li><a href="pages/gallery.html">Adidas</a></li>
                  // <li><a href="pages/full-width.html">BAPE</a></li>
                  // <li><a href="pages/sidebar-left.html">Fear Of God</a></li>
                  // <li><a href="pages/sidebar-left.html">Gucci</a></li>
                  // <li><a href="pages/sidebar-left.html">Off-White</a></li>
                  // <li><a href="pages/sidebar-left.html">Nike</a></li>

                  import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

                  export default function Header() {
                   const mystyle = {
                     color: "black",
                     //backgroundColor: "Gray",
                     padding: "30px",
                     fontFamily: "Times New Roman",
                     fontSize: "50px",
                     fontWeight: "bold",
                   };
                   return (
                     
                     <header className="flex justify-between p-5 text-sm text-gray-700flex space-x-4">
                       <div id="logo" class="fl_left">
                         <h1 style={mystyle}>HypeHeads</h1>
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
                           <a href="">Home</a>
                               <a className="drop" href="#">Kicks</a>
                               <a class="drop" href="#">Apparel</a>           
                               <a class="drop" href="#">Live Bidding</a>
                              <br></br> <a class="drop" href="#">FAQS</a>
                               <br></br><a class="drop" href="#">Sign Up</a>
                               <br></br><a class="drop" href="#">Sell</a>
                       </div>
                     </header>
                   )
                 }