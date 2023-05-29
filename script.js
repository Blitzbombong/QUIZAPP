let questions = [
    {
        "question": "Wie viele Tasten hat ein Klavier?",
        "answer_1": "74 Tasten",
        "answer_2": "86 Tasten",
        "answer_3": "82 Tasten",
        "answer_4": "88 Tasten",
        "right_answer": 4,
    },
    {
        "question": "Aus welchem Land kommt die Band AC/DC?",
        "answer_1": "Aus Neuseeland",
        "answer_2": "Aus den USA",
        "answer_3": "Aus Australien",
        "answer_4": "Aus England",
        "right_answer": 3,
    },
    {
        "question": "Was ist ein Onsen?",
        "answer_1": "Eine argentinische Rinderart",
        "answer_2": "Ein Schweißwerkzeug",
        "answer_3": "Ein japanisches Heilbad",
        "answer_4": "Ein mongolisches Nationalgericht",
        "right_answer": 3,
    },
    {
        "question": "Mit was beshcäftigt sich ein Ornithologe?",
        "answer_1": "Vogelarten",
        "answer_2": "Insekten",
        "answer_3": "Fossilien",
        "answer_4": "Korallen",
        "right_answer": 1,
    },
    {
        "question": "Welches Tier trägt den Namen Rotfedern?",
        "answer_1": "Ein Vogel",
        "answer_2": "Eine Raupe",
        "answer_3": "Ein Fisch",
        "answer_4": "Ein Schmetterling",
        "right_answer": 3,
    },
    {
        "question": "Was ist ein Sonett?",
        "answer_1": "Eine Form des Gedichts",
        "answer_2": "Eine Art Waffe",
        "answer_3": "Ein Messgerät",
        "answer_4": "Ein Bauteil einer Radaranlage",
        "right_answer": 1,
    },
    {
        "question": "Das flächenmäßig kleinste Bundesland heißt?",
        "answer_1": "Berlin",
        "answer_2": "Bremen",
        "answer_3": "Saarland",
        "answer_4": "Hamburg",
        "right_answer": 2,
    },
    {
        "question": "Welcher Pilz ist einer der giftigsten der Welt?",
        "answer_1": "Der Fliegenpilz",
        "answer_2": "Der Grüne Knollenblätterpilz",
        "answer_3": "Der Gemeie Kartoffelbovist",
        "answer_4": "Der Satansröhrling",
        "right_answer": 2,
    },
    {
        "question": "Welche Insel gehört nicht zu den balearischen Inseln?",
        "answer_1": "Ibiza",
        "answer_2": "Formentera",
        "answer_3": "Cabrera",
        "answer_4": "Gran Canaria",
        "right_answer": 4,
    },
    {
        "question": "Mit welcher Tiergruppe sind die Dinosaurier am engsten verwandt? ",
        "answer_1": "Eidechsen",
        "answer_2": "Vögeln",
        "answer_3": "Alligatoren",
        "answer_4": "Affen",
        "right_answer": 2,
    }
];

let currentQuestinon = 0;


function init(){
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion()
}


function showQuestion(){
    let question = questions[currentQuestinon];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    
}