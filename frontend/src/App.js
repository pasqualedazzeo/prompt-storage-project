import React from 'react';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;