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

let correctQuestions = 0;
let currentQuestinon = 0;
let audio_success = new Audio('sound/win.mp3');
let audio_falt = new Audio('sound/wrong.mp3');


function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    
    showQuestion()
}


function showQuestion(){

    if(gameIsOver()){
        showEndScreen();
    } else{
        updateToNextQuestion();
        updateProgressBar();
    }
}


function gameIsOver() {
    return currentQuestinon >= questions.length
}


function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-card').style = 'display: none';
    document.getElementById('finished-questions').innerHTML = questions.length;
    document.getElementById('correct-questions').innerHTML = correctQuestions;
    document.getElementById('header-image').src = 'img/pokal.jpg';
}


function updateToNextQuestion() {
let question = questions[currentQuestinon];

document.getElementById('next-level').innerHTML = currentQuestinon + 1;
document.getElementById('questiontext').innerHTML = question['question'];
document.getElementById('answer_1').innerHTML = question['answer_1'];
document.getElementById('answer_2').innerHTML = question['answer_2'];
document.getElementById('answer_3').innerHTML = question['answer_3'];
document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function updateProgressBar(){
    let percent = (currentQuestinon + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}


function answer(selection) {
    let question = questions[currentQuestinon]; /* hier befindet sich die aktuele Frage */
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(rigthAnswearSelected(selectedQuestionNumber)) {
        console.log('Richtige Antwort!!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audio_success.play();
        correctQuestions++;
    } else {
        console.log('Falsche Antwort!!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audio_falt.play();
    }
    document.getElementById('next-button').disabled = false;
}


function rigthAnswearSelected(selectedQuestionNumber) {
    return selectedQuestionNumber == questions['right_answer'];
}


function nextQuestion() {
    currentQuestinon++; // geht in die nechste Frage
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartGame() {
    document.getElementById('header-image').src = 'img/quiz.jpg';
    document.getElementById('question-card').style = '';  // questionBody wieder einzeigen
    document.getElementById('end-screen').style = 'display: none';  // Endscrinn ausblenden

    correctQuestions = 0;
    currentQuestinon = 0;
    init();
}

