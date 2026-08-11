/* =========================
   LANGUAGE
========================= */

let currentLanguage =
    localStorage.getItem("quizLanguage") || "lv";


const translations = {

    lv: {
        title: "Kāda smalkmaizīte<br>esi Tu?",

        start: "Sākt testu",

        continue: "Turpināt",

        question: "JAUTĀJUMS",

        description:
            "Atbildi uz 12 jautājumiem un uzzini, kura smalkmaizīte vislabāk raksturo tevi."
    },

    en: {
        title: "Which Pastry<br>Are You?",

        start: "Start the test",

        continue: "Continue",

        question: "QUESTION",

        description:
            "Answer 12 questions and find out which pastry best matches your personality."
    }

};

/* =========================
   ELEMENTS
========================= */

const landingScreen = document.getElementById("landing-screen");
const quizScreen = document.getElementById("quiz-screen");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");

const lvButton = document.getElementById("lv-button");
const enButton = document.getElementById("en-button");

const landingTitle =
    document.getElementById("landing-title");

const landingDescription =
    document.getElementById("landing-description");

const questionText = document.getElementById("question-text");
const questionNumber = document.querySelector(".question-number");

const answersContainer = document.getElementById("answers-container");

const questionCounter = document.getElementById("question-counter");
const progressBar = document.getElementById("progress-bar");


/* =========================
   QUIZ STATE
========================= */

let currentQuestion = 0;
let selectedAnswer = null;

let userAnswers = [];


/* =========================
PRELOAD IMAGES
========================= */

function preloadImages() {

    questions.forEach(question => {

        question.images.forEach(imagePath => {

            const image = new Image();

            image.src = imagePath;

        });

    });

}


/* =========================
   START QUIZ
========================= */

startButton.addEventListener("click", () => {

    preloadImages();

    landingScreen.style.opacity = "0";
    landingScreen.style.transform = "translateX(-30px)";

    setTimeout(() => {

        landingScreen.classList.add("hidden");

        quizScreen.classList.remove("hidden");

        quizScreen.style.opacity = "0";
        quizScreen.style.transform = "translateX(30px)";

        requestAnimationFrame(() => {

            quizScreen.style.opacity = "1";
            quizScreen.style.transform = "translateX(0)";

        });

        showQuestion();

    }, 400);

});


/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

    selectedAnswer = null;

    nextButton.disabled = true;

    nextButton.textContent =
        translations[currentLanguage].continue;


    const question =
        questions[currentQuestion];


    /* Question */

    questionText.textContent =
        question[currentLanguage].question;


    /* Question number */

    questionNumber.textContent =
        `${translations[currentLanguage].question} ${currentQuestion + 1}`;


    /* Progress */

    questionCounter.textContent =
        `${currentQuestion + 1} / ${questions.length}`;


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width =
        `${progress}%`;


    /* Answers */

    answersContainer.innerHTML = "";


    question[currentLanguage].answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.classList.add(
                "answer-button"
            );


            /* Image */

            const image =
                document.createElement("img");

            image.src =
                question.images[index];

            image.alt =
                answer;

            image.classList.add(
                "answer-image"
            );


            /* Text */

            const text =
                document.createElement("span");

            text.classList.add(
                "answer-text"
            );

            text.textContent =
                answer;


            /* Put image + text inside button */

            button.appendChild(image);

            button.appendChild(text);


            /* Answer click */

            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index,
                        button

                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );

}


/* =========================
   SELECT ANSWER
========================= */

function selectAnswer(index, button) {

    const allButtons =
        document.querySelectorAll(".answer-button");

    allButtons.forEach(btn => {

        btn.classList.remove("selected");

    });

    button.classList.add("selected");

    selectedAnswer = index;

    nextButton.disabled = false;

}


/* =========================
   NEXT QUESTION
========================= */

nextButton.addEventListener("click", () => {

    if (selectedAnswer === null) {
        return;
    }


    userAnswers[currentQuestion] = selectedAnswer;


    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        animateToNextQuestion();

    } else {

        finishQuiz();

    }

});


/* =========================
   QUESTION TRANSITION
========================= */

function animateToNextQuestion() {

    const container =
        document.querySelector(".question-container");


    container.style.opacity = "0";
    container.style.transform = "translateX(-30px)";


    setTimeout(() => {

        showQuestion();

        container.style.transform =
            "translateX(30px)";


        requestAnimationFrame(() => {

            container.style.opacity = "1";

            container.style.transform =
                "translateX(0)";

        });

    }, 250);

}


/* =========================
   FINISH QUIZ
========================= */

function finishQuiz() {

    const scores = {
        vecriga: 0,
        piradzins: 0,
        austina: 0,
        biezpienmaize: 0
    };


    /*
     * Calculate scores
     */

    userAnswers.forEach((answerIndex, questionIndex) => {

        const question =
            questions[questionIndex];

        const result =
            question.results[answerIndex];

        scores[result]++;

    });


    /*
     * Find the highest score
     */

    const highestScore =
        Math.max(...Object.values(scores));


    /*
     * Find all results with the highest score
     */

    const tiedResults =
        Object.keys(scores).filter(
            result => scores[result] === highestScore
        );


    /*
     * Tie-breaker:
     * use the user's last answer that belongs
     * to one of the tied results.
     */

    let finalResult;


    if (tiedResults.length === 1) {

        finalResult = tiedResults[0];

    } else {

        finalResult = getTieBreaker(
            tiedResults
        );

    }


    /*
     * Save everything for the result page
     */

    localStorage.setItem(
        "quizAnswers",
        JSON.stringify(userAnswers)
    );

    localStorage.setItem(
        "quizScores",
        JSON.stringify(scores)
    );

    localStorage.setItem(
        "quizResult",
        finalResult
    );


    /*
     * Go to result page
     */

    window.location.href =
        "result.html";

}

function getTieBreaker(tiedResults) {

    /*
     * Go backwards through the user's answers.
     * The first answer that belongs to one of the
     * tied results becomes the winner.
     */

    for (
        let i = userAnswers.length - 1;
        i >= 0;
        i--
    ) {

        const question =
            questions[i];

        const answerIndex =
            userAnswers[i];

        const result =
            question.results[answerIndex];


        if (tiedResults.includes(result)) {

            return result;

        }

    }


    /*
     * Fallback — should never normally happen.
     */

    return tiedResults[0];

}

/* =========================
   LANGUAGE SWITCHING
========================= */

function setLanguage(language) {

    currentLanguage = language;

    localStorage.setItem(
        "quizLanguage",
        language
    );


    /* Update language buttons */

    lvButton.classList.toggle(
        "active",
        language === "lv"
    );

    enButton.classList.toggle(
        "active",
        language === "en"
    );


    /* Update landing page */

    landingTitle.innerHTML =
        translations[language].title;

    landingDescription.textContent =
        translations[language].description;

    startButton.textContent =
        translations[language].start;


    /* Update quiz button */

    nextButton.textContent =
        translations[language].continue;


    /* Update current question */

    if (!quizScreen.classList.contains("hidden")) {

        showQuestion();

    }

}


/* Language button events */

lvButton.addEventListener("click", () => {
    setLanguage("lv");
});

enButton.addEventListener("click", () => {
    setLanguage("en");
});


/* Apply saved language */

setLanguage(currentLanguage);