import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import CartItem from "./cartItem";
import { useContext } from "react";
const Cart = (props) => {
  const CartCtx=useContext(CartContext)
  const totalAmount=`$${CartCtx.totalAmount.toFixed(2)}`
  const hasItems=CartCtx.items.length>0
  const cartItemRemoveHandler=(id)=>{
CartCtx.removeItem(id)
  }
  const cartItemAddHandler=(item)=>{
CartCtx.addItem({...item,amount:1})
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
    <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
    onRemove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandler.bind(null,item) }/>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
       {hasItems && <button className={classes.button} onClick={props.onOrder}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
