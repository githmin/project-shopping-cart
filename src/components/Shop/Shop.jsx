import React from 'react'
import './shop.css'

function Shop(props) {

  return (
    <div className='mainShop'>
      <div className='middleDiv'>
        <div className="innerDiv">
          
            {props.items.map( x => 
                <div className='card'>
                  <img className='itemImg' src={x.url}/>
                  <div className='itemName'>{x.Name}</div>
                  <button className='addtocart'>Add to Cart</button>
                </div>
              )}
          
        </div>
      </div>
    </div>
  )
}

export default Shop