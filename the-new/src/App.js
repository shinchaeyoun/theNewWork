/* eslint-disable */
// import './App.css';
import React, { useState, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { colors, fonts, colorTheme, monoTheme } from './styles/theme.js';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
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

    .SrOnly {
      position: absolute;
      left: -9999px;
    }
  }
`;

const Wrap = styled.div`
  width: 1000px;
  margin: 0 auto;

  @media ${props => props.theme.media.desktop} {

  }
  @media ${props => props.theme.media.tablet} {
    width: 100%;
  }
  @media ${props => props.theme.media.mobile} {
  }
`

export const AppContext = createContext();

function App() {
  const [isColorMode, setIsColorMode] = useState(false);


  const toggleColorMode = () => {
    setIsColorMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isColorMode ? colorTheme : monoTheme}>
     
      <AppContext.Provider value={{ isColorMode, toggleColorMode }}>
          <GlobalStyle toggleColorMode/>
          <Wrap>
            <Header />

            {/* {isDesktop && <p style={{ background: "red" }}>Desktop</p>}
            {isTablet && <p style={{ background: "blue" }}>Tablet</p>}
            {isMobile && <p style={{ background: "green" }}>Mobile</p>} */}
      
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/introduce" element={ <IntroducePage /> } />
              <Route path="/like" element={ <LikePage /> } />
              <Route path="/career" element={ <CareerPage /> } />
              <Route path="/portfolio" element={ <PortfolioPage /> } />
              <Route path="/contact" element={ <ContactPage /> } />
            </Routes>

            <Footer/>
          </Wrap>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
