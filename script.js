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
    const form = document.getElementById('reservaForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const telefono = "5493445454896";
        const datos = {
            tipo: document.getElementById('propiedad').value,
            m2: document.getElementById('metros').value,
            plaga: document.getElementById('plaga').value,
            fecha: document.getElementById('fecha').value
        };

        const mensaje = `Hola No Bicho! ??%0AQuisiera un presupuesto:%0A%0A` +
                        `?? *Tipo:* ${datos.tipo}%0A` +
                        `?? *M2:* ${datos.m2}%0A` +
                        `?? *Plaga:* ${datos.plaga}%0A` +
                        `?? *Fecha:* ${datos.fecha}`;

        window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
    });

    // 3. Fecha mínima = Hoy
    const inputFecha = document.getElementById('fecha');
    if(inputFecha) {
        inputFecha.min = new Date().toISOString().split("T")[0];
    }
});