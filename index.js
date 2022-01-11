window.onload = function () {
    
    
    
    let quien = ['Mi abuela', 'El perro', 'El gato', 'Chavez', 'Messi', 'El hijo de la amiga del mejor amigo de mi papá'];
    let hizo = [' se perdio', ' se rompio la cabeza', ' se murio', ' se tiro un peo', ' se acalambro', ' esta en coma'];
    let donde = [' en el Camp Nou', ' en la reunion', ' en la calle', ' en el Avila', ' en la cena', ' en mi casa'];
    
    
    let excuse = quien[Math.floor(Math.random()*6)] + hizo[Math.floor(Math.random()*6)] + donde[Math.floor(Math.random()*6)];
document.querySelector("#excusa").innerHTML = excuse
}
