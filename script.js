// Lista de perguntas com as respostas
const quizData = [
    {
        question: "Qual é a emoção associada a um sorriso genuíno?",
        options: ["Felicidade", "Raiva", "Tristeza", "Surpresa"],
        answer: 0 // Índice da resposta correta
    },
    {
        question: "Qual postura indica insegurança?",
        options: ["Braços cruzados", "Postura ereta", "Mãos nos bolsos", "Sorriso largo"],
        answer: 2
    },
    {
        question: "O que significa uma pessoa manter contato visual constante durante uma conversa?",
        options: ["Confiança", "Desinteresse", "Mentira", "Desconforto"],
        answer: 0
    },
    {
        question: "Qual é o significado de uma pessoa tocar o próprio pescoço durante uma conversa?",
        options: ["Confiança", "Nervosismo", "Alegria", "Tristeza"],
        answer: 1
    },
    {
        question: "Quando uma pessoa cruza os braços, isso geralmente indica?",
        options: ["Abertura", "Defensividade", "Atenção", "Sinceridade"],
        answer: 1
    },
    {
        question: "Quando alguém olha para baixo enquanto fala, isso pode indicar?",
        options: ["Confiança", "Mentira", "Desinteresse", "Insegurança"],
        answer: 3
    },
    {
        question: "Qual é o significado de uma pessoa sorrir enquanto fala sobre algo triste?",
        options: ["Felicidade genuína", "Desconforto", "Mentira", "Confusão"],
        answer: 2
    },
    {
        question: "O que significa uma pessoa esfregar os olhos durante uma conversa?",
        options: ["Cansaço", "Mentira", "Desinteresse", "Confusão"],
        answer: 0
    },
    {
        question: "Qual postura indica confiança em uma pessoa?",
        options: ["Braços cruzados", "Postura ereta", "Olhos no chão", "Mãos nos bolsos"],
        answer: 1
    },
    {
        question: "Quando uma pessoa mantém a boca fechada e não sorri, isso pode indicar?",
        options: ["Desinteresse", "Raiva", "Preocupação", "Felicidade"],
        answer: 2
    },
    {
        question: "O que significa uma pessoa que está constantemente mexendo as mãos durante uma conversa?",
        options: ["Atenção", "Desinteresse", "Nervosismo", "Confiança"],
        answer: 2
    },
    {
        question: "Quando alguém se afasta fisicamente de você durante uma conversa, o que isso geralmente indica?",
        options: ["Intimidade", "Aversão", "Atenção", "Curiosidade"],
        answer: 1
    },
    {
        question: "Qual é a interpretação de uma pessoa balançando a perna enquanto fala?",
        options: ["Nervosismo", "Conforto", "Confiança", "Desinteresse"],
        answer: 0
    },
    {
        question: "Quando uma pessoa se toca frequentemente, como passar a mão no cabelo, isso pode indicar?",
        options: ["Conforto", "Atenção", "Nervosismo", "Desinteresse"],
        answer: 2
    },
    {
        question: "Qual é o significado de uma pessoa inclinar a cabeça para o lado durante uma conversa?",
        options: ["Confusão", "Desinteresse", "Empatia", "Raiva"],
        answer: 2
    }
];
// Adicionando as novas perguntas com o método push
quizData.push(
    {
        question: "Quando uma pessoa se afasta e cruza os braços, isso pode indicar?",
        options: ["Desinteresse", "Aversão", "Desconfiança", "Empatia"],
        answer: 1
    },
    {
        question: "O que significa uma pessoa olhar para o relógio enquanto está conversando?",
        options: ["Desinteresse", "Preocupação", "Impressão de autoridade", "Curiosidade"],
        answer: 0
    },
    {
        question: "Qual é o significado de uma pessoa sorrir enquanto está fazendo algo desconfortável?",
        options: ["Desconforto disfarçado", "Alegria genuína", "Raiva reprimida", "Confusão"],
        answer: 0
    },
    {
        question: "O que pode significar uma pessoa com as mãos nos bolsos durante uma conversa?",
        options: ["Confiança", "Defensividade", "Tristeza", "Preocupação"],
        answer: 1
    },
    {
        question: "Qual é o sinal de que uma pessoa está empolgada e confiante?",
        options: ["Postura ereta e braços abertos", "Mãos nos bolsos", "Balanço de pernas", "Sorriso tímido"],
        answer: 0
    },
    {
        question: "Quando uma pessoa olha para baixo enquanto fala com você, isso pode indicar?",
        options: ["Insegurança", "Mentira", "Empatia", "Raiva"],
        answer: 0
    },
    {
        question: "Quando alguém fica com as mãos nos quadris durante uma conversa, o que isso geralmente indica?",
        options: ["Abertura", "Agressividade", "Atenção", "Desinteresse"],
        answer: 1
    },
    {
        question: "O que significa uma pessoa apertar a mandíbula ou os dentes durante uma conversa?",
        options: ["Raiva ou tensão", "Felicidade", "Cansaço", "Atenção"],
        answer: 0
    },
    {
        question: "Quando alguém fala muito rápido e com entusiasmo, isso pode indicar?",
        options: ["Ansiedade", "Confiança", "Desinteresse", "Excitação"],
        answer: 3
    },
    {
        question: "Qual é o significado de uma pessoa olhar para o lado enquanto fala?",
        options: ["Desinteresse", "Mentira", "Busca por apoio", "Curiosidade"],
        answer: 2
    }
);
// Adicionando 10 perguntas de linguagem corporal avançada a partir da numeração 25
quizData.push(
    {
        question: "O que significa quando uma pessoa fica olhando para o lado durante uma conversa?",
        options: ["Desconforto ou evasão", "Interesse", "Pensamento profundo", "Mentira"],
        answer: 0
    },
    {
        question: "Quando alguém mantém os pés apontados para a saída, isso geralmente significa?",
        options: ["Desinteresse", "Desejo de sair", "Atenção", "Confiança"],
        answer: 1
    },
    {
        question: "O que uma pessoa pode estar tentando comunicar quando faz gestos exagerados com as mãos enquanto fala?",
        options: ["Tentando destacar um ponto importante", "Desinteresse", "Insegurança", "Mentindo"],
        answer: 0
    },
    {
        question: "Quando uma pessoa se afasta fisicamente de alguém durante uma conversa, o que isso pode indicar?",
        options: ["Distanciamento emocional", "Interesse", "Atenção", "Empatia"],
        answer: 0
    },
    {
        question: "Uma pessoa que toca ou esfrega o pescoço enquanto fala pode estar demonstrando?",
        options: ["Insegurança", "Confiança", "Felicidade", "Desinteresse"],
        answer: 0
    },
    {
        question: "O que pode significar se uma pessoa tenta esconder as mãos debaixo da mesa enquanto está conversando?",
        options: ["Esconder emoções", "Falta de confiança", "Segurança", "Mentira"],
        answer: 0
    },
    {
        question: "O que pode indicar quando uma pessoa cruza os braços enquanto ouve atentamente alguém?",
        options: ["Resistência ou defesa", "Desinteresse", "Atenção focada", "Concordância"],
        answer: 0
    },
    {
        question: "Quando uma pessoa olha rapidamente para a esquerda ou direita durante uma conversa, isso pode ser um sinal de?",
        options: ["Lembrança de algo", "Mentira", "Desinteresse", "Felicidade"],
        answer: 1
    },
    {
        question: "Quando alguém está sentindo estresse, é provável que sua linguagem corporal inclua?",
        options: ["Tensão muscular e respiração curta", "Relaxamento e postura aberta", "Sorriso constante", "Postura ereta e relaxada"],
        answer: 0
    },
    {
        question: "O que significa quando uma pessoa fica batendo os dedos ou as mãos de forma rítmica durante uma conversa?",
        options: ["Impaciência ou ansiedade", "Felicidade", "Senso de controle", "Desinteresse"],
        answer: 0
    }
);

