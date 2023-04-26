
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./components/store/CartProvider";
function App() {
  const [cartIsShown,setCartIsShown]=useState(false)

  const showCartHandler=()=>{
setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  const orderCartHandler=()=>{
    console.log('the order has been delivered')
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} onOrder={orderCartHandler}/>}
   <Header onShowCart={showCartHandler}/>
   <main>
<Meals/>
   </main>
    </CartProvider>
  );
  }

export default App;
