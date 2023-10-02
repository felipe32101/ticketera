const numerosSeleccionados = [];

document.getElementById("aceptar").addEventListener('click', function(){
    const numeroEscritorio = document.getElementById("input").value;

    if (numeroEscritorio.trim() === "" || parseInt(numeroEscritorio) === 0) {
        alert("Por favor, ingrese un número de escritorio válido.");
    } else if (numerosSeleccionados.includes(numeroEscritorio)) {
        alert("Este número de escritorio ya ha sido seleccionado. Por favor, elija otro número.");
    } else {
        numerosSeleccionados.push(numeroEscritorio);
        let nuevaPest = window.open(`aceptar.html?numero=${numeroEscritorio}`);
    }
    
});

