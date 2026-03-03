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
              <div className="tarjetaMini">
                <div className="tarjetaMiniImagen">
                  <span className="etiquetaTiempo">Últimas 24 horas</span>
                  <img className="imagenMini" src="https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/bdfe8acc-cad0-4b2b-ae11-b0e484e6d03c/d_360_620/portada_blue-lock-n-11_muneyuki-kaneshiro_202212010941.webp" alt="Manga 1" />
                </div>
                <h4 className="tarjetaMiniTitulo">Blue Lock</h4>
                <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">#040</span> 2.1K</p>
              </div>
              <div className="tarjetaMini">
                <div className="tarjetaMiniImagen">
                  <span className="etiquetaTiempo">Últimas 24 horas</span>
                  <img className="imagenMini" src="https://scontent.fsyq2-1.fna.fbcdn.net/v/t39.30808-6/485995795_1152234296695406_6478149593833439652_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=o19p9DHrljsQ7kNvwEcqiMV&_nc_oc=AdntO7OAOoGo2FgRsrlGTZhiOIxSWS-8bDmbetQDVRVDIEoTCxF7irZ5bEeGEvIc2zM&_nc_zt=23&_nc_ht=scontent.fsyq2-1.fna&_nc_gid=wr0Nc3BkY-1im8wYx05Cew&_nc_ss=8&oh=00_AfypzAQmOICi8t0MttV9BFVQYIzQ_HeSHyJlZJeqBATXGw&oe=69ABC333" alt="Manga 2" />
                </div>
                <h4 className="tarjetaMiniTitulo">Hanako-kun</h4>
                <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">#070</span> 2.8K</p>
              </div>
              <div className="tarjetaMini">
                <div className="tarjetaMiniImagen">
                  <span className="etiquetaTiempo">Últimas 24 horas</span>
                  <img className="imagenMini" src="https://elmundodeshiro.home.blog/wp-content/uploads/2020/12/elbpzz2xeai-sxw.jpg" alt="Manga 3" />
                </div>
                <h4 className="tarjetaMiniTitulo">Dr. Stone</h4>
                <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">#336</span> 15.7K</p>
              </div>
              <div className="tarjetaMini">
                <div className="tarjetaMiniImagen">
                  <span className="etiquetaTiempo">Últimas 24 horas</span>
                  <img className="imagenMini" src="https://f4.bcbits.com/img/a0124648702_10.jpg" alt="Manga 4" />
                </div>
                <h4 className="tarjetaMiniTitulo">Chainsaw Man</h4>
                <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">#1175</span> 141.6K</p>
              </div>
              <div className="tarjetaMini">
                <div className="tarjetaMiniImagen">
                  <span className="etiquetaTiempo">Últimas 24 horas</span>
                  <img className="imagenMini" src="https://www.normaeditorial.com/upload/media/albumes/0001/19/thumb_18612_albumes_medium.jpeg" alt="Manga 5" />
                </div>
                <h4 className="tarjetaMiniTitulo">Jujutsu Kaisen</h4>
                <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">#024</span> 167.2K</p>
              </div>
            </div>

            {/* aqui esta el carrusel promocional mande las animaciones y diseño al css porque no logre darle una funcion correcta XD*/}
            <div className="carruselPromoCSS">
              <div className="slideCSS animacionSlide1">
                <div className="tarjetaPromo"><img src="https://i.pinimg.com/originals/a3/ea/3b/a3ea3bac86a7881c3ad9ef06a4982aee.jpg" /><div className="overlayPromo"><h3>Sailor Moon</h3><p>¡Una chica lucha por salvar a su mundo!</p></div></div>
                <div className="tarjetaPromo"><img src="https://i.pinimg.com/736x/d9/31/a1/d931a1e146ba3f523033b8fef4554dd3.jpg" /><div className="overlayPromo"><h3>Mazinger Z</h3><p>Un robot gigante lucha por salvar a la humanidad.</p></div></div>
              </div>
              <div className="slideCSS animacionSlide2">
                <div className="tarjetaPromo"><img src="https://ramenparados.com/wp-content/uploads/2023/11/tenkaichi-destacado.jpg" /><div className="overlayPromo"><h3>Tenkaichi</h3><p>Los mejores luchadores de la historia se enfrentan en un torneo para hacerse con Japon.</p></div></div>
                <div className="tarjetaPromo"><img src="https://i.pinimg.com/1200x/ca/65/00/ca65002426a333c027082a32ae4142a5.jpg" /><div className="overlayPromo"><h3>Vagabond</h3><p>La historia de Musashi Miyamoto, el mejor espadachín de Japón.</p></div></div>
              </div>
            </div>

            <div className="contenedorHorizontal">
              <div className="tarjetaMini">
                <div className="tarjetaMiniImagen">
                  <img className="imagenMini" src="https://preview.redd.it/thoughts-on-naoki-urasawas-monster-manga-anime-v0-uvlskkc5y8jc1.png?width=640&crop=smart&auto=webp&s=fd7f6a61e8084e32b6f4cfbb7b9c0dabcb209882" alt="Monster" />
                </div>
                <h4 className="tarjetaMiniTitulo">Monster</h4>
                <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">#001</span> 500K</p>
              </div>
              <div className="tarjetaMini">
                <div className="tarjetaMiniImagen">
                  <img className="imagenMini" src="https://howlongtobeat.com/games/89623_BLACKSOULS.jpg" alt="Black Souls" />
                </div>
                <h4 className="tarjetaMiniTitulo">Black Souls</h4>
                <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">#005</span> 320K</p>
              </div>
              <div className="tarjetaMini">
                <div className="tarjetaMiniImagen">
                  <img className="imagenMini" src="https://i5.walmartimages.com/seo/Yoshiyuki-Sadamoto-Neon-Genesis-Evangelion-Book-4-3-in-1-Edition-Paperback_8ecf7a6a-e8c6-4d59-84ce-941b47094c01.65e255965c94d57f8f61ab2bb15cc33c.jpeg" alt="Neon Genesis Evangelion" />
                </div>
                <h4 className="tarjetaMiniTitulo">Neon Genesis Evangelion</h4>
                <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">#003</span> 450K</p>
              </div>
              <div className="tarjetaMini">
                <div className="tarjetaMiniImagen">
                  <img className="imagenMini" src="https://www.ivrea.com.ar/wp-content/uploads/2020/11/deathnote01.jpg" alt="Death Note" />
                </div>
                <h4 className="tarjetaMiniTitulo">Death Note</h4>
                <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">#012</span> 180K</p>
              </div>
              <div className="tarjetaMini">
                <div className="tarjetaMiniImagen">
                  <img className="imagenMini" src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1662778816i/62347228.jpg" alt="Re:Zero" />
                </div>
                <h4 className="tarjetaMiniTitulo">Re:Zero</h4>
                <p className="tarjetaMiniEstadistica"><span className="tarjetaMiniRanking">#022</span> 120K</p>
              </div>
            </div>
          </div>

          <div className="columnaPopular">
            <div className="popularEncabezado">
              <h2 className="popularTitulo">Popular</h2>
              <a href="#" className="popularVerTodo">Ver Todo &gt;</a>
            </div>
            <div className="popularLista">
              <div className="popularItem">
                <span className="popularNumero">1</span>
                <img className="popularImagen" src="https://images.penguinrandomhouse.com/cover/9798888776353" alt="Mushishi" />
                <div className="popularInfo">
                  <h4 className="popularNombre">Mushishi</h4>
                  <p className="popularAutor">Yuki Urushibara</p>
                  <p className="popularVistas"><i className="fa-regular fa-eye"></i> 375 720</p>
                </div>
              </div>
              <div className="popularItem">
                <span className="popularNumero">2</span>
                <img className="popularImagen" src="https://prodimage.images-bn.com/pimages/9781632364975_p0_v2_s1200x630.jpg" alt="Land of the Lustrous" />
                <div className="popularInfo">
                  <h4 className="popularNombre">Land of the Lustrous </h4>
                  <p className="popularAutor">Haruko Ichikawa</p>
                  <p className="popularVistas"><i className="fa-regular fa-eye"></i> 350 150</p>
                </div>
              </div>
              <div className="popularItem">
                <span className="popularNumero">3</span>
                <img className="popularImagen" src="https://m.media-amazon.com/images/I/71pI5sI9NjL._AC_UF1000,1000_QL80_.jpg" alt="Vinland Saga" />
                <div className="popularInfo">
                  <h4 className="popularNombre">Vinland Saga</h4>
                  <p className="popularAutor">Makoto Yukimura</p>
                  <p className="popularVistas"><i className="fa-regular fa-eye"></i> 287 457</p>
                </div>
              </div>
              <div className="popularItem">
                <span className="popularNumero">4</span>
                <img className="popularImagen" src="https://images.penguinrandomhouse.com/cover/9781942993773" alt="Blame!" />
                <div className="popularInfo">
                  <h4 className="popularNombre">Blame!</h4>
                  <p className="popularAutor">Tsutomu Nihei</p>
                  <p className="popularVistas"><i className="fa-regular fa-eye"></i> 239 787</p>
                </div>
              </div>
              <div className="popularItem">
                <span className="popularNumero">5</span>
                <img className="popularImagen" src="https://m.media-amazon.com/images/I/91axwTfNV-L._AC_UF1000,1000_QL80_.jpg" alt="Ajin" />
                <div className="popularInfo">
                  <h4 className="popularNombre">Ajin</h4>
                  <p className="popularAutor">Gamon Sakurai</p>
                  <p className="popularVistas"><i className="fa-regular fa-eye"></i> 191 124</p>
                </div>
              </div>
              <div className="popularItem">
                <span className="popularNumero">6</span>
                <img className="popularImagen" src="https://m.media-amazon.com/images/I/917IJDfk36L._AC_UF1000,1000_QL80_.jpg" alt="Oyasumi Punpun" />
                <div className="popularInfo">
                  <h4 className="popularNombre">Oyasumi Punpun</h4>
                  <p className="popularAutor">Inio Asano</p>
                  <p className="popularVistas"><i className="fa-regular fa-eye"></i> 133 498</p>
                </div>
              </div>
              <div className="popularItem">
                <span className="popularNumero">7</span>
                <img className="popularImagen" src="https://preview.redd.it/gachiakuta-volume-11-cover-v0-yse18wbz4z3d1.jpeg?width=640&crop=smart&auto=webp&s=760f9e98915cd839d21cf51a0e887deda5f85d01" alt="Gachiakuta" />
                <div className="popularInfo">
                  <h4 className="popularNombre">Gachiakuta</h4>
                  <p className="popularAutor">Kei Urana</p>
                  <p className="popularVistas"><i className="fa-regular fa-eye"></i> 123 120</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
