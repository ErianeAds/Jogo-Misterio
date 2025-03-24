import { stages } from './stages.js';

let currentStageIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;

const startButton = document.getElementById('start-button');
const narrativeContainer = document.getElementById('narrative-container');
const questionContainer = document.getElementById('question-container');
const choicesContainer = document.getElementById('choices-container');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');


function updateUI() {
    scoreDisplay.textContent = `Pontuação: ${score}`;
    livesDisplay.textContent = `Vidas: ${lives}`;
}

function setNarrative(text) {
    narrativeContainer.textContent = text;
}

function displayQuestion() {
    const stage = stages[currentStageIndex];
    const questionData = stage.questions[currentQuestionIndex];

    // Atualiza a narrativa e a pergunta
    setNarrative(stage.narrative);
    document.getElementById('question').textContent = questionData.question;
    choicesContainer.innerHTML = '';

    // Exibe as alternativas
    questionData.choices.forEach((choice) => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice.text;
        choiceButton.addEventListener('click', () => {
            // Verifica se a escolha é correta
            if (choice.isCorrect) {
                score += 10;
                alert("Resposta correta!");
            } else {
                lives--;
                alert("Resposta incorreta! Você perdeu uma vida.");
                if (lives <= 0) {
                    setNarrative('Você perdeu todas as vidas! Fim do jogo.');
                    questionContainer.style.display = 'none';
                    updateUI();
                    return;
                }
            }
            updateUI();
            nextQuestion();
        });
        choicesContainer.appendChild(choiceButton);
    });
}

function displayTransitionMessage(message, callback) {
    setNarrative(message);
    // Define um atraso (ex.: 3 segundos) antes de chamar a função de retorno
    setTimeout(callback, 3000);
}

function nextQuestion() {
    const stage = stages[currentStageIndex];

    if (currentQuestionIndex < stage.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else if (currentStageIndex < stages.length - 1) {
        // Mostra mensagem de transição e, após o tempo, avança para a próxima fase
        displayTransitionMessage("Você passou para a próxima fase!", () => {
            currentStageIndex++;
            currentQuestionIndex = 0;
            displayQuestion();
            getRandomBackground(); // Chama a função para mudar o plano de fundo ao mudar de fase
        });
    } else {
        setNarrative('Você concluiu o caso! Fim do jogo.');
        questionContainer.style.display = 'none';
    }
}

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    displayQuestion();
});

function fetchClue() {
    fetch("https://api.quotable.io/random?tags=inspirational")
        .then(response => response.json())
        .then(data => {
            // Exibe a dica na narrativa ou em um alert
            setNarrative(`Dica: "${data.content}" - ${data.author}`);
        })
        .catch(error => {
            console.error("Erro ao buscar dica:", error);
            setNarrative("Desculpe, não foi possível obter uma dica no momento.");
        });
}

const clueButton = document.getElementById('clue-button');
clueButton.addEventListener('click', fetchClue);