console.log(quizData); // As novas perguntas difíceis foram adicionadas ao quizData a partir da numeração 25
console.log(quizData); // As perguntas foram adicionadas ao quizData
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreContainer = document.getElementById("score-container");
const restartButton = document.getElementById("restart-button");

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    
    // Adicionando a numeração da pergunta
    questionElement.innerHTML = `Pergunta ${currentQuestion + 1}: ${questionData.question}`;
    
    optionsElement.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index, button));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex, button) {
    const correctAnswer = quizData[currentQuestion].answer;
    
    if (selectedIndex === correctAnswer) {
        score += 10;
        button.classList.add("correct");
    } else {
        button.classList.add("wrong");
    }

    // Desabilitar os botões após a escolha
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            scoreContainer.textContent = `Você terminou o quiz! Sua pontuação é: ${score}`;
            restartButton.style.display = "block"; // Mostrar o botão de reiniciar
        }
    }, 1000);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreContainer.textContent = "";
    restartButton.style.display = "none"; // Esconder o botão de reiniciar
    loadQuestion();
}

// Iniciar o quiz
loadQuestion();

// Adicionar o evento de reiniciar o quiz
restartButton.addEventListener("click", restartQuiz);
// Função para ler texto usando a API de síntese de fala
function falar(texto) {
    const synth = window.speechSynthesis; // Instancia o sintetizador de fala
    const utterance = new SpeechSynthesisUtterance(texto); // Cria uma "enunciação" para a fala
    utterance.lang = 'pt-BR'; // Define o idioma (português brasileiro)
    synth.speak(utterance); // Faz o sintetizador falar o texto
}

// Função para carregar uma nova pergunta
function loadQuestion() {
    const questionData = quizData[currentQuestion];
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = "";

    // Lê a pergunta em voz alta
    falar(questionData.question);

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index, button));
        optionsElement.appendChild(button);
    });
}

// Função para verificar a resposta e dar feedback
function checkAnswer(selectedIndex, button) {
    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedIndex === correctAnswer) {
        score += 10;
        button.classList.add("correct");
        falar("Correto!");  // Fala "Correto" se a resposta for certa
    } else {
        button.classList.add("wrong");
        falar("Incorreto!");  // Fala "Incorreto" se a resposta for errada
    }

    // Desabilitar os botões após a escolha
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            scoreContainer.textContent = `Você terminou o quiz! Sua pontuação é: ${score}`;
            restartButton.style.display = "block"; // Mostrar o botão de reiniciar
        }
    }, 1000);
}

// Restante do código para o quiz e reiniciar...