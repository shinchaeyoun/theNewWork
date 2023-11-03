/* eslint-disable */
import './App.css';
import React, { useState, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { colors, fonts, colorTheme, monoTheme } from './styles/theme.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import MainPage from './routes/MainPage.js';
import IntroducePage from './routes/IntroducePage.js';
import LikePage from './routes/LikePage.js';
import CareerPage from './routes/CareerPage.js';
import PortfolioPage from './routes/PortfolioPage.js';
import ContactPage from './routes/ContactPage.js';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${(props) => props.theme.bgi});
    color: ${(props) => props.theme.textColor};

    .red {
      color: ${({ theme }) => theme.pointColor}
    }
    .chomsky {
      font-family: ${({ theme }) => theme.fonts.chomsky};
    }
  }
`;

export const AppContext = createContext();

function App() {
  const [isColorMode, setIsColorMode] = useState(false);

  const toggleColorMode = () => {
    setIsColorMode((prev) => !prev);
  };

console.log(isColorMode,'theme');

  return (
    <ThemeProvider theme={isColorMode ? colorTheme : monoTheme}>
     
      <AppContext.Provider value={{ isColorMode, toggleColorMode }}>
          <GlobalStyle toggleColorMode/>
          <div className="App">
            <Header />

            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/introduce" element={ <IntroducePage /> } />
              <Route path="/like" element={ <LikePage /> } />
              <Route path="/career" element={ <CareerPage /> } />
              <Route path="/portfolio" element={ <PortfolioPage /> } />
              <Route path="/contact" element={ <ContactPage /> } />
            </Routes>

            <Footer/>
          </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
