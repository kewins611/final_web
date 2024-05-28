document.getElementById('mostrarModalBtn').addEventListener('click', function() {
    document.getElementById('miModal').style.display = 'block';
});

document.getElementById('cerrarModal').addEventListener('click', function() {
    document.getElementById('miModal').style.display = 'none';
});

// Cerrar modal haciendo clic fuera de él
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('miModal')) {
        document.getElementById('miModal').style.display = 'none';
    }
});