
import Footer from './components/footer/footer';
import ShopBody from './components/shop-body/shop-body';
import Cart from './components/shopping-cart/cart/cart/cart';
import NavBar from './components/nav/nav';
import { useState } from 'react';
import "./Store.css";
function Store(props) {
  const [total, setTotal] = useState(0.0);
  const [cartSize, setCartSize] = useState(0);

  function increment(price) {
    setTotal(total + price);
    setCartSize(cartSize + 1);

    console.log("Cart size: " + cartSize);
    console.log("$" + total.toFixed(2));
  }

  return (
    <div className="Store">
      <div className="storeNav">
        <div className="navvy">
          <NavBar />
        </div>

        <div className="cartty">
          <Cart total={total} cartSize={cartSize} />
        </div>
      </div>

      <ShopBody total={total} cartSize={cartSize} increment={increment} />
    </div>
  );
}

export default Store;
