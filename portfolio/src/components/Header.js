// import React from 'react';


// const Header = () => {
//     return (
//         <header className="header">
//             <a href="#" className="logo">
//                 {/* <i className="bx bx-menu"></i> Icono de hamburguesa */}
//                 Juan Pablo.
//             </a>
//             <nav className="navbar">
//                 <a href="#" className="active">Home</a>
//                 <a href="#">About</a>
//                 <a href="#">Services</a>
//                 <a href="portafolios.html">Portafolio</a>
//                 <a href="#">Contact</a>
//             </nav>
//         </header>
//     );
// }

// export default Header;


// src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom'; // Importamos Link

// const Header = () => {
//   return (
//     <header className="header">
//       {/* Logo con enlace a la página principal */}
//       <Link to="/" className="logo">Juan Pablo.</Link>

//       <nav className="navbar">
//         {/* Enlace a la página de inicio */}
//         <Link to="/">Home</Link>

//         {/* Enlace a la sección About */}
//         <Link to="#">About</Link>

//         {/* Enlace a la sección Services */}
//         <Link to="#">Services</Link>

//         {/* Enlace a la página del Portafolio */}
//         <Link to="/portfolio" className="active">Portafolio</Link>

//         {/* Enlace a la sección Contact */}
//         <Link to="#">Contact</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Cambiar Link por NavLink
const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo">Juan Pablo.</NavLink> {/* Logo, sin clase activa */}

      <nav className="navbar">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => (isActive ? 'active' : '')} // Añadir 'active' cuando la ruta es '/'
        >
          Home
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? 'active' : '')} // 'active' si estamos en About
        >
          About
        </NavLink>

        <NavLink 
          to="/services" 
          className={({ isActive }) => (isActive ? 'active' : '')} // 'active' si estamos en Services
        >
          Services
        </NavLink>

        <NavLink 
          to="/portfolio" 
          className={({ isActive }) => (isActive ? 'active' : '')} // 'active' si estamos en Portfolio
        >
          Portafolio
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => (isActive ? 'active' : '')} // 'active' si estamos en Contact
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

