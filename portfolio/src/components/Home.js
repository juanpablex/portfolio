import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <h1>Hi, I'm Juan Pablo</h1>
                <h1>Coca Robles</h1>
                <h3>Full-stack Developer</h3>
                <p>
                    I specialize in .net core web API for backend, 
                    and React, React Native for frontend.
                </p>
                <div className="btn-box">
                    <a href="#">Hire me</a>
                    <a href="#">Let's Talk</a>
                </div>
            </div>
            <div className="home-sci">
                <a href="https://www.linkedin.com/in/juanpablex/" target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a href="#">
                    <i className='bx bxl-github'></i>
                </a>
                <a href="">
                    <i className='bx bxl-gmail'></i>
                </a>
            </div>
            <span className="home-imgHover"></span>
        </section>
    );
}

export default Home;
