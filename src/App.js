import Home from './components/Home';
import ProductDetail from './Pages/ProductDetail'
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <DataProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className='App'><Home /></div>} />
          <Route path=":id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </HashRouter>
    </DataProvider>
  );
}

export default App;
