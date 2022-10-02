import React,{ useState } from 'react'
import './cart.css'

function Cart(props) {

  const removeFromCart = (productToRemove) =>{
    props.setCartItems(props.CartItems.filter(product => product !== productToRemove ))
  }

  let sum = 0;
  props.CartItems.forEach(item => {
      sum += item.Price
  });

  return (
    <div className='mainCheck'>

        <div>
            {props.CartItems.map( product => 
                    <div className='cartCard' >
                        <div className='itemName'>$ {product.Price}</div>
                        <button onClick={()=> removeFromCart(product)}>Remove</button>
                        <img className='CartImg' src={product.url} alt={product.Name}/>
                        <div className='itemName'>{product.Name}</div>
                        
                    </div>
                )}
        </div>
  

        <div className="totalDiv">
            <p>Total Price : $ {sum}</p>
            <p>Total Items : {props.CartItems.length}</p>
            <button>CheckOut</button>
        </div>


    </div>

  )
}

export default Cart