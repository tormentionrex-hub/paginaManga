
// CRUD LOGIN


export async function getUsuarios() {
    try {
        const respuestaServidor = await fetch("http://localhost:3001/usuarios")
        return await respuestaServidor.json();
    } catch (error) {
        console.error("Error al obtener los usuarios", error);
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
        console.error("Error al crear el usuario", error);
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
        console.error("Error al actualizar el usuario", error);
    }
}

export async function deleteUsuario(id) {
    try {
        const respuesta = await fetch("http://localhost:3001/usuarios/" + id, {
            method: "DELETE",
        })
        return await respuesta.json();
    } catch (error) {
        console.error("Error al eliminar el usuario", error);
    }
}
