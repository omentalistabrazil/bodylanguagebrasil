// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca de posição
    }
    return array;
}

// Dados das questões
const questions = [
    {
        question: "O que significa cruzar os braços na frente do corpo?",
        options: ["Conforto", "Defensividade", "Alegria", "Confiança"],
        correct: 1
    },
    {
        question: "Evitar o contato visual frequentemente sugere:",
        options: ["Respeito", "Desconfiança", "Vergonha", "Foco"],
        correct: 1
    },
    {
        question: "Manter as pernas cruzadas apontadas para longe de alguém pode indicar:",
        options: ["Desinteresse", "Atenção", "Entusiasmo", "Curiosidade"],
        correct: 0
    },
    {
        question: "O que cruzar os braços sobre o peito geralmente expressa?",
        options: ["Defesa", "Alegria", "Confiança", "Desinteresse"],
        correct: 0
    },
    {
        question: "Qual a interpretação comum de coçar a cabeça ao responder algo?",
        options: ["Falta de confiança", "Mentira", "Curiosidade", "Concentração"],
        correct: 0
    },
    {
        question: "Tocar frequentemente o rosto durante uma conversa pode indicar:",
        options: ["Nervosismo", "Entusiasmo", "Tédio", "Autoconfiança"],
        correct: 0
    },
    {
        question: "Inclinar a cabeça para o lado enquanto ouve demonstra:",
        options: ["Interesse", "Desconfiança", "Timidez", "Entusiasmo"],
        correct: 0
    },
    {
        question: "O que significa esfregar as mãos rapidamente em frente ao corpo?",
        options: ["Ansiedade", "Alegria antecipada", "Raiva", "Insegurança"],
        correct: 1
    },
    {
        question: "Desviar o olhar durante uma conversa frequentemente sugere:",
        options: ["Insegurança", "Foco", "Empatia", "Confiança"],
        correct: 0
    },
    {
        question: "Sentar com os braços abertos e relaxados indica:",
        options: ["Conforto", "Tensão", "Indecisão", "Desinteresse"],
        correct: 0
    },
    {
        question: "O que significa apontar os pés para a porta em um grupo?",
        options: ["Desejo de sair", "Concentração", "Empatia", "Respeito"],
        correct: 0
    },
    {
        question: "Cobrir a boca enquanto fala pode ser interpretado como:",
        options: ["Insegurança", "Mentira", "Concentração", "Raiva"],
        correct: 1
    },
    {
        question: "Estar com as mãos nos bolsos e cabeça baixa pode indicar:",
        options: ["Timidez", "Empatia", "Entusiasmo", "Confiança"],
        correct: 0
    },
    {
        question: "Quando alguém aperta as mãos firmemente ao cumprimentar outra pessoa, isso pode indicar:",
        options: ["Dominância", "Amizade", "Insegurança", "Entusiasmo"],
        correct: 0
    },
    {
        question: "Se uma pessoa constantemente se mexe de maneira inquieta enquanto está sentada, isso pode ser um sinal de:",
        options: ["Ansiedade", "Autocontrole", "Falta de interesse", "Empatia"],
        correct: 0
    },
    {
        question: "O que significa uma pessoa fazer movimentos circulares com os dedos enquanto fala?",
        options: ["Tentativa de manipulação", "Autoconfiança", "Indecisão", "Insegurança"],
        correct: 0
    },
    {
        question: "Quando alguém cruza os braços de forma exagerada e tensionada, isso geralmente significa:",
        options: ["Defesa", "Relutância", "Desinteresse", "Falta de poder"],
        correct: 0
    },
    {
        question: "A inclinação do corpo para frente com os ombros relaxados, ao interagir com outra pessoa, indica:",
        options: ["Interesse genuíno", "Agressividade disfarçada", "Falta de foco", "Falta de confiança"],
        correct: 0
    },
    {
        question: "Quando alguém realiza movimentos de autoabraço (como colocar as mãos nos braços ou pernas) sem perceber, pode ser um sinal de:",
        options: ["Autoproteção", "Preocupação", "Autossuficiência", "Tensão emocional"],
        correct: 0
    },
    {
        question: "Quando uma pessoa toca ou ajeita a roupa repetidamente durante uma conversa, isso pode ser interpretado como:",
        options: ["Insegurança", "Controle", "Comodidade", "Falta de interesse"],
        correct: 0
    },
    {
        question: "Se uma pessoa estiver olhando para o canto superior direito enquanto fala, isso pode ser um indício de:",
        options: ["Criatividade ou imaginação", "Tentativa de lembrar de algo", "Mentira", "Indiferença"],
        correct: 0
    },
    {
        question: "Quando alguém segura a cabeça com as mãos de maneira excessiva enquanto ouve outra pessoa, isso pode sugerir:",
        options: ["Confusão", "Domínio", "Controle sobre a situação", "Cansaço emocional"],
        correct: 0
    },
    {
        question: "A posição dos pés apontados para dentro, especialmente quando a pessoa está em grupo, pode ser um sinal de:",
        options: ["Desejo de se afastar", "Desconforto", "Falta de confiança", "Solidariedade"],
        correct: 0
    },
    {
        question: "Quando uma pessoa começa a esfregar o queixo enquanto está tomando uma decisão, isso pode indicar:",
        options: ["Análise crítica", "Confusão", "Insegurança", "Indecisão"],
        correct: 0
    },
    {
        question: "Se uma pessoa apresenta uma expressão facial rígida e evita movimentos durante uma situação tensa, isso pode ser um reflexo de:",
        options: ["Controle emocional", "Medo", "Empatia", "Comodidade"],
        correct: 0
    },
    {
        question: "O comportamento de se afastar fisicamente de alguém durante uma conversa pode ser um sinal de:",
        options: ["Desinteresse", "Desconforto", "Tensão", "Atenção"],
        correct: 1
    },
    {
        question: "Quando uma pessoa tenta ocupar mais espaço (expandindo os braços ou as pernas) em uma situação social, ela está provavelmente exibindo:",
        options: ["Confiança", "Agressividade", "Superioridade", "Preocupação"],
        correct: 2
    },
    {
        question: "A técnica de espelhamento, onde uma pessoa imita inconscientemente os movimentos de outra, pode ser um sinal de:",
        options: ["Tentativa de agradar", "Desinteresse", "Conexão emocional", "Controle"],
        correct: 2
    },
    {
        question: "Quando uma pessoa se acomoda em uma cadeira de maneira descontraída durante uma reunião importante, isso pode ser um reflexo de:",
        options: ["Segurança", "Desinteresse", "Rebeldia", "Comodidade"],
        correct: 0
    },
    {
        question: "Se alguém começa a mexer nas mãos ou ficar inquieto durante uma conversa sobre um tema desconfortável, isso pode ser um reflexo de:",
        options: ["Falta de controle", "Insegurança", "Culpa", "Raiva"],
        correct: 2
    },
    {
        question: "Quando uma pessoa olha para a esquerda (na maioria dos casos) enquanto fala, isso pode ser interpretado como:",
        options: ["Tentativa de lembrar de algo", "Mentira", "Pensamento lógico", "Culpa"],
        correct: 0
    },
    {
        question: "A postura corporal ereta e a movimentação controlada durante uma apresentação pode indicar:",
        options: ["Controle de ansiedade", "Rejeição", "Confiança excessiva", "Competência"],
        correct: 3
    },
    {
        question: "Quando uma pessoa puxa suas orelhas ou toca o cabelo enquanto fala, isso pode ser um sinal de:",
        options: ["Mentira", "Tentativa de autoacalmar", "Preocupação", "Entusiasmo"],
        correct: 1
    },
    {
        question: "Quando uma pessoa constantemente ajusta o ângulo do corpo enquanto ouve alguém, isso pode ser interpretado como:",
        options: ["Conflito interno", "Falta de interesse", "Desejo de controle", "Empatia"],
        correct: 0
    },
    {
        question: "Se alguém está com as mãos abertas, mas inclinadas para trás, isso pode indicar:",
        options: ["Vulnerabilidade", "Falta de confiança", "Agressividade", "Frustração"],
        correct: 0
    },
    {
        question: "Se uma pessoa interrompe constantemente outra pessoa durante uma conversa, isso pode ser um sinal de:",
        options: ["Tentativa de manipulação", "Desinteresse", "Autoconfiança excessiva", "Insegurança"],
        correct: 2
    },
    {
        question: "Quando alguém dá pequenos passos para trás enquanto fala com outra pessoa, isso pode ser uma manifestação de:",
        options: ["Fuga emocional", "Desejo de controle", "Empatia", "Tensão ou desconforto"],
        correct: 3
    },
    {
        question: "Se uma pessoa estala os dedos enquanto está em uma conversa, isso pode ser um reflexo de:",
        options: ["Frustração", "Excesso de confiança", "Atenção", "Desespero"],
        correct: 0
    },
    {
        question: "Quando uma pessoa começa a balançar a perna rapidamente enquanto está em uma situação social, isso pode indicar:",
        options: ["Inquietação devido à ansiedade", "Tédio", "Sentimento de superioridade", "Concentração em uma tarefa"],
        correct: 0
    },
    {
        question: "Se alguém cruza os braços e mantém os pés apontados para a porta durante uma reunião, isso geralmente indica:",
        options: ["Desejo de sair", "Respeito", "Desinteresse", "Atenção"],
        correct: 0
    },
    {
        question: "Quando uma pessoa se aproxima de outra de forma muito rápida e direta, isso pode ser interpretado como:",
        options: ["Agressividade", "Falta de empatia", "Confiança excessiva", "Desejo de controle"],
        correct: 3
    },
    {
        question: "Se uma pessoa faz uma pausa prolongada antes de responder a uma pergunta direta, isso pode ser um sinal de:",
        options: ["Tentativa de manipulação", "Reflexão profunda", "Mentira ou desconforto", "Indecisão"],
        correct: 2
    },
    {
        question: "Quando alguém frequentemente olha para o relógio ou para o celular enquanto conversa, isso pode indicar:",
        options: ["Falta de interesse", "Ansiedade para concluir a interação", "Falta de respeito", "Impressão de superioridade"],
        correct: 1
    },
    {
        question: "Quando uma pessoa usa um sorriso genuíno enquanto faz uma solicitação, isso pode ser uma aplicação do princípio de:",
        options: ["Reciprocidade", "Autoridade", "Afinidade", "Escassez"],
        correct: 2
    },
    {
        question: "Se alguém faz uma leve inclinação da cabeça enquanto ouve outra pessoa, isso pode ser um sinal de:",
        options: ["Consciência de escassez", "Empatia", "Urgência", "Persuasão pela autoridade"],
        correct: 1
    },
    {
        question: "Quando uma pessoa utiliza uma postura expansiva (ocupando mais espaço) em uma negociação, isso está relacionado com o princípio de:",
        options: ["Reciprocidade", "Autoridade", "Escassez", "Compromisso e consistência"],
        correct: 1
    },
    {
        question: "Se alguém constantemente espelha os movimentos da outra pessoa, isso pode ser uma técnica de persuasão baseada em:",
        options: ["Escassez", "Afinidade", "Autoridade", "Reciprocidade"],
        correct: 1
    },
    {
        question: "Quando uma pessoa apresenta um gesto de toque suave (como colocar a mão sobre o braço de alguém), isso pode aumentar a percepção de:",
        options: ["Autoridade", "Confiança", "Afinidade", "Reciprocidade"],
        correct: 2
    },
    {
        question: "Se alguém faz uma pequena concessão antes de pedir algo maior, isso é um exemplo do princípio de:",
        options: ["Compromisso e consistência", "Escassez", "Autoridade", "Reciprocidade"],
        correct: 0
    },
    {
        question: "Quando alguém reforça uma mensagem dizendo ‘Todo mundo está fazendo isso’, isso pode ser uma tentativa de usar o princípio de:",
        options: ["Prova social", "Escassez", "Autoridade", "Reciprocidade"],
        correct: 0
    },
    {
        question: "Se uma pessoa se posiciona de forma confiante, com os braços abertos e a postura ereta durante uma conversa, ela pode estar usando o princípio de:",
        options: ["Autoridade", "Reciprocidade", "Escassez", "Afinidade"],
        correct: 0
    },
    {
        question: "Quando uma pessoa faz uma promessa de ação imediata para obter algo mais, ela pode estar utilizando o princípio de:",
        options: ["Urgência", "Compromisso e consistência", "Escassez", "Autoridade"],
        correct: 0
    },
    {
        question: "Se alguém compartilha um valor comum ou uma experiência compartilhada com outra pessoa para criar um vínculo, isso está alinhado com o princípio de:",
        options: ["Afinidade", "Reciprocidade", "Escassez", "Prova social"],
        correct: 0
    },
   {
        question: "Quando alguém reforça uma mensagem dizendo ‘Todo mundo está fazendo isso’, isso pode ser uma tentativa de usar o princípio de:",
        options: ["Prova social", "Escassez", "Autoridade", "Reciprocidade"],
        correct: 0
    },
    {
        question: "Quando você recebe um favor de alguém, o princípio de reciprocidade sugere que você sente:",
        options: ["Obrigação de retribuir", "Medo de perder", "Confiança em continuar", "Dúvidas sobre a intenção"],
        correct: 0
    },
    {
        question: "Quando uma pessoa usa seu status e conhecimento para influenciar outras, ela está usando qual princípio da persuasão?",
        options: ["Autoridade", "Escassez", "Prova social", "Compromisso"],
        correct: 0
    },
    {
        question: "O princípio da escassez se torna mais eficaz quando:",
        options: ["A oferta é vista como limitada", "A oferta é ilimitada", "Não há competição", "O valor é irrelevante"],
        correct: 0
    },
    {
        question: "Qual é a ideia central por trás do princípio de consistência?",
        options: ["As pessoas preferem agir de maneira consistente com suas escolhas anteriores", "As pessoas seguem facilmente a opinião popular", "O comportamento é moldado pela autoridade", "As pessoas agem com base na escassez"],
        correct: 0
    },
    {
        question: "Qual dos seguintes fatores é mais eficaz para aumentar a persuasão por autoridade?",
        options: ["Credibilidade e expertise visíveis", "A ausência de autoridade", "Opiniões populares", "A falta de alternativas"],
        correct: 0
    },
    {
        question: "Quando uma pessoa muda seu comportamento para se alinhar com o grupo, ela está sendo influenciada por qual princípio?",
        options: ["Prova social", "Autoridade", "Escassez", "Reciprocidade"],
        correct: 0
    },
    {
        question: "O princípio de escassez é mais eficaz quando ele cria:",
        options: ["Urgência", "Confusão", "Dúvida", "Isolamento"],
        correct: 0
    },
    {
        question: "Quando um vendedor oferece um desconto ‘exclusivo’ e limitado para aumentar a demanda, ele está utilizando qual princípio?",
        options: ["Escassez", "Autoridade", "Prova social", "Reciprocidade"],
        correct: 0
    },
    {
        question: "Quando um indivíduo usa uma técnica de persuasão para obter pequenos compromissos iniciais com a intenção de conseguir um grande compromisso posteriormente, ele está usando qual princípio?",
        options: ["Pés na porta", "Escassez", "Autoridade", "Prova social"],
        correct: 0
    }
];
// Embaralhar as questões e as opções
function shuffleQuestions() {
    const shuffledQuestions = shuffleArray(questions); // Embaralha as questões
    shuffledQuestions.forEach(question => {
        question.options = shuffleArray(question.options); // Embaralha as opções de cada questão
    });
    return shuffledQuestions;
}

