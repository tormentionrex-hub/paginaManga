import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {

  return (
    <nav className="barraNavegacion">
      <div className="navIzquierda">
        <div className="contenedorLogo">
          <img className="iconoLogo" src="../src/images/LogoPagi.png" alt="MangaVerse Logo" />
        </div>

        <ul className="listaEnlaces">
          <li>
            <Link to="/" className="enlaceNav enlaceActivo">
              <span className="iconoEnlace"></span>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/mangas" className="enlaceNav">
              <span className="iconoEnlace"></span>
              Mangas
            </Link>
          </li>
          <li>
            <Link to="/login" className="enlaceNav">
              <span className="iconoEnlace"></span>
              Iniciar Sesion
            </Link>
          </li>
        </ul>
      </div>

      <div className="navDerecha">
        <input type="text" className="barraBusqueda" placeholder="Buscar manga, autor..." />
        <div className="contenedorIdioma">
          <span className="etiquetaIdioma">Idioma</span>
          <select className="selectorIdioma">
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
