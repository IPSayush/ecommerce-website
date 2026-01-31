import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import ShopCategory from "./pages/Shopcategory.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/footer/Footer.jsx";
import men_bnr from "./components/assets/banner_mens.png";
import women_bnr from "./components/assets/banner_women.png";
import kids_bnr from "./components/assets/banner_kids.png";
import About from "./pages/About.jsx";
import AllProducts from "./pages/Allpd.jsx";
import Contact from "./pages/Contact.jsx";
// Note: Check spelling of filename here
import Checkout from "./components/checkout/Checkout.jsx"; 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory bnr={men_bnr} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory bnr={women_bnr} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory bnr={kids_bnr} category="kid" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Fixed Product Route */}
          <Route path="/product/:productId" element={<Product />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


// import "./App.css";
// import Navbar from "./components/Navbar/Navbar.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Shop from "./pages/shop";
// import ShopCategory from "./pages/ShopCategory.jsx";
// import Product from "./pages/Product.jsx";
// import Cart from "./pages/Cart.jsx";
// import Signup from "./pages/Signup.jsx";
// import Login from "./pages/Login.jsx";
// import Footer from "./components/footer/Footer.jsx";
// import men_bnr from "./components/assets/banner_mens.png";
// import women_bnr from "./components/assets/banner_women.png";
// import kids_bnr from "./components/assets/banner_kids.png";
// import About from "./pages/About.jsx";
// import AllProducts from "./pages/Allpd.jsx";
// import Contact from "./pages/Contact.jsx";
// import Checkout from "./components/checkout/Checkout.jsx";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Shop />} />
//           <Route
//             path="/mens"
//             element={<ShopCategory bnr={men_bnr} category="men" />}
//           />
//           <Route
//             path="/womens"
//             element={<ShopCategory bnr={women_bnr} category="women" />}
//           />
//           <Route
//             path="/kids"
//             element={<ShopCategory bnr={kids_bnr} category="kid" />}
//           />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<AllProducts />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="product" element={<Product />}>
//             <Route path=":productId" element={<Product />} />
//           </Route>
//         </Routes>

//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
