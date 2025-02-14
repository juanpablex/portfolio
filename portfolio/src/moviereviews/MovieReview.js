// src/components/MovieReview.js
import React from 'react';
import './style.css'; // Asumir que tienes un archivo CSS similar
import deadpool from '../moviereviews/dummy/deadpool.jpg'
import beetlejuice from '../moviereviews/dummy/beetlejuice.jpg'
import venom from '../moviereviews/dummy/venom.jpg'
import badboys from '../moviereviews/dummy/badboys.jpg'
import insideout from '../moviereviews/dummy/intensamente.jpg'
import johnwick from '../moviereviews/dummy/johnwick.jpg'
import fast from '../moviereviews/dummy/fast.jpg'
import guardians from '../moviereviews/dummy/guardianes.jpg'
import dune from '../moviereviews/dummy/dune.jpg'
import logo from '../moviereviews/images/logo.png';

const MovieReview = () => {
  return (
    <body>
    <div id="site-content">
      <header className="site-header">
        <div className="container">
          <a href="/" id="branding">
            <img src={logo} alt="Logo" className="logo" />
            <div className="logo-copy">
              <h1 className="site-title">Company Name</h1>
              <small className="site-description">Tagline goes here</small>
            </div>
          </a>

          <div className="main-navigation">
            <button type="button" className="menu-toggle">
              <i className="fa fa-bars"></i>
            </button>
            <ul className="menu">
              <li className="menu-item current-menu-item"><a href="/">Home</a></li>
              <li className="menu-item"><a href="/about">About</a></li>
              <li className="menu-item"><a href="/review">Movie reviews</a></li>
              <li className="menu-item"><a href="/joinus">Join us</a></li>
              <li className="menu-item"><a href="/contact">Contact</a></li>
            </ul>

            <form action="#" className="search-form">
              <input type="text" placeholder="Search..." />
              <button><i className="fa fa-search"></i></button>
            </form>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="page">
            <div className="row">
              <div className="col-md-9">
                <div className="slider">
                  <ul className="slides">
                    <li><a href="#"><img src={deadpool} alt="Deadpool" /></a></li>
                    <li><a href="#"><img src={beetlejuice} alt="Beetlejuice" /></a></li>
                    <li><a href="#"><img src={venom} alt="Venom" /></a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="row">
                  <div className="col-sm-6 col-md-12">
                    <div className="latest-movie">
                      <a href="#"><img src={badboys} alt="Bad Boys" /></a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-12">
                    <div className="latest-movie">
                      <a href="#"><img src={insideout} alt="Inside Out" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="latest-movie">
                  <a href="#"><img src={johnwick} alt="Dune" /></a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="latest-movie">
                  <a href="#"><img src={fast} alt="Guardians" /></a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="latest-movie">
                  <a href="#"><img src={guardians} alt="Fast & Furious" /></a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="latest-movie">
                  <a href="#"><img src={dune} alt="John Wick" /></a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <h2 className="section-title">Deadpool Premiere</h2>
                <p>Hilarious and chaotic duo delivering nonstop fun, action, and fourth-wall-breaking madness.</p>
                <ul className="movie-schedule">
                  <li><div className="date">16/12</div><h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2></li>
                  {/* More list items */}
                </ul>
              </div>
              <div className="col-md-4">
                <h2 className="section-title">Badboys Premiere</h2>
                <p>High-energy chases, comedic chemistry, and thrilling action—Bad Boys still got it.</p>
                <ul className="movie-schedule">
                  <li><div className="date">16/12</div><h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2></li>
                  {/* More list items */}
                </ul>
              </div>
              <div className="col-md-4">
                <h2 className="section-title">John Wick 4 Premiere</h2>
                <p>Relentless action, stunning choreography, and an intense story that keeps you hooked.</p>
                <ul className="movie-schedule">
                  <li><div className="date">16/12</div><h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2></li>
                  {/* More list items */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            {/* Footer content */}
          </div>
        </div>
      </footer>
    </div>
    <script src="js/jquery-1.11.1.min.js"></script>
		<script src="js/plugins.js"></script>
		<script src="js/app.js"></script>
    </body>
  );
};

export default MovieReview;
