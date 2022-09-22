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
   
    <header className="sticky top-0 bg-white">
    <div className="flex justify-between p-5 text-sm text-gray-700flex space-x-4">
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
    </div>
    </header>
  )
}