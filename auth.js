/*
   DARKBOX — auth.js
   Gestión simple de usuarios y sesión en localStorage.
*/

var Auth = (function () {
    const KEY_USUARIOS = 'darkbox_usuarios';
    const KEY_SESION = 'darkbox_usuario_actual';

    function leerUsuarios() {
        const datos = localStorage.getItem(KEY_USUARIOS);
        return datos ? JSON.parse(datos) : [];
    }

    function guardarUsuarios(usuarios) {
        localStorage.setItem(KEY_USUARIOS, JSON.stringify(usuarios));
    }

    function obtenerUsuario(email) {
        if (!email) return null;
        const usuarios = leerUsuarios();
        return usuarios.find(function (usuario) {
            return usuario.email.toLowerCase() === email.toLowerCase();
        }) || null;
    }

    function crearUsuario(usuario) {
        if (!usuario || !usuario.email || !usuario.password) {
            return null;
        }

        var existente = obtenerUsuario(usuario.email);
        if (existente) {
            return null;
        }

        var usuarios = leerUsuarios();
        usuarios.push({
            nombre: usuario.nombre || '',
            email: usuario.email.toLowerCase(),
            password: usuario.password
        });
        guardarUsuarios(usuarios);
        return usuarios[usuarios.length - 1];
    }

    function validarCredenciales(email, password) {
        var usuario = obtenerUsuario(email);
        if (!usuario) return null;
        return usuario.password === password ? usuario : null;
    }

    function guardarSesion(usuario) {
        if (!usuario || !usuario.email) return;
        localStorage.setItem(KEY_SESION, JSON.stringify({
            nombre: usuario.nombre || '',
            email: usuario.email.toLowerCase(),
            inicio: Date.now()
        }));
    }

    function obtenerUsuarioActual() {
        const datos = localStorage.getItem(KEY_SESION);
        return datos ? JSON.parse(datos) : null;
    }

    function cerrarSesion() {
        localStorage.removeItem(KEY_SESION);
    }

    return {
        leerUsuarios: leerUsuarios,
        crearUsuario: crearUsuario,
        validarCredenciales: validarCredenciales,
        guardarSesion: guardarSesion,
        obtenerUsuarioActual: obtenerUsuarioActual,
        cerrarSesion: cerrarSesion
    };
})();
