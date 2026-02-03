document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Galería Auto-Scroll Infinita
    const galeria = document.getElementById('galeriaAuto');
    let isPaused = false;

    setInterval(() => {
        if (!isPaused && galeria) {
            const maxScroll = galeria.scrollWidth - galeria.clientWidth;
            if (galeria.scrollLeft >= maxScroll - 1) {
                galeria.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                galeria.scrollBy({ left: 320, behavior: 'smooth' });
            }
        }
    }, 3000);

    // Pausar si el usuario toca la galería
    galeria.addEventListener('pointerenter', () => isPaused = true);
    galeria.addEventListener('pointerleave', () => isPaused = false);

    // 2. Envío de Formulario a WhatsApp
    const formulario = document.querySelector('#reservaForm');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Captura de datos
    const propiedad = document.getElementById('propiedad').value;
    const metros = document.getElementById('metros').value;
    const plaga = document.getElementById('plaga').value;
    const fecha = document.getElementById('fecha').value;
    const telefono = "5493445454896";

    // Creamos el mensaje con saltos de línea (\n) y emojis
    const mensaje = `Hola No Bicho! \Quisiera un presupuesto:\n\n` +
                    ` Tipo: ${propiedad}\n` +
                    ` M2: ${metros}\n` +
                    ` Plaga: ${plaga}\n` +
                    ` Fecha: ${fecha}`;

    // LA CLAVE: Usar encodeURIComponent para limpiar el texto
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${5493445454896}?text=${mensajeCodificado}`, '_blank');
});
    // 3. Fecha mínima = Hoy
    const inputFecha = document.getElementById('fecha');
    if(inputFecha) {
        inputFecha.min = new Date().toISOString().split("T")[0];
    }
});