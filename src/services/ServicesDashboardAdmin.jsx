export async function getUsuarios() {
    try {
        const respuestaServidor = await fetch("http://localhost:3001/usuarios")
        return await respuestaServidor.json();
    } catch (error) {
        console.error("Error al obtener los usuarios en admin", error);
    }
}

export async function postUsuario(usuario) {
    try {
        const respuesta = await fetch("http://localhost:3001/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        })
        return await respuesta.json();
    } catch (error) {
        console.error("Error al crear el usuario en admin", error);
    }
}

export async function patchUsuario(usuario, id) {
    try {
        const respuesta = await fetch("http://localhost:3001/usuarios/" + id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        })
        return await respuesta.json();
    } catch (error) {
        console.error("Error al actualizar el usuario en admin", error);
    }
}

export async function deleteUsuario(id) {
    try {
        const respuesta = await fetch("http://localhost:3001/usuarios/" + id, {
            method: "DELETE",
        })
        return await respuesta.json();
    } catch (error) {
        console.error("Error al eliminar el usuario en admin", error);
    }
}

// ==============================================
// CRUD MANGAS EN STOCK
// ==============================================

export async function getMangas() {
    try {
        const respuestaServidor = await fetch("http://localhost:3001/mangas_stock")
        return await respuestaServidor.json();
    } catch (error) {
        console.error("Error al obtener los mangas en admin", error);
    }
}

export async function postManga(manga) {
    try {
        const respuesta = await fetch("http://localhost:3001/mangas_stock", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(manga)
        })
        return await respuesta.json();
    } catch (error) {
        console.error("Error al crear el manga en admin", error);
    }
}

export async function patchManga(manga, id) {
    try {
        const respuesta = await fetch("http://localhost:3001/mangas_stock/" + id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(manga)
        })
        return await respuesta.json();
    } catch (error) {
        console.error("Error al actualizar el manga en admin", error);
    }
}

export async function deleteManga(id) {
    try {
        const respuesta = await fetch("http://localhost:3001/mangas_stock/" + id, {
            method: "DELETE",
        })
        return await respuesta.json();
    } catch (error) {
        console.error("Error al eliminar el manga en admin", error);
    }
}
