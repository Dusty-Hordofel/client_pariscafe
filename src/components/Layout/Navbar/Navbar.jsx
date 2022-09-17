import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import logo from '../../../assets/images/dosa.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const renderNavbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        {/*container-fluid*/}
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="logo" />
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>
              pari<span className="logo-label">sC</span>af&egrave;
              {/* &egrave is used to indicate*/}
            </label>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className={
                  window.location.pathname === '/catalog'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link className="nav-link " aria-current="page" to="/catalog">
                  Browse
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signout" className="nav-link">
                  Sign out
                </Link>
              </li>
              <li
                className={
                  window.location.pathname === '/cart'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  size="40"
                />
                {/*<div className="input-group-append">*/}
                <button
                  className="btn btn-outline-var(--primary-navy)"
                  type="submit"
                  style={{
                    background: 'var(--primary-navy)',
                    color: 'var(--primary-white)',
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                {/*</div>*/}
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  };

  console.log(
    '🚀 ~ file: Navbar.jsx ~ line 6 ~ Navbar ~ renderNavbar',
    renderNavbar()
  );
  return <div>{renderNavbar()}</div>;
};

export default Navbar;
