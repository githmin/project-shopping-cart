import './App.css';
import { Link, Route,Routes } from 'react-router-dom';
import Index from './components/Home/Index';
import Nav from './components/Nav';
import Shop from './components/Shop/Shop';
import MB from './components/assets/mb.png'
import GPU from './components/assets/gpu.png'
import LAP from './components/assets/lap.png'

function App() {

  const items = [
    { id : 1 , Name :"MEG Z790 ACE" , url:MB},
    { id : 2 , Name :"GeForce RTX® 4090 GAMING X" , url:GPU },
    { id : 3 , Name :"Titan GT77" , url:LAP },
    { id : 1 , Name :"MEG Z790 ACE" , url:MB},
    { id : 2 , Name :"GeForce RTX® 4090 GAMING X" , url:GPU }
  ]

  return (
    <div>
    <Nav/>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/shop" element={<Shop items={items} />} />
    </Routes>

    </div>
  );
}

export default App;
