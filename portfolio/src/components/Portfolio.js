// src/components/Portfolio.js
import React from 'react';
import './Portfolio.css'; // Importamos los estilos de Portfolio
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <a href="moviereviews/index.html">
            <h3>Movie Review Hub</h3>
          </a>
          <Link to="/movie-review" >Movie Review Hub</Link>
          <p>Plataforma para reseñas de películas y videojuegos con SEO optimizado.</p>
        </div>
        <div className="portfolio-item">
          <h3>AgroMarket App</h3>
          <p>Aplicación móvil para gestionar venta y stock de productos agrónomos.</p>
        </div>
        <div className="portfolio-item">
          <h3>DevConnect</h3>
          <p>Red social para desarrolladores con foros y publicaciones.</p>
        </div>
        <div className="portfolio-item">
          <h3>TaskFlow</h3>
          <p>Gestor de tareas con funcionalidades de calendario y recordatorios.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
