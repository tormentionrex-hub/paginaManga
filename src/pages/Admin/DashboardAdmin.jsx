import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    getUsuarios, postUsuario, patchUsuario, deleteUsuario,
    getMangas, postManga, patchManga, deleteManga
} from '../../services/ServicesDashboardAdmin';
import './DashboardAdmin.css';

const DashboardAdmin = () => {
    const [pestañaActual, setPestañaActual] = useState("usuarios");

    //Estado Usuarios
    const [usuarios, setUsuarios] = useState([]);
    const [idEdicionUsuario, setIdEdicionUsuario] = useState("");
    const [formularioUsuario, setFormularioUsuario] = useState({
        nombre: '',
        correo: '',
        contrasena: '',
        rol: 'Usuario'
    });

    //Estado Mangas
    const [mangas, setMangas] = useState([]);
    const [idEdicionManga, setIdEdicionManga] = useState("");
    const [formularioManga, setFormularioManga] = useState({
        titulo: '',
        imagen: '',
        categoria: 'Mini 1', // Default category
        nuevaCategoria: '',
        ranking: '',
        vistas: '',
        descripcion: '',
        autor: ''
    });

    //inicializar el useEffect para que se cargun los datos al iniciar la página
    useEffect(() => {
        cargarUsuarios();
        cargarMangas();
    }, []);

    const cargarUsuarios = async () => {
        const data = await getUsuarios();
        if (data) setUsuarios(data);
    };

    const cargarMangas = async () => {
        const data = await getMangas();
        if (data) setMangas(data);
    };

    //esto es para que se actualice el formulario
    const handleChangeUsuario = (e) => {
        setFormularioUsuario({
            ...formularioUsuario,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitUsuario = async (e) => {
        e.preventDefault();
        if (idEdicionUsuario) {
            await patchUsuario(formularioUsuario, idEdicionUsuario);
        } else {
            const nuevoId = Math.random().toString(16).slice(2, 6);
            await postUsuario({ id: nuevoId, ...formularioUsuario });
        }
        setFormularioUsuario({ nombre: '', correo: '', contrasena: '', rol: 'Usuario' });
        setIdEdicionUsuario("");
        cargarUsuarios();
    };

    const handleEditUsuario = (usuario) => {
        setIdEdicionUsuario(usuario.id);
        setFormularioUsuario({
            nombre: usuario.nombre,
            correo: usuario.correo,
            contrasena: usuario.contrasena,
            rol: usuario.rol || 'Usuario'
        });
    };

    const handleDeleteUsuario = async (id) => {
        const confirmar = window.confirm("¿Estás seguro de que quieres eliminar a este usuario?");
        if (confirmar) {
            await deleteUsuario(id);
            cargarUsuarios();
        }
    };

    const cancelarEdicionUsuario = () => {
        setIdEdicionUsuario("");
        setFormularioUsuario({ nombre: '', correo: '', contrasena: '', rol: 'Usuario' });
    };

    //esto es para que se actualice el formulario de los mangas
    const handleChangeManga = (e) => {
        setFormularioManga({
            ...formularioManga,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitManga = async (e) => {
        e.preventDefault();

        // Handling New Category Logic
        let dataToSave = { ...formularioManga };
        if (dataToSave.categoria === "Nueva Categoria") {
            dataToSave.categoria = dataToSave.nuevaCategoria;
        }
        delete dataToSave.nuevaCategoria; // Cleanup unneeded field

        if (idEdicionManga) {
            await patchManga(dataToSave, idEdicionManga);
        } else {
            const nuevoId = Math.random().toString(16).slice(2, 6);
            await postManga({ id: nuevoId, ...dataToSave });
        }
        setFormularioManga({ titulo: '', imagen: '', categoria: 'Mini 1', nuevaCategoria: '', ranking: '', vistas: '', descripcion: '', autor: '' });
        setIdEdicionManga("");
        cargarMangas();
    };

    const handleEditManga = (manga) => {
        setIdEdicionManga(manga.id);
        const categoriasExistentes = ["Mini 1", "Mini 2", "Carrusel", "Popular", ...mangas.map(m => m.categoria)];

        let cat = manga.categoria || 'Mini 1';
        let nuevaCat = "";

        // Si la categoria no esta en los defaults ni en la db (deberiá estar, pero por si acaso)
        // se maneja nativamente por los options.

        setFormularioManga({
            titulo: manga.titulo || '',
            imagen: manga.imagen || '',
            categoria: cat,
            nuevaCategoria: nuevaCat,
            ranking: manga.ranking || '',
            vistas: manga.vistas || '',
            descripcion: manga.descripcion || '',
            autor: manga.autor || ''
        });
    };

    const handleDeleteManga = async (id) => {
        const confirmar = window.confirm("¿Estás seguro de que quieres eliminar este manga de stock?");
        if (confirmar) {
            await deleteManga(id);
            cargarMangas();
        }
    };

    const cancelarEdicionManga = () => {
        setIdEdicionManga("");
        setFormularioManga({ titulo: '', imagen: '', categoria: 'Mini 1', nuevaCategoria: '', ranking: '', vistas: '', descripcion: '', autor: '' });
    };

    //el html osea rendirizado
    return (
        <div className="paginaAdmin">
            <Link to="/" className="adminBotonVolver">
                <i className="fa-solid fa-arrow-left"></i> Volver al Inicio
            </Link>

            <div className="adminTabsContenedor">
                <div className="adminTabsMenu">
                    <button
                        className={`adminTabBtn ${pestañaActual === 'usuarios' ? 'active' : ''}`}
                        onClick={() => setPestañaActual('usuarios')}
                    >
                        Usuarios Totales
                    </button>
                    <button
                        className={`adminTabBtn ${pestañaActual === 'mangas' ? 'active' : ''}`}
                        onClick={() => setPestañaActual('mangas')}
                    >
                        Mangas en Stock
                    </button>
                </div>

                <div className="adminContenedor">

                    {pestañaActual === 'usuarios' && (
                        <>
                            {/* FORMULARIO USUARIOS */}
                            <div className="adminFormularioColumna">
                                <div className="adminCabecera">
                                    <h1 className="adminTitulo">Usuarios</h1>
                                    <p className="adminSubtitulo">{idEdicionUsuario ? 'Editando usuario existente.' : 'Registrar nuevo usuario.'}</p>
                                </div>
                                <form onSubmit={handleSubmitUsuario} className="adminFormulario">
                                    <div className="adminGrupoInput">
                                        <label className="adminLabel">Nombre de Usuario</label>
                                        <input type="text" name="nombre" className="adminInput" placeholder="Nombre completo" value={formularioUsuario.nombre} onChange={handleChangeUsuario} required />
                                    </div>
                                    <div className="adminGrupoInput">
                                        <label className="adminLabel">Correo Electrónico</label>
                                        <input type="email" name="correo" className="adminInput" placeholder="tu@correo.com" value={formularioUsuario.correo} onChange={handleChangeUsuario} required />
                                    </div>
                                    <div className="adminGrupoInput">
                                        <label className="adminLabel">Contraseña</label>
                                        <input type="text" name="contrasena" className="adminInput" placeholder="••••••••" value={formularioUsuario.contrasena} onChange={handleChangeUsuario} required />
                                    </div>
                                    <div className="adminGrupoInput">
                                        <label className="adminLabel">Rol de Usuario</label>
                                        <select name="rol" className="adminSelect" value={formularioUsuario.rol} onChange={handleChangeUsuario}>
                                            <option value="Usuario">Usuario</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                    </div>
                                    <div className="adminOpciones">
                                        <button type="submit" className="adminBoton">{idEdicionUsuario ? 'ACTUALIZAR' : 'GUARDAR'}</button>
                                        {idEdicionUsuario && <button type="button" className="adminBotonSecundario" onClick={cancelarEdicionUsuario}>CANCELAR</button>}
                                    </div>
                                </form>
                            </div>

                            {/* LISTA USUARIOS */}
                            <div className="adminListaColumna">
                                <h2 className="adminListaTitulo">Usuarios Registrados</h2>
                                <table className="adminTabla">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Correo</th>
                                            <th>Rol</th>
                                            <th style={{ textAlign: "center" }}>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usuarios.map(user => (
                                            <tr key={user.id}>
                                                <td>{user.nombre}</td>
                                                <td>{user.correo}</td>
                                                <td>{user.rol || 'Usuario'}</td>
                                                <td>
                                                    <div className="adminAccionesTabla">
                                                        <button className="btn-accion btn-editar" data-tooltip="Editar" onClick={() => handleEditUsuario(user)}>
                                                            <i className="fa-solid fa-pen"></i>
                                                        </button>
                                                        <button className="btn-accion btn-eliminar" data-tooltip="Eliminar" onClick={() => handleDeleteUsuario(user.id)}>
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {usuarios.length === 0 && <tr><td colSpan="4" style={{ textAlign: "center", padding: "2rem" }}>No hay usuarios en el sistema.</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                    {pestañaActual === 'mangas' && (
                        <>
                            {/* FORMULARIO MANGAS */}
                            <div className="adminFormularioColumna">
                                <div className="adminCabecera">
                                    <h1 className="adminTitulo">Mangas en Stock</h1>
                                    <p className="adminSubtitulo">{idEdicionManga ? 'Editando manga en stock.' : 'Añadir nuevo manga a la lista.'}</p>
                                </div>
                                <form onSubmit={handleSubmitManga} className="adminFormulario">
                                    <div className="adminGrupoInput">
                                        <label className="adminLabel">Título del Manga</label>
                                        <input type="text" name="titulo" className="adminInput" placeholder="Ej: Blue Lock" value={formularioManga.titulo} onChange={handleChangeManga} required />
                                    </div>
                                    <div className="adminGrupoInput">
                                        <label className="adminLabel">Categoría de Sección</label>
                                        <select name="categoria" className="adminSelect" value={formularioManga.categoria} onChange={handleChangeManga} required>
                                            <option value="Mini 1">Stock (Minis 1era Fila)</option>
                                            <option value="Mini 2">Stock (Minis 2da Fila)</option>
                                            <option value="Carrusel">Carrusel Promocional</option>
                                            <option value="Popular">Sección Popular (Vertical)</option>

                                            {/* Mapear categorías dinámicas ya existentes que no sean las básicas */}
                                            {Array.from(new Set(mangas.map(m => m.categoria)))
                                                .filter(c => !["Mini 1", "Mini 2", "Carrusel", "Popular"].includes(c))
                                                .map(c => <option key={c} value={c}>{c}</option>)
                                            }

                                            <option value="Nueva Categoria">Añadir nueva categoría...</option>
                                        </select>
                                    </div>

                                    {formularioManga.categoria === "Nueva Categoria" && (
                                        <div className="adminGrupoInput">
                                            <label className="adminLabel">Nombre de la Nueva Categoría</label>
                                            <input type="text" name="nuevaCategoria" className="adminInput" placeholder="Ej: Especiales" value={formularioManga.nuevaCategoria} onChange={handleChangeManga} required />
                                        </div>
                                    )}

                                    <div className="adminGrupoInput">
                                        <label className="adminLabel">URL de la Imagen</label>
                                        <input type="url" name="imagen" className="adminInput" placeholder="https://..." value={formularioManga.imagen} onChange={handleChangeManga} required />
                                    </div>

                                    {(formularioManga.categoria !== "Carrusel" && formularioManga.categoria !== "Popular") && (
                                        <>
                                            <div className="adminGrupoInput">
                                                <label className="adminLabel">Ranking</label>
                                                <input type="text" name="ranking" className="adminInput" placeholder="Ej: #040" value={formularioManga.ranking} onChange={handleChangeManga} required />
                                            </div>
                                            <div className="adminGrupoInput">
                                                <label className="adminLabel">Vistas / Interacciones</label>
                                                <input type="text" name="vistas" className="adminInput" placeholder="Ej: 2.1K" value={formularioManga.vistas} onChange={handleChangeManga} required />
                                            </div>
                                        </>
                                    )}

                                    {formularioManga.categoria === "Carrusel" && (
                                        <div className="adminGrupoInput">
                                            <label className="adminLabel">Descripción Corta</label>
                                            <input type="text" name="descripcion" className="adminInput" placeholder="Ej: ¡Una chica lucha por salvar a su mundo!" value={formularioManga.descripcion} onChange={handleChangeManga} required />
                                        </div>
                                    )}

                                    {formularioManga.categoria === "Popular" && (
                                        <>
                                            <div className="adminGrupoInput">
                                                <label className="adminLabel">Autor</label>
                                                <input type="text" name="autor" className="adminInput" placeholder="Ej: Yuki Urushibara" value={formularioManga.autor} onChange={handleChangeManga} required />
                                            </div>
                                            <div className="adminGrupoInput">
                                                <label className="adminLabel">Total de Vistas</label>
                                                <input type="text" name="vistas" className="adminInput" placeholder="Ej: 375 720" value={formularioManga.vistas} onChange={handleChangeManga} required />
                                            </div>
                                        </>
                                    )}

                                    <div className="adminOpciones">
                                        <button type="submit" className="adminBoton">{idEdicionManga ? 'ACTUALIZAR' : 'GUARDAR'}</button>
                                        {idEdicionManga && <button type="button" className="adminBotonSecundario" onClick={cancelarEdicionManga}>CANCELAR</button>}
                                    </div>
                                </form>
                            </div>

                            {/* LISTA MANGAS */}
                            <div className="adminListaColumna">
                                <h2 className="adminListaTitulo">Inventario Actual</h2>
                                <table className="adminTabla">
                                    <thead>
                                        <tr>
                                            <th>Portada</th>
                                            <th>Título</th>
                                            <th>Categoría</th>
                                            <th style={{ textAlign: "center" }}>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mangas.map(manga => (
                                            <tr key={manga.id}>
                                                <td><img src={manga.imagen} alt={manga.titulo} style={{ width: "40px", height: "55px", objectFit: "cover", borderRadius: "4px" }} /></td>
                                                <td>{manga.titulo}</td>
                                                <td>
                                                    <span style={{
                                                        background: manga.categoria === 'Carrusel' ? 'rgba(230,53,80,0.2)' : 'rgba(255,255,255,0.05)',
                                                        color: manga.categoria === 'Carrusel' ? '#ffabc0' : '#fff',
                                                        padding: '4px 8px', borderRadius: '4px', fontSize: '0.85rem'
                                                    }}>
                                                        {manga.categoria}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="adminAccionesTabla">
                                                        <button className="btn-accion btn-editar" data-tooltip="Editar" onClick={() => handleEditManga(manga)}>
                                                            <i className="fa-solid fa-pen"></i>
                                                        </button>
                                                        <button className="btn-accion btn-eliminar" data-tooltip="Eliminar" onClick={() => handleDeleteManga(manga.id)}>
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {mangas.length === 0 && <tr><td colSpan="4" style={{ textAlign: "center", padding: "2rem" }}>No hay mangas en stock.</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;
