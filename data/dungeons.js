/**
 * Esto deberia ser un JSON pero no tengo ninguna intencion de que esto corra en un Web Server
 * Access to fetch at 'file:///C:/Users/Baifo/OneDrive/Escritorio/Programacion/proyectos/rotmg/data/dungeons.json' 
 * from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: 
 * http, data, chrome, chrome-extension, chrome-untrusted, https.
 */
var dungeons = {
        "dungeons": [
            {
                "id": "pirate_cave",
                "name": "Pirate Cave",
                "image": "https://i.imgur.com/OqzVQuc.png",
                "difficulty": "1"
            },
            {
                "id": "cursed_library",
                "name": "Cursed Library",
                "image": "https://i.imgur.com/9nQ7nSz.gif",
                "difficulty": "3.5"
            },
            {
                "id": "toxic_sewers",
                "name": "Toxic Sewers",
                "image": "https://i.imgur.com/4Iv5apz.png",
                "difficulty": "3.5"
            }
        ]
}
getQuests = function() {
    var quests = JSON.parse(localStorage.getItem('quests'));
    if (quests === null) {
        quests = [];
    }
    return quests;
}
getQuestData = function(idQuest) {
    var arr = dungeons.dungeons;
    for (var i = 0;i < arr.length;i++) {
        if (arr[i].id === idQuest) {
            return arr[i];
        }
    }
    return false;
}