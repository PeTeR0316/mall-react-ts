import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router';

import MainPage from './pages/main';
import ProductInfo from './pages/product';

const AppStyle = styled.div`
  margin: 0 auto;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: #000000;
  }

  ul {
    list-style: none;
    padding-left: 0px;
  }
`;

const App = () => {
  return (
    <AppStyle className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/*" element={<ProductInfo />} />
      </Routes>
    </AppStyle>
  );
}

export default App;
