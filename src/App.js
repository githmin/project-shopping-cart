import './App.css';
import { Route,Routes } from 'react-router-dom';
import { useState } from "react";
import Index from './components/Home/Index';
import Nav from './components/Nav';
import Shop from './components/Shop/Shop';
import Cart from './components/cart/Cart';
import MB from './components/assets/mb.png'
import GPU from './components/assets/gpu.png'
import LAP from './components/assets/lap.png'
import CHAIR from './components/assets/chair.png'
import MONITOR from './components/assets/monitor.png'
import React from 'react';

function App() {

  const items = [
    { id : 1 , Name :"MEG Z790 ACE" , Price: 599 , url:MB},
    { id : 2 , Name :"GeForce RTX® 4090 GAMING X" , Price: 1500, url:GPU },
    { id : 3 , Name :"Titan GT77" , Price: 2000 ,url:LAP },
    { id : 4 , Name :"MAG CH120" ,Price: 400 , url:CHAIR},
    { id : 5 , Name :"Optix MEG381CQR Plus" , Price: 800, url:MONITOR }
  ]

  const [CartItems , setCartItems] = useState([
    { id : 1 , Name :"MEG Z790 ACE" , Price: 599 , url:MB},
    { id : 2 , Name :"GeForce RTX® 4090 GAMING X" , Price: 1500, url:GPU },
    { id : 3 , Name :"Titan GT77" , Price: 2000 ,url:LAP }
  ]);
  
  return (
    <div>
    <Nav CartItems={CartItems}/>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/shop" element={<Shop items={items} CartItems={CartItems} setCartItems={setCartItems} />} />
      <Route path="/cart" element={<Cart CartItems={CartItems} setCartItems={setCartItems} />} />
    </Routes>

    </div>
  );
}

export default App;
