import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

  return (
    <header className='navbar'>
      <div className="navbar-container">
        <Link to="/" className="brand">
            RightAway
        </Link>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
            <Link to="/" >Home</Link>
            <Link to="/products" >Products</Link>
            <Link to="/cart" >Cart</Link>
            <Link to="/login" >Login</Link>
        </nav>

        <div className="navbar-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
