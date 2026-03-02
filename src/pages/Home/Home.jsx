import React from 'react'
import Nav from '../../components/Nav'
import './Home.css'

function Home() {

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
              <h3 className="tituloRedes">Official SNS Accounts</h3>
              <div className="iconosRedes">
                <a href="#" className="iconoRed"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" className="iconoRed iconoInstagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="iconoRed iconoYoutube"><i className="fa-brands fa-youtube"></i></a>
                <a href="#" className="iconoRed iconoDiscord"><i className="fa-brands fa-discord"></i></a>
                <a href="#" className="iconoRed iconoFacebook"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>

            <div className="panelVideo">
              <h3 className="tituloRedes"> Shuumatsu no Valkyrie captiulo 112</h3>
              <div className="contenedorVideo">
                <iframe
                  className="videoYoutube"
                  src="https://www.youtube.com/embed/RUk5WbFnVME"
                  title="Trailer Manga"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <h2 className="tituloSeccion tituloStock">Mangas en Stock</h2>

        <div className="contenedorHorizontal">

          <div className="tarjetaMini">
            <div className="tarjetaMiniImagen">
              <span className="etiquetaTiempo">Últimas 24 horas</span>
              <img className="imagenMini" src="https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/bdfe8acc-cad0-4b2b-ae11-b0e484e6d03c/d_360_620/portada_blue-lock-n-11_muneyuki-kaneshiro_202212010941.webp" alt="Manga 1" />
            </div>
            <h4 className="tarjetaMiniTitulo">Blue Lock</h4>
            <p className="tarjetaMiniEstadistica">
              <span className="tarjetaMiniRanking">#040</span> 2.1K
            </p>
          </div>

          <div className="tarjetaMini">
            <div className="tarjetaMiniImagen">
              <span className="etiquetaTiempo">Últimas 24 horas</span>
              <img className="imagenMini" src="https://scontent.fsyq2-1.fna.fbcdn.net/v/t39.30808-6/485995795_1152234296695406_6478149593833439652_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=o19p9DHrljsQ7kNvwEcqiMV&_nc_oc=AdntO7OAOoGo2FgRsrlGTZhiOIxSWS-8bDmbetQDVRVDIEoTCxF7irZ5bEeGEvIc2zM&_nc_zt=23&_nc_ht=scontent.fsyq2-1.fna&_nc_gid=wr0Nc3BkY-1im8wYx05Cew&_nc_ss=8&oh=00_AfypzAQmOICi8t0MttV9BFVQYIzQ_HeSHyJlZJeqBATXGw&oe=69ABC333" alt="Manga 2" />
            </div>
            <h4 className="tarjetaMiniTitulo">Hanako-kun</h4>
            <p className="tarjetaMiniEstadistica">
              <span className="tarjetaMiniRanking">#070</span> 2.8K
            </p>
          </div>

          <div className="tarjetaMini">
            <div className="tarjetaMiniImagen">
              <span className="etiquetaTiempo">Últimas 24 horas</span>
              <img className="imagenMini" src="https://elmundodeshiro.home.blog/wp-content/uploads/2020/12/elbpzz2xeai-sxw.jpg" alt="Manga 3" />
            </div>
            <h4 className="tarjetaMiniTitulo">Dr. Stone</h4>
            <p className="tarjetaMiniEstadistica">
              <span className="tarjetaMiniRanking">#336</span> 15.7K
            </p>
          </div>

          <div className="tarjetaMini">
            <div className="tarjetaMiniImagen">
              <span className="etiquetaTiempo">Últimas 24 horas</span>
              <img className="imagenMini" src="https://f4.bcbits.com/img/a0124648702_10.jpg" alt="Manga 4" />
            </div>
            <h4 className="tarjetaMiniTitulo">Chainsaw Man</h4>
            <p className="tarjetaMiniEstadistica">
              <span className="tarjetaMiniRanking">#1175</span> 141.6K
            </p>
          </div>

          <div className="tarjetaMini">
            <div className="tarjetaMiniImagen">
              <span className="etiquetaTiempo">Últimas 24 horas</span>
              <img className="imagenMini" src="https://www.normaeditorial.com/upload/media/albumes/0001/19/thumb_18612_albumes_medium.jpeg" alt="Manga 5" />
            </div>
            <h4 className="tarjetaMiniTitulo">Jujutsu Kaisen</h4>
            <p className="tarjetaMiniEstadistica">
              <span className="tarjetaMiniRanking">#024</span> 167.2K
            </p>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Home
