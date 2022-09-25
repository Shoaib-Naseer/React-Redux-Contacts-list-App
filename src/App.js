import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import EditContact from './components/EditContact';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-contact" element={<AddPost />} />
        <Route exact path="/edit/:id" element={<EditContact />} />
      </Routes>
    </>
  );
};

export default App;
