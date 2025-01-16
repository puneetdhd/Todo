import Navbar from './Navbar';
import { useState } from 'react'

export default function CategoriesSidebar({click,setClick}) {
  const [isOpen, setIsOpen] = useState(true);

  let close = () => {
    setClick(false);
    setIsOpen(false);
  }

  return (
    <>
      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div 
          className="overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="header">
          <h2>Categories</h2>
          <button 
            onClick={close}
            className="close-button"
            aria-label="Close categories menu"
          >
            ×
          </button>
        </div>
        <nav>
          <ul>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Home Decor</a></li>
          </ul>
        </nav>

        <style jsx>{`
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 250px;
            height: 100vh;
            background: white;
            padding: 20px;
            border-right: 1px solid #eee;
            z-index: 1000;
            transition: transform 0.3s ease;
            transform: translateX(-100%);
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: 999;
            display: none;
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
          }

          h2 {
            margin: 0;
            font-size: 1.2rem;
            font-weight: 500;
          }

          .close-button {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            color: #666;
          }

          .close-button:hover {
            color: #000;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          li {
            margin-bottom: 12px;
          }

          a {
            color: #666;
            text-decoration: none;
            font-size: 0.95rem;
          }

          a:hover {
            color: #000;
          }

          /* Mobile styles */
          @media (max-width: 768px) {
            .overlay {
              display: block;
            }

            .sidebar {
              box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
            }
          }
        `}</style>
      </div>
    </>
  )
}
