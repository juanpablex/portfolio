// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import Home from './components/Home';

// function App() {
//   return (
//     <div className="App">
//      <Header/>
//      <Home/>
//     </div>
//   );
// }

// export default App;


// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import MovieReview from './moviereviews/MovieReview';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/movie-review" element={<MovieReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

