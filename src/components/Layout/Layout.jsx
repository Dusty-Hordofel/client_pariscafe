import React from 'react';
import Footer from './Footer/Footer';
import './Layout.css';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';

const Layout = () => {
  const renderLayout = () => (
    <div className="layout">
      <Navbar />

      <Main />
      <Footer />
    </div>
  );

  return <>{renderLayout()}</>;
};

export default Layout;
