import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Nav from "./Components/Navbar.js";
import Products from "./Components/Products.js";
import Cart from "./Components/Cart.js";

function App() {
  return (

    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;