import Home from './components/Home';
import ProductDetail from './Pages/ProductDetail'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className='App'><Home /></div>} />
        <Route path=":id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
