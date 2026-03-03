import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postRegistro } from '../../services/ServicesRegister'
import Swal from 'sweetalert2'
import './Register.css'

function Register() {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")
    const navigate = useNavigate()

    async function manejarRegistro(eventoFormulario) {
        eventoFormulario.preventDefault();

        if (!nombre || !correo || !contrasena) {
            Swal.fire({
                title: 'Campos Vacíos',
                text: 'Por favor llena todos los campos para registrarte.',
                icon: 'warning',
                background: '#181717',
                color: '#fff',
                confirmButtonColor: '#e63550'
            });
            return;
        }

        const usuarioNuevo = {
            nombre: nombre,
            correo: correo,
            contrasena: contrasena
        };

        // Guardar en la base de datos
        const respuesta = await postRegistro(usuarioNuevo);

        if (respuesta) {
            Swal.fire({
                title: '¡Registro Exitoso!',
                text: 'Tu cuenta ha sido creada correctamente.',
                icon: 'success',
                background: '#181717',
                color: '#fff',
                confirmButtonColor: '#e63550',
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                navigate('/login');
            });
        } else {
            Swal.fire({
                title: 'Error de Red',
                text: 'No se pudo registrar la cuenta. Intenta de nuevo.',
                icon: 'error',
                background: '#181717',
                color: '#fff',
                confirmButtonColor: '#e63550'
            });
        }
    }

    return (
        <div className="paginaRegistro">
            <Link to="/" className="registroBotonVolver">
                <i className="fa-solid fa-arrow-left"></i> Volver al Inicio
            </Link>

            <div className="registroContenedor">

                <div className="registroFormularioColumna">
                    <div className="registroCabecera">
                        <h1 className="registroTitulo">Crear Cuenta</h1>
                        <p className="registroSubtitulo">¿Ya tienes cuenta? <Link to="/login" className="registroEnlace">Inicia Sesión</Link></p>
                    </div>

                    <form className="registroFormulario" onSubmit={manejarRegistro}>
                        <div className="registroGrupoInput">
                            <label className="registroLabel">Nombre de Usuario</label>
                            <input
                                type="text"
                                className="registroInput"
                                placeholder="Escribe tu nombre"
                                value={nombre}
                                onChange={(ingresoValor) => setNombre(ingresoValor.target.value)}
                            />
                        </div>

                        <div className="registroGrupoInput">
                            <label className="registroLabel">Correo Electrónico</label>
                            <input
                                type="email"
                                className="registroInput"
                                placeholder="tu@correo.com"
                                value={correo}
                                onChange={(ingresoValor) => setCorreo(ingresoValor.target.value)}
                            />
                        </div>

                        <div className="registroGrupoInput">
                            <label className="registroLabel">Contraseña</label>
                            <input
                                type="password"
                                className="registroInput"
                                placeholder="••••••••"
                                value={contrasena}
                                onChange={(ingresoValor) => setContrasena(ingresoValor.target.value)}
                            />
                        </div>

                        <button type="submit" className="registroBoton">REGISTRARSE</button>
                    </form>
                </div>

                <div className="registroImagenColumna">
                    <img
                        src="https://i.pinimg.com/736x/3f/9d/a8/3f9da8afea3216c2794b707df305e72a.jpg"
                        alt="Manga Register"
                        className="registroImagen"
                    />
                    <div className="registroImagenOverlay">
                        <h2 className="registroMangaTitulo">Lee tus mangas favoritos</h2>
                        <p className="registroMangaTexto">Crea tu cuenta y empieza a leer tus mangas favoritos cuando quieras.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register
