import React from 'react'
import './shop.css'

function Shop(props) {

  // No idea why this fixes this
  const cartitems = props.CartItems;
  const setcartitems = props.setCartItems;

  const updateCart =(product)=>{
    console.log("adding to Cart");
    setcartitems([...cartitems, product]);
    console.log(cartitems);

  }

  return (
    <div className='mainShop'>
      <div className='middleDiv'>
        <div className="innerDiv">
            {props.items.map( (product , idx) => 
                <div className='card' key={idx}>
                  <img className='itemImg' src={product.url} alt={product.name}/>
                  <div className='itemName'>{product.Name}</div>
                  <div className='itemName'>$ {product.Price}</div>
                  <button onClick={()=>updateCart(product)} className='addtocart'>Add to Cart</button>
                </div>
              )}
        </div>
      </div>
    </div>
  )
}

export default Shop