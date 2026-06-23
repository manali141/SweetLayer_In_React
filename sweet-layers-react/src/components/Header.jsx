import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar container">

        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logoLink">
            <span>Sweet Layers</span>
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li>
            <Link to="/Menu" className="nav-link">Cakes</Link>
          </li>

          <li>
            <Link to="/my-orders" className="nav-link">
              My Orders
            </Link>
          </li>

          <li>
            <Link to="/create-cake" className="nav-link">
              Create Cake
            </Link>
          </li>

          <li>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li>
        </ul>

      </nav>
    </div>
  );
}

export default Header
