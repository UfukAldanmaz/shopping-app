import Home from './components/Home';
import ProductDetail from './Pages/ProductDetail'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Navbar from './components/Navbar';
import About from './Pages/About';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className='App'><Home /></div>} />
          <Route path=":id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
