import { Outlet, useLocation } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <CartProvider>
      <ThemeProvider>
        <Navbar />
        <main className={`min-h-screen ${isHomePage ? 'pt-0' : 'pt-14'}`}>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
