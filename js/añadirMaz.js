//Consts
const tbodyRow = "<tr>" +
"<td><img src={{icon}} /></td>" +
"<td>{{name}}</td>" +
"<td>{{difficulty}}</td>" +
"<td><input type='text' placeholder='Cantidad' id='{{id}}'/></td>" +
"<td><button class='btn btn-success' id='añadir-mision' target='{{id}}'>Añadir misión</button></td>" +
"</tr>";
var table = "";
//Callbacks
añadirMision = function(event) {
    var quests = JSON.parse(localStorage.getItem('quests'));
    var target = event.target.getAttribute('target');
    //First time
    if (quests === null) {
        quests = [];
    }
    var value = document.getElementById(target).value;
    document.getElementById(target).value = '';
    if (value == '') {
        console.log("vacio");
        return;
    } 
    quests.push([{
        'id': target,
        'quantity': value
    }]);
    localStorage.setItem('quests', JSON.stringify(quests));
}
goBack = function() {
    history.back();
}
//Executable
for (var i=0;i<dungeons['dungeons'].length;i++) {
    table += tbodyRow.replace('{{icon}}', dungeons['dungeons'][i].image);
    table = table.replaceAll('{{id}}', dungeons['dungeons'][i].id);
    table = table.replaceAll('{{name}}', dungeons['dungeons'][i].name);
    table = table.replace('{{difficulty}}', dungeons['dungeons'][i].difficulty);
}

document.getElementById('tablaMisiones').getElementsByTagName('tbody')[0].innerHTML = table;
var buttons = document.querySelectorAll('#añadir-mision');
for(var i = 0;i<buttons.length;i++) {
    buttons[i].addEventListener('click', añadirMision);
}
document.getElementById('go-back').addEventListener('click', goBack);