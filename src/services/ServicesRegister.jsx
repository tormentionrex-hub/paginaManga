//crud de registro

export async function postRegistro(usuarioNuevo) {
    try {
        const respuesta = await fetch("http://localhost:3001/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuarioNuevo)
        })
        return await respuesta.json();
    } catch (error) {
        console.error("Error al registrar el usuario", error);
    }
}
