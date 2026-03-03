import React, { useState, useEffect } from 'react'
import Nav from '../../components/Nav'
import './Home.css'

function Home() {
  const [mangasStock, setMangasStock] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/mangas_stock")
      .then(res => res.json())
      .then(data => setMangasStock(data))
      .catch(err => console.error("Error al obtener mangas en stock:", err));
  }, []);

  return (
    <div className="paginaHome">
      <Nav />

      <section className="seccionVendidos">
        <h2 className="tituloSeccion">Mangas más Vendidos</h2>

        <div className="filaVendidos">
          <div className="contenedorTarjetas">

            <div className="tarjetaArticulo">
              <div className="tarjetaInfo">
                <span className="etiquetaTiempo">Últimas 24 horas</span>
                <h3 className="tarjetaTitulo">Fullmetal Alchemist</h3>
                <p className="tarjetaAutor">Hiromu Arakawa</p>
                <p className="tarjetaEstadistica">
                  <span className="tarjetaRanking">#1</span> +200 millones de copias
                </p>
              </div>
              <div className="tarjetaImagen">
                <img className="imagenArticulo" src="https://i.pinimg.com/1200x/81/da/dd/81dadd51b330d559f53870e67cce7803.jpg" alt="Manga" />
              </div>
            </div>

            <div className="tarjetaArticulo">
              <div className="tarjetaInfo">
                <span className="etiquetaTiempo">Últimas 24 horas</span>
                <h3 className="tarjetaTitulo">Tokyo Ghoul</h3>
                <p className="tarjetaAutor">Sui Ishida</p>
                <p className="tarjetaEstadistica">
                  <span className="tarjetaRanking">#2</span> +170 millones de copias
                </p>
              </div>
              <div className="tarjetaImagen">
                <img className="imagenArticulo" src="https://i.pinimg.com/1200x/09/77/a1/0977a19be0b5125172c9d55a0cd5db01.jpg" alt="Libro" />
              </div>
            </div>

            <div className="tarjetaArticulo">
              <div className="tarjetaInfo">
                <span className="etiquetaTiempo">Últimas 24 horas</span>
                <h3 className="tarjetaTitulo">Jojos Bizarre Adventure</h3>
                <p className="tarjetaAutor">Hirohiko Araki</p>
                <p className="tarjetaEstadistica">
                  <span className="tarjetaRanking">#3</span> +120 millones de copias
                </p>
              </div>
              <div className="tarjetaImagen">
                <img className="imagenArticulo" src="https://i.pinimg.com/1200x/33/f5/e3/33f5e3434cfc7f362e0a6d6633a0ec21.jpg" alt="Comic" />
              </div>
            </div>

          </div>

          <div className="columnaDerecha">
            <div className="panelRedes">
              <h3 className="tituloRedes">Nuestras Redes Sociales Oficiales</h3>
              <div className="iconosRedes">
                <a href="#" className="iconoRed"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" className="iconoRed iconoInstagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="iconoRed iconoYoutube"><i className="fa-brands fa-youtube"></i></a>
                <a href="#" className="iconoRed iconoDiscord"><i className="fa-brands fa-discord"></i></a>
                <a href="#" className="iconoRed iconoFacebook"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>

            <div className="panelVideo">
              <h3 className="tituloRedes"> Shuumatsu no Valkyrie captiulo 115</h3>
              <div className="contenedorVideo">
                <iframe
                  className="videoYoutube"
                  src="https://www.youtube.com/embed/f4cTtt4hoi4"
                  title="Shuumatsu no Valkyrie captiulo 115"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="panelVideo">
              <h3 className="tituloRedes"> Tenkaichi 8vos Captiulo 57: Final del 8vo combate</h3>
              <div className="contenedorVideo">
                <iframe
                  className="videoYoutube"
                  src="https://www.youtube.com/embed/6sNU9TWc5YA"
                  title="Tenkaichi 8vos Captiulo 57: Final del 8vo combate"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>


        <div className="layoutMangaPlus">
          <div className="columnaContenido">
            <h2 className="tituloSeccion tituloStock">Mangas en Stock</h2>
            <div className="contenedorHorizontal">
              {mangasStock.filter(m => m.categoria === 'Mini 1').map(manga => (
                <div className="tarjetaMini" key={manga.id}>
                  <div className="tarjetaMiniImagen">
                    <span className="etiquetaTiempo">Últimas 24 horas</span>
                    <img className="imagenMini" src={manga.imagen} alt={manga.titulo} />
                  </div>
                  <h4 className="tarjetaMiniTitulo">{manga.titulo}</h4>
                  <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">{manga.ranking}</span> {manga.vistas}</p>
                </div>
              ))}
            </div>

            {/* Carrusel Dinámico */}
            <div className="carruselPromoCSS">
              {mangasStock.filter(m => m.categoria === 'Carrusel').length > 0 && (
                <div className="slideCSS animacionSlide1">
                  {mangasStock.filter(m => m.categoria === 'Carrusel').slice(0, 2).map((manga) => (
                    <div className="tarjetaPromo" key={manga.id}>
                      <img src={manga.imagen} alt={manga.titulo} />
                      <div className="overlayPromo">
                        <h3>{manga.titulo}</h3>
                        <p>{manga.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {mangasStock.filter(m => m.categoria === 'Carrusel').length > 2 && (
                <div className="slideCSS animacionSlide2">
                  {mangasStock.filter(m => m.categoria === 'Carrusel').slice(2, 4).map((manga) => (
                    <div className="tarjetaPromo" key={manga.id}>
                      <img src={manga.imagen} alt={manga.titulo} />
                      <div className="overlayPromo">
                        <h3>{manga.titulo}</h3>
                        <p>{manga.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="contenedorHorizontal">
              {mangasStock.filter(m => m.categoria === 'Mini 2').map(manga => (
                <div className="tarjetaMini" key={manga.id}>
                  <div className="tarjetaMiniImagen">
                    <img className="imagenMini" src={manga.imagen} alt={manga.titulo} />
                  </div>
                  <h4 className="tarjetaMiniTitulo">{manga.titulo}</h4>
                  <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">{manga.ranking}</span> {manga.vistas}</p>
                </div>
              ))}
            </div>

            {/* Categorías Dinámicas Adicionales ("Mini 3", "Mini 4", etc o nombres personalizados) */}
            {Array.from(new Set(mangasStock.map(m => m.categoria)))
              .filter(c => !['Mini 1', 'Mini 2', 'Carrusel', 'Popular'].includes(c))
              .map(categoria => (
                <div className="contenedorHorizontal" key={categoria}>
                  {mangasStock.filter(m => m.categoria === categoria).map(manga => (
                    <div className="tarjetaMini" key={manga.id}>
                      <div className="tarjetaMiniImagen">
                        <img className="imagenMini" src={manga.imagen} alt={manga.titulo} />
                      </div>
                      <h4 className="tarjetaMiniTitulo">{manga.titulo}</h4>
                      <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">{manga.ranking}</span> {manga.vistas}</p>
                    </div>
                  ))}
                </div>
              ))
            }
          </div>

          <div className="columnaPopular">
            <div className="popularEncabezado">
              <h2 className="popularTitulo">Popular</h2>
              <a href="#" className="popularVerTodo">Ver Todo &gt;</a>
            </div>
            <div className="popularLista">
              {mangasStock.filter(m => m.categoria === 'Popular').map((manga, i) => (
                <div className="popularItem" key={manga.id}>
                  <span className="popularNumero">{i + 1}</span>
                  <img className="popularImagen" src={manga.imagen} alt={manga.titulo} />
                  <div className="popularInfo">
                    <h4 className="popularNombre">{manga.titulo}</h4>
                    <p className="popularAutor">{manga.autor}</p>
                    <p className="popularVistas"><i className="fa-regular fa-eye"></i> {manga.vistas}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
