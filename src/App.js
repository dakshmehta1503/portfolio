// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Portfolio">
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="App-footer">
        &copy; {new Date().getFullYear} Your Name
      </footer>
    </div>
  );
}

export default App;
