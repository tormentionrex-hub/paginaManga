import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles/Nav.css';

function Nav() {
  const [usuarioDato, setUsuarioDato] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const revisarSesion = () => {
      const userJSON = localStorage.getItem("sesionMangaVerse");
      setUsuarioDato(userJSON ? JSON.parse(userJSON) : null);
    };

    // Revisar inicialmente
    revisarSesion();

    // Escuchar el evento de cambio
    window.addEventListener('eventoCambioSesion', revisarSesion);

    return () => {
      window.removeEventListener('eventoCambioSesion', revisarSesion);
    };
  }, []);

  const cerrarSesion = (e) => {
    e.preventDefault();
    Swal.fire({
      title: '¿Cerrar Sesión?',
      text: '¿Estás seguro de que deseas salir de tu cuenta?',
      icon: 'question',
      background: '#181717',
      color: '#fff',
      showCancelButton: true,
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#e63550',
      cancelButtonColor: '#333'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("sesionMangaVerse");
        setUsuarioDato(null); // Actualizar estado manual y visualmente al dar click
        window.dispatchEvent(new Event("eventoCambioSesion"));
        navigate('/'); // Enviarlo al inicio
      }
    });
  };

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
          {usuarioDato ? (
            <li>
              <a href="#" onClick={cerrarSesion} className="enlaceNav enlaceCerrarSesion">
                <span className="iconoEnlace"></span>
                Cerrar sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login" className="enlaceNav">
                <span className="iconoEnlace"></span>
                Iniciar Sesion
              </Link>
            </li>
          )}
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
