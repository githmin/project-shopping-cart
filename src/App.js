import './App.css';
import { Link, Route,Routes } from 'react-router-dom';
import Index from './components/Home/Index';
import Nav from './components/Nav';

function App() {
  return (
    <div>
    <Nav/>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>

    </div>
  );
}

export default App;
