import { Outlet, useLocation } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      <main className={`min-h-screen ${isHomePage ? 'pt-0' : 'pt-14'}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
