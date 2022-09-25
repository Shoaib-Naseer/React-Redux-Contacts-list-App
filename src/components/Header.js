import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark text-light">
        <div className="container">
          <a className="navbar-brand">React Redux Contact App</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
