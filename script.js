const quizData = [
    {
        // Define a dictionary type data with key-value pair
        question: "when did Issac Newton discovered gravity?",
        options: ["2000", "1653", "1974", "1666"],
        answer: "1666"
    },

    {
        // Define a dictionary type data with key-value pair
        question: "what is albert einstein most famous of?",
        options: ["Theory of the universe", "E=mc(squared)", "Law of motion", "Theory of atoms"],
        answer: "E=mc(squared)"
    },

    {
        // Define a dictionary type data with key-value pair
        question: "O^2+C=?",
        options: ["CO2", "HO2", "NaCl", "U"],
        answer: "CO2"
    },

    {
        // Define a dictionary type data with key-value pair
        question: "NaHCO^3=?",
        options: ["Sodium bicarbonate", "Soda", "Chicken Mc Nuggets", "Mutated water"],
        answer: "Sodium bicarbonate"
    },

    {
        // Define a dictionary type data with key-value pair
        question: "H^2SO^4=?",
        options: ["Ammonia", "Carbon monoxide", "Sulfuric Acid", "Iron"],
        answer: "Sulfuric Acid"
    },
];


const questionElement = document.getElementById('question');
const startButton = document.getElementById('start-btn');
const resultElement = document.getElementById('result');
const timerElement = document.getElementById('timer');
const timerText = document.getElementById('countdown');
const progressbar = document.getElementById('progress-bar');
const progressBarContainer = document.getElementById('progress-bar-container');
const optionsElement = document.getElementById('option-container');

progressbar.style.width = '0%';

let timer = 0;
let currentQuestion = 0;
let score = 0;


startButton.addEventListener('click', startQuiz);

function startQuiz()
{
    startButton.style.display = 'none';
    progressBarContainer.style.display = 'block';
    //resultElement.textContent = `Well done! You scored ${score} point(s)`;
    loadQuestion();
}

function loadQuestion()
{
    // reset the timer
    clearInterval(timer);

    if(currentQuestion < quizData.length)
    {
        // Update the progress bar
        progressbar.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;

        const currentQuizData = quizData[currentQuestion];
        questionElement.textContent = currentQuizData.question;

        // Set initial countdown value
        timerText.textContent = 15;

        optionsElement.innerHTML = '';

        // Clone a button for each options in a question
        currentQuizData.options.forEach((option) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            optionsElement.appendChild(button);

            button.addEventListener('click', () => {
                checkAnswer(option);
            });
        });




        // Start the countdown for the current question
        timer = setInterval(() => {
            timerText.textContent = parseInt(timerText.textContent) - 1;
            if(parseInt(timerText.textContent) === 0)
            {
                // reset the timer
                clearInterval(timer);

                currentQuestion = currentQuestion + 1;

                loadQuestion();
            }
        }, 1000);
    } else {
        showResult();
    }
}


function checkAnswer(option)
{
    const currentQuizData= quizData[currentQuestion];

    if(option === currentQuizData.answer)
    {
        score++;
    }

    resultElement.textContent = `Well done! You scored ${score} point(s)`;
    currentQuestion++;
    loadQuestion();
}

function showResult()
{
    clearInterval(timer);
    timerElement.style.display = 'none'; // Hide the timer
    progressBarContainer.style.display = 'none';
}


















































