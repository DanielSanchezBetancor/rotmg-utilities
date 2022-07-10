//Constantes
const project = 'file:///C:/Users/Baifo/OneDrive/Escritorio/Programacion/proyectos/rotmg/templates/';
const html = '<tr>' +
'<td>{{name}}</td>' +
'<td>{{quantity}}</td>' +
'<td><button class="btn btn-primary" id="substract-one" value="{{id}}">-</button></td>' +
'</tr>';
//Auxiliar functions
eventButtons = function() {
    var substractButtons = document.querySelectorAll('#substract-one');
    for(var i = 0;i < substractButtons.length;i++) {
        substractButtons[i].addEventListener('click', substractOne);
    }
}
fillTable = function() {
    var quests = getQuests();
    var table = '';
    for (var i = 0;i<quests.length;i++) {
        var dungeon = getQuestData(quests[i][0].id);
        table += html.replace('{{name}}', dungeon.name);
        table = table.replace('{{quantity}}', quests[i][0].quantity);
        table = table.replace('{{id}}', dungeon.id);
    }
    document.getElementById('quest-table').getElementsByTagName('tbody')[0].innerHTML = table;
}
//Callbacks
redirect = function(event) {
    var targetId = event.target.id;
    while ((divider = targetId.search('\-')) !== -1) {
        var substring = targetId.substring(divider+1, divider+2);
        var substringParsed = substring.toUpperCase();
        targetId = targetId.replace('\-' + substring, substringParsed);
    }
    document.location.href = project + targetId + ".html";
}
cleanQuests = function() {
    localStorage.removeItem('quests');
    fillTable();
}
substractOne = function(event) {
    //Take data
    var parsedQuests = getParsedQuests();
    //Loop data and search for the id
    for (var i = 0;i < parsedQuests.length;i++) {
        if (parsedQuests[i][0].id === event.target.getAttribute('value')) {
            console.log("Encontrado");
        }
    }

}
//Events
document.getElementById('añadir-maz').addEventListener('click', redirect);
document.getElementById('clean-quests').addEventListener('click', cleanQuests);

//Executions
fillTable();
eventButtons();