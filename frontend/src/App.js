import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { Home } from "./pages/Home";
import { ShopContextProvider } from "./context/shop-context";
import { About } from "./pages/about";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
           
          </Routes>
       
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
