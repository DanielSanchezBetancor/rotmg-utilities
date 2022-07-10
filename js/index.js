//Constantes
const proyecto = 'file:///C:/Users/Baifo/OneDrive/Escritorio/Programacion/proyectos/rotmg/templates/';
//Callbacks
redireccion = function(event) {
    document.location.href = proyecto + event.target.id + ".html";
}
//Eventos
document.getElementById('misiones').addEventListener('click', redireccion);