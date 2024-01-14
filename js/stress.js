const quizQuestions = [
    {
        question: "Relaxing activities are necessary for:",
        answers: {
            a: "Reduce stress",
            b: "Damage overall well-being",
            c: "There is no need for this"
        },
        correctAnswer: "a",
        comment: " Self-Care and Relaxation: Take time for self-care activities that you enjoy, such as reading, listening to music, drawing, or spending time with friends. These relaxing activities can help reduce stress and improve your overall well-being (Scott, 2023)"
    },
        {
        question: " What supports physical and mental health?",
        answers: {
            a: "Unbalanced diet",
            b: "Lack of physical activity",
            c: "Good nutrition"
        },
        correctAnswer: "c",
        comment: " Stay Active and Eat Well: Regular physical activity, even a short walk, can help reduce stress. Eat a balanced diet with plenty of fruits, vegetables, and whole grains. Good nutrition and exercise support your physical and mental well-being (Scott, 2023)"
    },
        {
        question: "What is included in the relaxation techniques:",
        answers: {
            a: "Worry and anxiety",
            b: "Meditation",
            c: "There are no techniques"
        },
        correctAnswer: "b",
        comment: " Relaxation Techniques: Learn relaxation methods like deep breathing, meditation, or progressive muscle relaxation. These techniques can help you calm your mind and reduce stress when you feel overwhelmed (Scott, 2023)"
    },
        {
        question: "What should I do from this list to manage stress:",
        answers: {
            a: "Talk to someone",
            b: "Don't talk about important things with loved ones",
            c: "To be closed in yourself"
        },
        correctAnswer: "a",
        comment: " Talk to Someone: Don't be afraid to reach out to friends, family, or a counselor when you're feeling stressed. Talking about your worries and feelings can provide emotional support and guidance (Scott, 2023)"
    },
];

function buildQuiz() {
    const output = [];

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join('')} </div>`
        );
    });

    document.getElementById('quiz').innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quiz.querySelectorAll('.answers');
    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        const commentDisplay = document.createElement('div');

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            commentDisplay.innerText = "Correct!" + currentQuestion.comment;
            commentDisplay.style.color = '#4CAF50';
        } else {
            commentDisplay.innerText = "Oops, that's not correct!" + currentQuestion.comment;
            commentDisplay.style.color = '#F44336';
        }

        answerContainer.appendChild(commentDisplay);
    });

    resultsContainer.innerHTML = `You got ${numCorrect} out of ${quizQuestions.length} questions right.`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

buildQuiz();
submitButton.addEventListener('click', showResults);
