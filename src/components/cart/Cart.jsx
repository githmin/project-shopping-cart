import React from 'react'
import './cart.css'

function Cart(props) {
  return (
    <div className='mainCheck'>

        <div>
            {props.CartItems.map( x => 
                    <div className='cartCard'>
                        <div className='itemName'>$ {x.Price}</div>
                        <img className='CartImg' src={x.url}/>
                        <div className='itemName'>{x.Name}</div>
                    </div>
                )}
        </div>


        <div className="totalDiv">
            <p>Total Price :</p>
            <p>Total Items :</p>
            <button>CheckOut</button>
        </div>


    </div>

  )
}

export default Cart