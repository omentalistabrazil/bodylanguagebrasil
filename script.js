const quizData = {
    questions: [
        // Perguntas 1 a 26 (já existentes)
        {
            question: "Quando um pé está apontando para a direção da saída, isso pode indicar:",
            image: "imagens/imagem1.jpg",
            options: [
                "A pessoa está com interesse",
                "A pessoa tem intenção de sair",
                "A pessoa está relaxada",
                "A pessoa está ansiosa"
            ],
            correctAnswer: 1
        },
        {
            question: "Agarrar os joelhos e posicionar os pés em arranque indica que a pessoa está:",
            image: "imagens/imagem2.jpg",
            options: [
                "Pronta para partir",
                "Confortável",
                "Insegura",
                "Confiante"
            ],
            correctAnswer: 0
        },
        {
            question: "O que significa quando alguém está com as pernas cruzadas em uma conversa?",
            image: "imagens/imagem3.jpg",
            options: [
                "Conforto e relaxamento",
                "Insegurança",
                "Falta de interesse",
                "Intenção de dominar a conversa"
            ],
            correctAnswer: 0
        },
        {
            question: "Quando alguém afasta o joelho durante uma conversa, isso pode significar:",
            image: "imagens/imagem4.jpg",
            options: [
                "Sinal de fechamento",
                "Sinal de abertura e conforto",
                "Ansiedade",
                "Confiança excessiva"
            ],
            correctAnswer: 1
        },
        {
            question: "Limpar as mãos nas pernas é um comportamento frequentemente associado a:",
            image: "imagens/imagem5.jpg",
            options: [
                "Confiança",
                "Estresse ou ansiedade",
                "Falta de interesse",
                "Controle da situação"
            ],
            correctAnswer: 1
        },
        {
            question: "O encolhimento parcial dos ombros pode indicar:",
            image: "imagens/imagem6.jpg",
            options: [
                "Falta de interesse",
                "Confiança",
                "Insegurança ou dúvida",
                "Desejo de se afastar"
            ],
            correctAnswer: 2
        },
        {
            question: "Quando alguém encolhe completamente os ombros, isso geralmente significa:",
            image: "imagens/imagem7.jpg",
            options: [
                "Falta de interesse",
                "Falta de compromisso",
                "A pessoa não sabe ou não tem certeza",
                "A pessoa está afirmando algo com confiança"
            ],
            correctAnswer: 2
        },
        {
            question: "Esparramar-se é mais aceitável:",
            image: "imagens/imagem8.jpg",
            options: [
                "Quando a pessoa está em seu próprio espaço",
                "Quando se está tentando controlar a conversa",
                "Quando a pessoa está tentando agradar alguém",
                "Durante uma reunião de negócios"
            ],
            correctAnswer: 0
        },
        {
            question: "Os braços esparramados sobre outras cadeiras podem indicar que a pessoa está:",
            image: "imagens/imagem9.jpg",
            options: [
                "Insegura",
                "Confortável e confiante",
                "Tentando controlar a situação",
                "Ansiosa ou nervosa"
            ],
            correctAnswer: 1
        },
        {
            question: "Colocar as mãos na cintura com os polegares para trás é um sinal de:",
            image: "imagens/imagem10.jpg",
            options: [
                "Conforto",
                "Autoridade e domínio",
                "Falta de interesse",
                "Dúvida"
            ],
            correctAnswer: 1
        },
        {
            question: "Quando alguém coloca os polegares para frente na cintura, a postura é mais:",
            image: "imagens/imagem11.jpg",
            options: [
                "Autoritária",
                "Questionadora ou inquisidora",
                "Relaxada",
                "Desinteressada"
            ],
            correctAnswer: 1
        },
        {
            question: "Colocar as mãos entrelaçadas atrás da cabeça é uma demonstração de:",
            image: "imagens/imagem12.jpg",
            options: [
                "Insegurança",
                "Conforto e domínio",
                "Desinteresse",
                "Tentativa de se afastar"
            ],
            correctAnswer: 1
        },
        {
            question: "Plantar os dedos espalhados sobre uma superfície é um claro sinal de:",
            image: "imagens/imagem13.jpg",
            options: [
                "Confiança e autoridade",
                "Conforto",
                "Ansiedade",
                "Falta de respeito"
            ],
            correctAnswer: 0
        },

        // Perguntas 14 a 26 (já existentes)

        {
            question: "O que a postura de 'torre com as mãos' demonstra?",
            image: "imagens/imagem14.jpg",
            options: [
                "Nervosismo",
                "Falta de interesse",
                "Insegurança",
                "Confiança e foco"
            ],
            correctAnswer: 3
        },
        {
            question: "Os polegares para cima são associados a...?",
            image: "imagens/imagem15.jpg",
            options: [
                "Indecisão",
                "Confiança naquele momento",
                "Desinteresse",
                "Dúvida"
            ],
            correctAnswer: 1
        },
        {
            question: "O que significa os polegares apontando para baixo em uma conversa?",
            image: "imagens/imagem16.jpg",
            options: [
                "Falta de confiança e/ou ênfase",
                "Foco",
                "Entusiasmo",
                "Confiança"
            ],
            correctAnswer: 0
        },
        {
            question: "Quando alguém esconde os polegares, qual é a mensagem transmitida?",
            image: "imagens/imagem17.jpg",
            options: [
                "Interesse na conversa",
                "Distração",
                "Insegurança",
                "Confiança e credibilidade"
            ],
            correctAnswer: 2
        },
        {
            question: "Esfregar as mãos rapidamente é um sinal de...?",
            image: "imagens/imagem18.jpg",
            options: [
                "Alívio do estresse",
                "Desinteresse",
                "Nervosismo",
                "Confiança"
            ],
            correctAnswer: 0
        },
        {
            question: "Confranger as mãos é uma demonstração de...?",
            image: "imagens/imagem19.jpg",
            options: [
                "Interesse no assunto",
                "Entusiasmo",
                "Preocupação ou ansiedade",
                "Confiança"
            ],
            correctAnswer: 2
        },
        {
            question: "Esfregar os dedos entrelaçados e esticados pode significar...?",
            image: "imagens/imagem20.jpg",
            options: [
                "Autoconfiança",
                "Concentração",
                "Alto nível de ansiedade ou desconforto",
                "Entusiasmo"
            ],
            correctAnswer: 2
        },
        {
            question: "Inclinar a cabeça indica...?",
            image: "imagens/imagem21.jpg",
            options: [
                "Receptividade e conforto",
                "Desconfiança",
                "Dúvida",
                "Insegurança"
            ],
            correctAnswer: 0
        },
        {
            question: "Tocar no pescoço demonstra o quê?",
            image: "imagens/imagem22.jpg",
            options: [
                "Dúvida ou insegurança",
                "Conforto emocional",
                "Confiança",
                "Interesse"
            ],
            correctAnswer: 0
        },
        {
            question: "Cobrir a covinha do pescoço pode significar...?",
            image: "imagens/imagem23.jpg",
            options: [
                "Medo ou insegurança",
                "Interesse na conversa",
                "Concentração",
                "Felicidade"
            ],
            correctAnswer: 0
        },
        {
            question: "O que os gestos de bloquear os olhos geralmente indicam?",
            image: "imagens/imagem24.jpg",
            options: [
                "Alegria",
                "Concentração",
                "Interesse",
                "Desagrado ou desconforto"
            ],
            correctAnswer: 3
        },
        {
            question: "Tocar nos olhos durante uma conversa pode significar...?",
            image: "imagens/imagem25.jpg",
            options: [
                "Confiança",
                "Necessidade de pacificar sentimentos negativos",
                "Concentração",
                "Interesse"
            ],
            correctAnswer: 1
        },
        {
            question: "Pálpebras que demoram a abrir sugerem...?",
            image: "imagens/imagem26.jpg",
            options: [
                "Confiança",
                "Interesse profundo",
                "Ocultação de emoções negativas",
                "Dúvida"
            ],
            correctAnswer: 2
        },

        // Perguntas 27 a 36
        {
            question: "Pálpebras comprimidas podem ser um sinal de:",
            image: "imagens/imagem27.jpg",
            options: [
                "Curiosidade",
                "Sentimentos negativos ou perda",
                "Felicidade",
                "Alegria genuína"
            ],
            correctAnswer: 1
        },
        {
            question: "Quando os olhos se entortam junto com o franzir da testa, isso pode indicar:",
            image: "imagens/imagem28.jpg",
            options: [
                "Confiança",
                "Desconforto ou frustração",
                "Prazer",
                "Tristeza"
            ],
            correctAnswer: 1
        },
        {
            question: "O arquear das sobrancelhas é um sinal de:",
            image: "imagens/imagem29.jpg",
            options: [
                "Surpresa positiva ou reconhecimento",
                "Confusão",
                "Medo",
                "Indiferença"
            ],
            correctAnswer: 0
        },
        {
            question: "O gesto de franzir o nariz é um indicativo de:",
            image: "imagens/imagem30.jpg",
            options: [
                "Desprazer ou repulsa",
                "Felicidade",
                "Desinteresse",
                "Foco"
            ],
            correctAnswer: 0
        },
        {
            question: "O sorriso verdadeiro é caracterizado por:",
            image: "imagens/imagem31.jpg",
            options: [
                "Apenas os lábios sorrindo, sem envolvimento dos olhos",
                "Aumento da dilatação das pupilas e envolvimento dos músculos ao redor dos olhos",
                "Lábios pressionados e ausência de expressão nos olhos",
                "Sorriso forçado e sem emoção nos olhos"
            ],
            correctAnswer: 1
        },
        {
            question: "O que pode indicar lábios pressionados em uma pessoa?",
            image: "imagens/imagem32.jpg",
            options: [
                "Relaxamento",
                "Satisfação",
                "Estresse ou desconforto",
                "Confiança"
            ],
            correctAnswer: 2
        },
        {
            question: "Lábios em vias de desaparecer são geralmente associados a:",
            image: "imagens/imagem33.jpg",
            options: [
                "Satisfação ou felicidade",
                "Estresse ou ansiedade",
                "Confiança",
                "Empolgação"
            ],
            correctAnswer: 1
        },
        {
            question: "Quando alguém empurra os cantos da boca para baixo como um U invertido, o que isso geralmente representa?",
            image: "imagens/imagem34.jpg",
            options: [
                "Felicidade extrema",
                "Desprezo",
                "Tristeza ou angústia",
                "Confusão"
            ],
            correctAnswer: 2
        },
        {
            question: "O olhar escarninho (olhos revirados) costuma ser um sinal de:",
            image: "imagens/imagem35.jpg",
            options: [
                "Desprezo ou desrespeito",
                "Confiança",
                "Alegria genuína",
                "Surpresa"
            ],
            correctAnswer: 0
        },
        {
            question: "Compor a roupa, como ajustar a gravata ou o colarinho, pode indicar:",
            image: "imagens/imagem36.jpg",
            options: [
                "Estabilidade emocional",
                "Insegurança ou desejo de autopacificação",
                "Felicidade",
                "Foco"
            ],
            correctAnswer: 1
        }
    ]
};

// O código do quiz segue a estrutura já discutida, com a função de exibir e verificar respostas.
let currentQuestionIndex = 0;

function loadQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-image').src = question.image;

    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = question.options[index];
    });

    document.getElementById('result-container').style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const question = quizData.questions[currentQuestionIndex];
    const resultText = document.getElementById('result-text');
    if (selectedIndex === question.correctAnswer) {
        resultText.textContent = "Resposta correta!";
    } else {
        resultText.textContent = "Resposta errada!";
    }

    document.getElementById('result-container').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.questions.length) {
        loadQuestion();
    } else {
        alert("Você completou o quiz!");
    }
}

window.onload = loadQuestion;
// Obtém o botão e o elemento de música
let music = document.getElementById('background-music');
let musicButton = document.getElementById('music-button');

// Função para alternar entre tocar e pausar a música
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicButton.textContent = '🔊'; // Ícone de som ativado
    } else {
        music.pause();
        musicButton.textContent = '🔇'; // Ícone de som desativado
    }
}

// Adiciona o evento de clique ao botão de música
musicButton.addEventListener('click', toggleMusic);