import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav(props) {
  return (
    <div className='mainNav'>
        <Link className='LinkClass brand' to='/'>.Brand</Link>
        <div className='linkDiv'>
          <Link className='LinkClass' to='/'>Home</Link>
          <Link className='LinkClass' to='/shop'>Shop</Link>
        </div>
        <Link className='LinkClass Cart' to='/cart'>Go to cart : {props.CartItems.length}</Link>
    </div>
  )
}

export default Nav