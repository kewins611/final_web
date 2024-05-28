function enviarSolicitud() {
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var tipoSolicitud = document.getElementById("tipoSolicitud").value;
    var consulta = document.getElementById("consulta").value;

    // Crear el cuerpo del mensaje
    var mensaje = "Nombre: " + nombre + "\n" +
                  "Apellido: " + apellido + "\n" +
                  "Correo Electrónico: " + correo + "\n" +
                  "Tipo de Solicitud: " + tipoSolicitud + "\n" +
                  "Consulta: " + consulta;

    // Enviar por correo
    window.location.href = "mailto:autorepuestogofasa@gmail.com?subject=Solicitud&body=" + encodeURIComponent(mensaje);

    // Enviar por WhatsApp (abre WhatsApp Web)
    var telefonoWhatsapp = "+18295292991"; // Reemplaza con tu número de WhatsApp
    var mensajeWhatsapp = encodeURIComponent("Hola, soy " + nombre + " " + apellido + ". Mi consulta es: " + consulta);

    // Crear un enlace de WhatsApp con el mensaje prefabricado
    var whatsappLink = "https://web.whatsapp.com/" + telefonoWhatsapp + "?text=" + mensajeWhatsapp;

    // Abrir una nueva ventana o pestaña con el enlace de WhatsApp
    window.open(whatsappLink, '_blank');

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("tipoSolicitud").value = "";
    document.getElementById("consulta").value = "";
}
