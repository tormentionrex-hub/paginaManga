import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUsuarios } from '../../services/ServicesLogin'
import Swal from 'sweetalert2'
import './Login.css'

function Login() {
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")
    const navigate = useNavigate()

    async function manejarLogin(eventoFormulario) {
        eventoFormulario.preventDefault();

        if (!correo || !contrasena) {
            Swal.fire({
                title: 'Campos Vacíos',
                text: 'Por favor llena ambos campos para continuar.',
                icon: 'warning',
                background: '#181717',
                color: '#fff',
                confirmButtonColor: '#e63550'
            });
            return;
        }

        const listaUsuarios = await getUsuarios();

        if (listaUsuarios) {
            const usuarioValido = listaUsuarios.find(
                user => user.correo === correo && user.contrasena === contrasena
            );

            if (usuarioValido) {
                // aqui el usuario se guarda en el localStorage
                localStorage.setItem("sesionMangaVerse", JSON.stringify(usuarioValido));
                // con window dispatch la maquina detecta el cambio
                window.dispatchEvent(new Event("eventoCambioSesion"));

                Swal.fire({
                    title: '¡Bienvenido!',
                    text: 'Inicio de sesión exitoso.',
                    icon: 'success',
                    background: '#181717',
                    color: '#fff',
                    confirmButtonColor: '#e63550',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    navigate('/'); // Redirige al inicio después del login
                });
            } else {
                Swal.fire({
                    title: 'Usuario no encontrado',
                    text: 'El correo o contraseña son incorrectos. ¿Aún no tienes cuenta?',
                    icon: 'error',
                    background: '#181717',
                    color: '#fff',
                    showCancelButton: true,
                    confirmButtonText: 'Registrarse',
                    cancelButtonText: 'Intentar de nuevo',
                    confirmButtonColor: '#e63550',
                    cancelButtonColor: '#333'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/register');
                    }
                });
            }

        } else {
            Swal.fire({
                title: 'Error de Red',
                text: 'No se pudo conectar con la base de datos.',
                icon: 'error',
                background: '#181717',
                color: '#fff',
                confirmButtonColor: '#e63550'
            });
        }
    }

    return (
        <div className="paginaLogin">
            <Link to="/" className="loginBotonVolver">
                <i className="fa-solid fa-arrow-left"></i> Volver
            </Link>
            <div className="loginContenedor">

                <div className="loginImagenColumna">
                    <img
                        src="https://i.pinimg.com/1200x/67/0e/0e/670e0e5a136229fed220240de80c306e.jpg"
                        alt="Manga Login"
                        className="loginImagen"
                    />
                    <div className="loginImagenOverlay">
                        <h2 className="loginMangaTitulo">MangaVerse</h2>
                        <p className="loginMangaTexto">Bienvenido de vuelta, ingresa para continuar leyendo tus mangas favoritos.</p>
                    </div>
                </div>

                <div className="loginFormularioColumna">
                    <div className="loginCabecera">
                        <h1 className="loginTitulo">Iniciar Sesión</h1>
                        <p className="loginSubtitulo">¿Nuevo aquí? <Link to="/register" className="loginEnlace">Crea una cuenta</Link></p>
                    </div>

                    <form className="loginFormulario" onSubmit={manejarLogin}>
                        <div className="loginGrupoInput">
                            <label className="loginLabel">Correo Electrónico</label>
                            <input
                                type="email"
                                className="loginInput"
                                placeholder="tu@correo.com"
                                value={correo}
                                onChange={(ingresoValor) => setCorreo(ingresoValor.target.value)}
                            />
                        </div>

                        <div className="loginGrupoInput">
                            <label className="loginLabel">Contraseña</label>
                            <input
                                type="password"
                                className="loginInput"
                                placeholder="••••••••"
                                value={contrasena}
                                onChange={(ingresoValor) => setContrasena(ingresoValor.target.value)}
                            />
                        </div>

                        <div className="loginOpciones">
                            <label className="loginCheckboxLabel">
                                <input type="checkbox" className="loginCheckbox" />
                                <span>Recordarme</span>
                            </label>
                            <a href="#" className="loginEnlace loginOlvidaste">¿Olvidaste tu contraseña?</a>
                        </div>

                        <button type="submit" className="loginBoton">ENTRAR</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login
