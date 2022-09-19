import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import {
  faBars,
  faSearch,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTotalItemsInCart } from '../../Cart/cartHandler';
import './Navbar.css';
import logo from '../../../assets/images/dosa.jpg';

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  const renderNavbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo.." className="logo" />
          <label style={{ fontSize: '14px', fontWeight: 'bold' }}>
            pari<span className="logo-label">sC</span>af&egrave;
          </label>
        </Link>
        <Link className="nav-link d-block d-lg-none" to="/cart">
          <FontAwesomeIcon icon={faCartPlus} style={{ color: 'orangered' }} />{' '}
          {getTotalItemsInCart() > 0 && (
            <span>
              <sup>
                <small className="cart-badge">{getTotalItemsInCart()}</small>
              </sup>
            </span>
          )}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            background: 'var(--primary-green)',
            color: 'var(--primary-white)',
          }}
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
                      padding: '5px 30px',
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
                Cart &nbsp;
                <FontAwesomeIcon
                  icon={faCartPlus}
                  style={{ color: 'orangered' }}
                />{' '}
                {getTotalItemsInCart() > 0 && (
                  <span>
                    <sup>
                      <small className="cart-badge">
                        {getTotalItemsInCart()}
                      </small>
                    </sup>
                  </span>
                )}
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
          <form className="d-flex">
            <div className="input-group">
              <input
                className="form-control "
                type="text"
                placeholder="Search ..."
                aria-label="Search"
                size="40"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-success"
                  style={{
                    background: 'var(--primary-green)',
                    color: 'var(--primary-white)',
                  }}
                  type="submit"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );

  return <>{renderNavbar()}</>;
};

export default Navbar;
