export default function Header() {
    return (
      <header id="header" class="hoc clear">
        <div id="logo" class="fl_left">
          <h1>Unique</h1>
        </div>
        <nav id="mainav" class="fl_right">
          <ul class="clear">
            <li class="active"><a href="index.js">Home</a>
            </li>
            <li>
                <a class="drop" href="#">Kicks</a>
                <ul>
                    <li><a href="pages/1-TimeProgram.html">Adidas</a></li>
                    <li><a href="pages/inPerson.html">Air Jordan</a></li>
                    <li><a href="pages/virtual.html">Nike</a></li>
                    <li><a href="pages/sidebar-left.html">New Balance</a></li>
                    <li><a href="pages/sidebar-left.html">Reebok</a></li>
                    <li><a href="pages/sidebar-left.html">Converse</a></li>
                    <li><a href="pages/sidebar-left.html">Puma</a></li>
                    <li><a href="pages/sidebar-left.html">Vans</a></li>
                </ul>
            </li>
            <li>
                <a class="drop" href="#">Apparel</a>
                <ul>
                    <li><a href="pages/gallery.html">Adidas</a></li>
                    <li><a href="pages/full-width.html">BAPE</a></li>
                    <li><a href="pages/sidebar-left.html">Fear Of God</a></li>
                    <li><a href="pages/sidebar-left.html">Gucci</a></li>
                    <li><a href="pages/sidebar-left.html">Off-White</a></li>
                    <li><a href="pages/sidebar-left.html">Nike</a></li>
                </ul>
            </li>
            <li>
                    <a class="drop" href="#">Live Bidding</a>
                    <ul>
                      <li><a href="pages/gallery.html">Live Bidding</a></li>
                    </ul>
            </li>
            <li>
                    <a class="drop" href="#">FAQS</a>
                    <ul>
                        <li><a href="pages/gallery.html">FAQS</a></li>
                    </ul>
            </li>
            <li>
                    <a class="drop" href="#">Sign Up</a>
                    <ul>
                        <li><a href="pages/gallery.html">Sign Up</a></li>
                    </ul>
            </li>
            <li>
                    <a class="drop" href="#">Sell</a>
                    <ul>
                        <li><a href="pages/gallery.html">Sell</a></li>
                    </ul>
            </li>
          </ul>
        </nav>
      </header>
    )
  }