import Home from './components/Home';
import ProductDetail from './Pages/ProductDetail'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Footer from './components/Footer';
import Products from './Pages/Products';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<div className='App'><Home /></div>} />
          <Route path=":id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path='/products'>
            <Route path=':category' element={<Products />} />
            <Route path='' element={<Products />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
