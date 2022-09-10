import React from 'react';
import Footer from './Footer/Footer';
import './Layout.css';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';

const Layout = ({ title, children, backdrop, background }) => {
  //children & title... from <LandingPage/>
  const renderLayout = () => (
    <div className="layout">
      <Navbar />

      <Main title={title} background={background} backdrop={backdrop}>
        {children}
      </Main>
      <Footer />
    </div>
  );
  console.log(children);
  return <>{renderLayout()}</>;
};

export default Layout;
