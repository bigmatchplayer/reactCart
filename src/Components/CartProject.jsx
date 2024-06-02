import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";


const CartProject = ({ product }) => {

  const{cart,dispatch}=useContext(CartContext)

  const Increase = (id) => {
    const Index=cart.findIndex(p=> p.id === id)

    if(cart[Index].quantity<10){
      dispatch({type:"Increase",id})

    }
  };

  const Decrease = (id) => {
    const Index=cart.findIndex(p=> p.id === id)

    if(cart[Index].quantity>0){
      dispatch({type:"Decrease",id})

    }

  };

  return (
    <div className="d-flex mt-4 border">
      <img src={product.thumbnail} className="w-25 h-25" alt="" />
      <div className="detail m-1 p-3">
        <h4>{product.title}</h4>
        <h5>${product.price}</h5>
        <div className="buttons">
          <button className="rounded-circle px-2 "            
           onClick={() => Decrease(product.id)}
>
            <b>-</b>
          </button>
          <button className="m-2">{product.quantity}</button>
          <button
            className="rounded-circle px-2"
            onClick={() => Increase(product.id)}
          >
            <b>+</b>
          </button>
        </div>
        <button className="btn btn-success" onClick={()=>dispatch({type:"Remove",id:product.id})}>Remove</button>
      </div>
    </div>
  );
};

export default CartProject;