// Armazenar as questões embaralhadas
const shuffledQuestions = shuffleQuestions();
// Variáveis de estado
let currentQuestionIndex = 0;
let score = 0;

// Elementos da página
const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".option");
const resultDiv = document.getElementById("result");

// Função para embaralhar as opções
function shuffleOptions(question) {
    const options = question.options.map((option, index) => ({
        text: option,
        isCorrect: index === question.correct
    }));

    // Embaralha as opções
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    return options;
}

// Função para carregar a pergunta
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const shuffledOptions = shuffleOptions(currentQuestion);

    questionText.textContent = currentQuestion.question;

    optionButtons.forEach((button, index) => {
        const option = shuffledOptions[index];
        button.textContent = option.text;
        button.onclick = () => checkAnswer(option.isCorrect);
    });

    resultDiv.textContent = ""; // Limpa o resultado anterior
}

// Função para verificar a resposta
function checkAnswer(isCorrect) {
    if (isCorrect) {
        resultDiv.textContent = "✔️ Resposta correta!";
        resultDiv.style.color = "#64ffda";
        score++;
    } else {
        resultDiv.textContent = "❌ Resposta errada.";
        resultDiv.style.color = "#ff5252";
    }

    // Passar para a próxima pergunta ou finalizar
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

// Função para finalizar o quiz
function endQuiz() {
    questionText.textContent = `Você concluiu o quiz! Sua pontuação final foi: ${score}/${questions.length}`;
    optionButtons.forEach(button => button.style.display = "none");
}

// Carrega a primeira pergunta ao iniciar
loadQuestion();
let expanded = false;

function toggleGroups() {
    const group2 = document.getElementById('group2');
    const group3 = document.getElementById('group3');
    const toggleButton = document.getElementById('toggle-button');

    if (!expanded) {
        group2.classList.remove('hidden');
        group3.classList.remove('hidden');
        toggleButton.textContent = 'Ver menos';
    } else {
        group2.classList.add('hidden');
        group3.classList.add('hidden');
        toggleButton.textContent = 'Ver mais';
    }

    expanded = !expanded;
}

