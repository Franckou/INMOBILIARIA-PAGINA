const form = document.getElementById('property-search-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const tipoOperacion = form['tipo-operacion'].value;
    const ubicacion = form['ubicacion'].value;
    const tipoPropiedad = form['tipo-propiedad'].value;

    // Aquí puedes redireccionar a la página correspondiente según los valores seleccionados
    let url = '';

    if (tipoOperacion === 'venta') {
        url = `pagina-${tipoPropiedad}-${tipoOperacion}-${ubicacion}.html`;
    } else if (tipoOperacion === 'alquiler') {
        url = `pagina-${tipoPropiedad}-${tipoOperacion}-${ubicacion}.html`;
    }

    window.location.href = url; // Redireccionar a la URL correspondiente
});

const tipoOperacionSelect = document.getElementById('tipo-operacion');
const tipoPropiedadSelect = document.getElementById('tipo-propiedad');

tipoOperacionSelect.addEventListener('change', function() {
    if (this.value === 'alquiler') {
        tipoPropiedadSelect.querySelector('option[value="terreno"]').disabled = true;
    } else {
        tipoPropiedadSelect.querySelector('option[value="terreno"]').disabled = false;
    }
});