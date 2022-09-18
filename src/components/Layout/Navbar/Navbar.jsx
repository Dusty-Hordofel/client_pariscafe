import { useAuth0 } from '@auth0/auth0-react';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import logo from '../../../assets/images/dosa.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  console.log(isAuthenticated);

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
              {!isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Register
                    </Link>
                  </li>
                </>
              )}

              {isAuthenticated && (
                <li
                  className={
                    window.location.pathname === '/me'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link className="nav-link" to="/me">
                    <span
                      style={{
                        background: 'var(--primary-navy)',
                        color: 'var(--primary-white)',
                        padding: '5px 20px',
                        borderRadius: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      {user.name}
                    </span>
                  </Link>
                </li>
              )}

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
              {isAuthenticated && (
                <li
                  className={
                    window.location.pathname === '/signout'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link className="nav-link" to="/signout">
                    Sign out
                  </Link>
                </li>
              )}
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
