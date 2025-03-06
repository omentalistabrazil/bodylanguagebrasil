let currentQuestionIndex = 0;
let score = 0;

// Definindo as perguntas e opções do quiz
const questions = [
    {
        question: "O que Maquiavel sugere sobre a generosidade de um príncipe?",
        image: "imagens/questao1.jpg",
        options: [
            "O príncipe deve ser sempre generoso.",
            "A generosidade pode levar à ruína financeira e ao ódio do povo.",
            "A generosidade é a única forma de ganhar o amor do povo.",
            "O príncipe nunca deve ser generoso."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta1.mp3"
    },
    {
        question: "Segundo Maquiavel, é melhor para um príncipe ser amado ou temido?",
        image: "imagens/questao2.jpg",
        options: [
            "Amado.",
            "Temido.",
            "Ambos.",
            "Nem amado, nem temido."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta2.mp3"
    },
    {
        question: "O que Maquiavel diz sobre a importância de manter a palavra?",
        image: "imagens/questao5.jpg",
        options: [
            "Um príncipe deve sempre manter sua palavra.",
            "Um príncipe deve quebrar sua palavra quando necessário.",
            "A palavra de um príncipe não importa.",
            "Um príncipe nunca deve prometer nada."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta3.mp3"
    },
    {
        question: "Qual é a principal razão pela qual um príncipe deve evitar ser odiado?",
        image: "imagens/questao2.jpg",
        options: [
            "Porque o ódio leva à revolta.",
            "Porque o ódio é difícil de reverter.",
            "Porque o ódio atrai inimigos.",
            "Porque o ódio é contagioso."
        ],
        correctAnswer: 0,
        audio: "audios/pergunta4.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a escolha de assessores?",
        image: "imagens/questao5.jpg",
        options: [
            "Escolha assessores que sejam leais e competentes.",
            "Escolha assessores que sejam ricos.",
            "Escolha assessores que sejam populares.",
            "Escolha assessores que sejam familiares."
        ],
        correctAnswer: 0,
        audio: "audios/pergunta5.mp3"
    },
    {
        question: "Como um príncipe deve lidar com bajuladores?",
        image: "imagens/questao5.jpg",
        options: [
            "Ignorar os bajuladores.",
            "Escolher um grupo de conselheiros sábios e ouvir apenas eles.",
            "Acreditar em todos os bajuladores.",
            "Punir os bajuladores."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta6.mp3"
    },
    {
        question: "O que Maquiavel diz sobre a importância da sorte no sucesso de um príncipe?",
        image: "imagens/questao5.jpg",
        options: [
            "A sorte é tudo.",
            "A sorte é metade do sucesso, mas o príncipe deve controlar a outra metade.",
            "A sorte não importa.",
            "A sorte é irrelevante."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta7.mp3"
    },
    {
        question: "Qual é a melhor estratégia para um príncipe manter o poder?",
        image: "imagens/questao1.jpg",
        options: [
            "Ser cruel e implacável.",
            "Ser amado pelo povo.",
            "Ser temido, mas não odiado.",
            "Ser generoso e justo."
        ],
        correctAnswer: 2,
        audio: "audios/pergunta8.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a importância de realizar grandes obras?",
        image: "imagens/questao3.jpg",
        options: [
            "Grandes obras são desnecessárias.",
            "Grandes obras aumentam o prestígio do príncipe.",
            "Grandes obras são um desperdício de recursos.",
            "Grandes obras são perigosas."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta9.mp3"
    },
    {
        question: "O que Maquiavel diz sobre a neutralidade em conflitos?",
        image: "imagens/questao5.jpg",
        options: [
            "A neutralidade é sempre a melhor escolha.",
            "A neutralidade pode levar ao isolamento.",
            "A neutralidade é perigosa.",
            "A neutralidade é uma estratégia eficaz."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta10.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a importância de ser imprevisível?",
        image: "imagens/questao2.jpg",
        options: [
            "A imprevisibilidade é uma fraqueza.",
            "A imprevisibilidade é uma estratégia poderosa.",
            "A imprevisibilidade é desnecessária.",
            "A imprevisibilidade é perigosa."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta11.mp3"
    },
    {
        question: "O que Maquiavel diz sobre a importância de ser flexível?",
        image: "imagens/questao3.jpg",
        options: [
            "A flexibilidade é uma fraqueza.",
            "A flexibilidade é essencial para a sobrevivência.",
            "A flexibilidade é desnecessária.",
            "A flexibilidade é perigosa."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta12.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a importância de ser autêntico?",
        image: "imagens/questao3.jpg",
        options: [
            "A autenticidade é irrelevante.",
            "A autenticidade é uma virtude.",
            "A autenticidade é perigosa.",
            "A autenticidade é uma fraqueza."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta13.mp3"
    },
    {
        question: "O que Maquiavel diz sobre a importância de ser ousado?",
        image: "imagens/questao5.jpg",
        options: [
            "A ousadia é uma fraqueza.",
            "A ousadia é essencial para o sucesso.",
            "A ousadia é desnecessária.",
            "A ousadia é perigosa."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta14.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a importância de ser generoso com um líder mais poderoso?",
        image: "imagens/questao5.jpg",
        options: [
            "A generosidade é uma fraqueza.",
            "A generosidade é uma estratégia poderosa.",
            "A generosidade é desnecessária.",
            "A generosidade é perigosa."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta1.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a generosidade de um príncipe?",
        image: "imagens/questao1.jpg",
        options: [
            "O príncipe deve ser sempre generoso.",
            "A generosidade pode levar à ruína financeira e ao ódio do povo.",
            "A generosidade é a única forma de ganhar o amor do povo.",
            "O príncipe nunca deve ser generoso."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta1.mp3"
    },
    {
        question: "Segundo Maquiavel, é melhor para um príncipe ser amado ou temido?",
        image: "imagens/questao2.jpg",
        options: [
            "Amado.",
            "Temido.",
            "Ambós.",
            "Nem amado, nem temido."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta2.mp3"
    },
    {
        question: "O que Maquiavel diz sobre a importância de manter a palavra?",
        image: "imagens/questao5.jpg",
        options: [
            "Um príncipe deve sempre manter sua palavra.",
            "Um príncipe deve quebrar sua palavra quando necessário.",
            "A palavra de um príncipe não importa.",
            "Um príncipe nunca deve prometer nada."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta3.mp3"
    },
    {
        question: "Qual é a principal razão pela qual um príncipe deve evitar ser odiado?",
        image: "imagens/questao6.jpg",
        options: [
            "Porque o ódio leva à revolta.",
            "Porque o ódio é difícil de reverter.",
            "Porque o ódio atrai inimigos.",
            "Porque o ódio é contagioso."
        ],
        correctAnswer: 0,
        audio: "audios/pergunta4.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a escolha de assessores?",
        image: "imagens/questao2.jpg",
        options: [
            "Escolha assessores que sejam leais e competentes.",
            "Escolha assessores que sejam ricos.",
            "Escolha assessores que sejam populares.",
            "Escolha assessores que sejam familiares."
        ],
        correctAnswer: 0,
        audio: "audios/pergunta5.mp3"
    },
    {
        question: "Como um príncipe deve lidar com bajuladores?",
        image: "imagens/questao1.jpg",
        options: [
            "Ignorar os bajuladores.",
            "Escolher um grupo de conselheiros sábios e ouvir apenas eles.",
            "Acreditar em todos os bajuladores.",
            "Punir os bajuladores."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta6.mp3"
    },
    {
        question: "O que Maquiavel diz sobre a importância da sorte no sucesso de um príncipe?",
        image: "imagens/questao6.jpg",
        options: [
            "A sorte é tudo.",
            "A sorte é metade do sucesso, mas o príncipe deve controlar a outra metade.",
            "A sorte não importa.",
            "A sorte é irrelevante."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta7.mp3"
    },
    {
        question: "Qual é a melhor estratégia para um príncipe manter o poder?",
        image: "imagens/questao4.jpg",
        options: [
            "Ser cruel e implacável.",
            "Ser amado pelo povo.",
            "Ser temido, mas não odiado.",
            "Ser generoso e justo."
        ],
        correctAnswer: 2,
        audio: "audios/pergunta8.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a importância de realizar grandes obras?",
        image: "imagens/questao6.jpg",
        options: [
            "Grandes obras são desnecessárias.",
            "Grandes obras aumentam o prestígio do príncipe.",
            "Grandes obras são um desperdício de recursos.",
            "Grandes obras são perigosas."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta9.mp3"
    },
    {
        question: "O que Maquiavel diz sobre a neutralidade em conflitos?",
        image: "imagens/questao2.jpg",
        options: [
            "A neutralidade é sempre a melhor escolha.",
            "A neutralidade pode levar ao isolamento.",
            "A neutralidade é perigosa.",
            "A neutralidade é uma estratégia eficaz."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta10.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a importância de ser imprevisível?",
        image: "imagens/questao6.jpg",
        options: [
            "A imprevisibilidade é uma fraqueza.",
            "A imprevisibilidade é uma estratégia poderosa.",
            "A imprevisibilidade é desnecessária.",
            "A imprevisibilidade é perigosa."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta11.mp3"
    },
    {
        question: "O que Maquiavel diz sobre a importância de ser flexível?",
        image: "imagens/questao2.jpg",
        options: [
            "A flexibilidade é uma fraqueza.",
            "A flexibilidade é essencial para a sobrevivência.",
            "A flexibilidade é desnecessária.",
            "A flexibilidade é perigosa."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta12.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a importância de ser autêntico?",
        image: "imagens/questao6.jpg",
        options: [
            "A autenticidade é irrelevante.",
            "A autenticidade é uma virtude.",
            "A autenticidade é perigosa.",
            "A autenticidade é uma fraqueza."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta13.mp3"
    },
    {
        question: "O que Maquiavel diz sobre a importância de ser ousado?",
        image: "imagens/questao1.jpg",
        options: [
            "A ousadia é uma fraqueza.",
            "A ousadia é essencial para o sucesso.",
            "A ousadia é desnecessária.",
            "A ousadia é perigosa."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta14.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a importância de ser generoso com um líder mais poderoso?",
        image: "imagens/questao3.jpg",
        options: [
            "A generosidade é uma fraqueza.",
            "A generosidade é uma estratégia poderosa.",
            "A generosidade é desnecessária.",
            "A generosidade é perigosa."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta1.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a importância de ser temido em vez de amado?",
        image: "imagens/questao3.jpg",
        options: [
            "O amor é mais duradouro que o medo.",
            "O medo é mais eficaz para manter o controle.",
            "O amor e o medo são igualmente importantes.",
            "O medo é irrelevante."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta16.mp3"
    },
    {
        question: "O que Maquiavel diz sobre a importância de ser justo?",
        image: "imagens/questao2.jpg",
        options: [
            "A justiça é essencial para um príncipe.",
            "A justiça é irrelevante.",
            "A justiça pode ser sacrificada pelo poder.",
            "A justiça é perigosa."
        ],
        correctAnswer: 2,
        audio: "audios/pergunta4.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a importância de ser cruel quando necessário?",
        image: "imagens/questao1.jpg",
        options: [
            "A crueldade é sempre ruim.",
            "A crueldade pode ser necessária para manter o poder.",
            "A crueldade é desnecessária.",
            "A crueldade é uma fraqueza."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta18.mp3"
    },
    {
        question: "O que Maquiavel diz sobre a importância de ser astuto?",
        image: "imagens/questao1.jpg",
        options: [
            "A astúcia é uma fraqueza.",
            "A astúcia é essencial para o sucesso.",
            "A astúcia é desnecessária.",
            "A astúcia é perigosa."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta19.mp3"
    },
    {
        question: "O que Maquiavel sugere sobre a importância de ser paciente?",
        image: "imagens/questao6.jpg",
        options: [
            "A paciência é uma fraqueza.",
            "A paciência é essencial para o sucesso.",
            "A paciência é desnecessária.",
            "A paciência é perigosa."
        ],
        correctAnswer: 1,
        audio: "audios/pergunta20.mp3"
    },
    {
    question: "O que são padrões fixos de ação entre animais?",
    options: [
        "Comportamentos aprendidos ao longo da vida.",
        "Sequências mecânicas de comportamento desencadeadas por características específicas.",
        "Respostas emocionais a estímulos externos.",
        "Comportamentos aleatórios sem padrão definido."
    ],
    correctAnswer: 1
},
{
    question: "Qual é a principal vantagem da reação automática (clique, zum) para os seres humanos?",
    options: [
        "Permite uma análise detalhada de todas as informações disponíveis.",
        "Economiza tempo, energia e capacidade mental.",
        "Aumenta a probabilidade de erros.",
        "Torna as decisões mais lentas e ponderadas."
    ],
    correctAnswer: 1
},
{
    question: "O que o princípio do contraste perceptivo sugere?",
    options: [
        "Que as pessoas tendem a ver diferenças maiores entre dois itens quando apresentados em sequência.",
        "Que as pessoas preferem itens mais caros.",
        "Que as pessoas ignoram diferenças entre itens.",
        "Que as pessoas não são influenciadas pela ordem de apresentação dos itens."
    ],
    correctAnswer: 0
},
{
    question: "O que a regra da reciprocidade exige?",
    options: [
        "Que as pessoas retribuam favores recebidos.",
        "Que as pessoas ignorem favores recebidos.",
        "Que as pessoas evitem fazer favores.",
        "Que as pessoas façam favores apenas para familiares."
    ],
    correctAnswer: 0
},
{
    question: "Qual foi o resultado do experimento de Dennis Regan com as garrafas de Coca-Cola?",
    options: [
        "Os voluntários que receberam refrigerantes compraram mais bilhetes de rifa.",
        "Os voluntários que não receberam refrigerantes compraram mais bilhetes de rifa.",
        "A simpatia por Joe não influenciou a compra de bilhetes.",
        "Nenhum voluntário comprou bilhetes de rifa."
    ],
    correctAnswer: 0
},
{
    question: "Qual foi a estratégia usada pela Sociedade Hare Krishna para aumentar doações?",
    options: [
        "Oferecer presentes antes de pedir doações.",
        "Pedir doações diretamente sem oferecer nada em troca.",
        "Usar ameaças para conseguir doações.",
        "Ignorar a regra da reciprocidade."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Knox e Inskster descobriu sobre os apostadores de corridas de cavalos?",
    options: [
        "Eles ficam menos confiantes após fazerem apostas.",
        "Eles ficam mais confiantes após fazerem apostas.",
        "Eles não mudam sua confiança após fazerem apostas.",
        "Eles desistem de apostar após fazerem uma aposta."
    ],
    correctAnswer: 1
},
{
    question: "O que a técnica do 'pé na porta' envolve?",
    options: [
        "Fazer um pedido grande primeiro e depois um menor.",
        "Fazer um pedido pequeno primeiro e depois um maior.",
        "Ignorar pedidos menores e focar apenas em pedidos grandes.",
        "Não fazer nenhum pedido."
    ],
    correctAnswer: 1
},
{
    question: "Qual foi o resultado do estudo de Freedman e Fraser com os outdoors de segurança no trânsito?",
    options: [
        "76% das pessoas que haviam concordado com um pedido menor concordaram com o pedido maior.",
        "Nenhuma pessoa concordou com o pedido maior.",
        "Apenas 17% das pessoas concordaram com o pedido maior.",
        "As pessoas que não concordaram com o pedido menor também concordaram com o pedido maior."
    ],
    correctAnswer: 0
},
{
    question: "O que o princípio da aprovação social sugere?",
    options: [
        "As pessoas tendem a seguir as ações dos outros em situações de incerteza.",
        "As pessoas ignoram as ações dos outros em situações de incerteza.",
        "As pessoas sempre agem de forma independente.",
        "As pessoas evitam seguir exemplos sociais."
    ],
    correctAnswer: 0
},
{
    question: "Qual foi o resultado do experimento de Moriarty na praia de Nova York?",
    options: [
        "A maioria das pessoas não reagiu ao furto.",
        "A maioria das pessoas reagiu ao furto após serem solicitadas a cuidar das coisas do cúmplice.",
        "As pessoas ignoraram completamente o furto.",
        "As pessoas chamaram a polícia imediatamente."
    ],
    correctAnswer: 1
},
{
    question: "O que o estudo de Langer sobre a fila da copiadora demonstrou?",
    options: [
        "As pessoas são mais propensas a concordar com pedidos quando uma justificativa é fornecida.",
        "As pessoas ignoram justificativas em pedidos.",
        "As pessoas são menos propensas a concordar com pedidos quando uma justificativa é fornecida.",
        "As pessoas não se importam com justificativas."
    ],
    correctAnswer: 0
},
{
    question: "O que o princípio da afinidade sugere?",
    options: [
        "As pessoas são mais propensas a dizer 'sim' a quem gostam.",
        "As pessoas ignoram quem gostam.",
        "As pessoas são menos propensas a dizer 'sim' a quem gostam.",
        "As pessoas não se importam com afinidades."
    ],
    correctAnswer: 0
},
{
    question: "Qual foi a estratégia usada pelos vendedores da Amway para aumentar vendas?",
    options: [
        "Oferecer amostras grátis e pedir compromissos futuros.",
        "Ignorar a regra da reciprocidade.",
        "Usar ameaças para conseguir vendas.",
        "Não fazer nenhum pedido."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Howard sobre doações para o Comitê Hunger Relief demonstrou?",
    options: [
        "Perguntar 'Como você está se sentindo hoje?' aumentou as doações.",
        "Perguntar 'Como você está se sentindo hoje?' diminuiu as doações.",
        "As pessoas não se importaram com a pergunta.",
        "As pessoas ignoraram completamente a pergunta."
    ],
    correctAnswer: 0
},
{
    question: "O que o princípio da autoridade sugere?",
    options: [
        "As pessoas tendem a obedecer figuras de autoridade.",
        "As pessoas ignoram figuras de autoridade.",
        "As pessoas são menos propensas a obedecer figuras de autoridade.",
        "As pessoas não se importam com autoridade."
    ],
    correctAnswer: 0
},
{
    question: "Qual foi o resultado do estudo de Milgram sobre obediência à autoridade?",
    options: [
        "A maioria dos participantes obedeceu às ordens de aplicar choques elétricos.",
        "A maioria dos participantes desobedeceu às ordens de aplicar choques elétricos.",
        "Os participantes ignoraram completamente as ordens.",
        "Os participantes não se importaram com as ordens."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Cialdini sobre a influência da autoridade em decisões de compra demonstrou?",
    options: [
        "As pessoas são mais propensas a comprar produtos recomendados por especialistas.",
        "As pessoas ignoram recomendações de especialistas.",
        "As pessoas são menos propensas a comprar produtos recomendados por especialistas.",
        "As pessoas não se importam com recomendações de especialistas."
    ],
    correctAnswer: 0
},
{
    question: "O que o princípio da escassez sugere?",
    options: [
        "As pessoas valorizam mais itens que percebem como escassos.",
        "As pessoas ignoram itens escassos.",
        "As pessoas são menos propensas a valorizar itens escassos.",
        "As pessoas não se importam com escassez."
    ],
    correctAnswer: 0
},
{
    question: "Qual foi o resultado do estudo de Worchel sobre a escassez de biscoitos?",
    options: [
        "Os participantes valorizaram mais os biscoitos quando estavam em menor quantidade.",
        "Os participantes ignoraram a quantidade de biscoitos.",
        "Os participantes valorizaram menos os biscoitos quando estavam em menor quantidade.",
        "Os participantes não se importaram com a quantidade de biscoitos."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Cialdini sobre a escassez de joias de turquesa demonstrou?",
    options: [
        "As pessoas compraram mais joias quando o preço foi aumentado.",
        "As pessoas ignoraram o aumento de preço.",
        "As pessoas compraram menos joias quando o preço foi aumentado.",
        "As pessoas não se importaram com o preço."
    ],
    correctAnswer: 0
},
{
    question: "O que o princípio da influência instantânea sugere?",
    options: [
        "As pessoas tomam decisões rápidas com base em atalhos mentais.",
        "As pessoas ignoram atalhos mentais.",
        "As pessoas são menos propensas a tomar decisões rápidas.",
        "As pessoas não se importam com atalhos mentais."
    ],
    correctAnswer: 0
},
{
    question: "Qual foi o resultado do estudo de Cialdini sobre a técnica da rejeição seguida de recuo?",
    options: [
        "A técnica aumentou a probabilidade de concordância com pedidos menores.",
        "A técnica diminuiu a probabilidade de concordância com pedidos menores.",
        "A técnica não teve efeito sobre a concordância com pedidos menores.",
        "A técnica foi ignorada pelos participantes."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Cialdini sobre a técnica do 'pé na porta' demonstrou?",
    options: [
        "Pedidos menores aumentam a probabilidade de concordância com pedidos maiores.",
        "Pedidos menores diminuem a probabilidade de concordância com pedidos maiores.",
        "Pedidos menores não têm efeito sobre a concordância com pedidos maiores.",
        "Pedidos menores são ignorados pelos participantes."
    ],
    correctAnswer: 0
},
{
    question: "Qual é a principal mensagem do livro *As Armas da Persuasão*?",
    options: [
        "As pessoas são facilmente influenciadas por princípios psicológicos.",
        "As pessoas são imunes à influência psicológica.",
        "As pessoas não se importam com princípios psicológicos.",
        "As pessoas são menos propensas a serem influenciadas por princípios psicológicos."
    ],
    correctAnswer: 0
},
{
    question: "Qual dos seguintes princípios NÃO é discutido no livro?",
    options: [
        "Reciprocidade.",
        "Coerência.",
        "Afinidade.",
        "Gravidade."
    ],
    correctAnswer: 3
},
{
    question: "Qual é o papel dos 'atalhos mentais' na persuasão?",
    options: [
        "Eles permitem que as pessoas tomam decisões rápidas com base em informações limitadas.",
        "Eles impedem que as pessoas tomam decisões rápidas.",
        "Eles não têm efeito sobre as decisões das pessoas.",
        "Eles são ignorados pelas pessoas."
    ],
    correctAnswer: 0
},
{
    question: "Qual é a principal defesa contra as técnicas de persuasão discutidas no livro?",
    options: [
        "Reconhecer e questionar as técnicas de persuasão.",
        "Ignorar completamente as técnicas de persuasão.",
        "Aceitar todas as técnicas de persuasão sem questionar.",
        "Não se importar com as técnicas de persuasão."
    ],
    correctAnswer: 0
},
{
    question: "Qual é o impacto da coerência sobre o comportamento humano?",
    options: [
        "As pessoas tendem a agir de forma coerente com decisões anteriores.",
        "As pessoas ignoram decisões anteriores.",
        "As pessoas são menos propensas a agir de forma coerente.",
        "As pessoas não se importam com decisões anteriores."
    ],
    correctAnswer: 0
},
{
    question: "Qual é a importância do compromisso na persuasão?",
    options: [
        "O compromisso aumenta a probabilidade de comportamento coerente no futuro.",
        "O compromisso diminui a probabilidade de comportamento coerente no futuro.",
        "O compromisso não tem efeito sobre o comportamento futuro.",
        "O compromisso é ignorado pelas pessoas."
    ],
    correctAnswer: 0
},
{
    question: "O que o comportamento da perua mãe ilustra sobre os padrões fixos de ação?",
    options: [
        "Ela reage apenas ao som dos filhotes, ignorando outros estímulos.",
        "Ela reage a qualquer estímulo visual.",
        "Ela ignora completamente os filhotes.",
        "Ela reage apenas ao cheiro dos filhotes."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Langer sobre a fila da copiadora demonstrou sobre a palavra 'porque'?",
    options: [
        "Ela desencadeia uma reação automática de consentimento.",
        "Ela é ignorada pelas pessoas.",
        "Ela reduz a probabilidade de concordância.",
        "Ela não tem efeito sobre as decisões."
    ],
    correctAnswer: 0
},
{
    question: "Por que os clientes da joalheria compraram as joias de turquesa após o aumento de preço?",
    options: [
        "Eles associaram preço alto a qualidade.",
        "Eles não sabiam o valor real das joias.",
        "Eles estavam desesperados por comprar algo.",
        "Eles foram enganados pelo vendedor."
    ],
    correctAnswer: 0
},
{
    question: "Qual foi o resultado do experimento do professor universitário que enviou cartões de Natal?",
    options: [
        "Ele recebeu muitos cartões de volta de pessoas desconhecidas.",
        "Ninguém respondeu aos cartões.",
        "As pessoas perguntaram quem ele era antes de responder.",
        "Ele foi criticado por enviar cartões."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Regan mostrou sobre a força da reciprocidade?",
    options: [
        "Ela pode superar a influência de outros fatores, como simpatia.",
        "Ela só funciona quando há simpatia entre as pessoas.",
        "Ela é menos eficaz do que a simpatia.",
        "Ela não tem efeito sobre as decisões."
    ],
    correctAnswer: 0
},
{
    question: "Por que a Sociedade Hare Krishna começou a oferecer presentes antes de pedir doações?",
    options: [
        "Para evocar a regra da reciprocidade.",
        "Para parecerem mais simpáticos.",
        "Para evitar críticas do público.",
        "Para testar a generosidade das pessoas."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Freedman e Fraser mostrou sobre a técnica do 'pé na porta'?",
    options: [
        "Pedidos pequenos aumentam a probabilidade de concordância com pedidos maiores.",
        "Pedidos pequenos não têm efeito sobre pedidos maiores.",
        "Pedidos pequenos reduzem a probabilidade de concordância com pedidos maiores.",
        "Pedidos pequenos são ignorados pelas pessoas."
    ],
    correctAnswer: 0
},
{
    question: "Por que os prisioneiros de guerra americanos na Coreia começaram a colaborar com os chineses?",
    options: [
        "Eles foram levados a assumir pequenos compromissos que se tornaram maiores.",
        "Eles foram forçados fisicamente a colaborar.",
        "Eles não colaboraram de forma alguma.",
        "Eles foram enganados por falsas promessas."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Sherman sobre previsões de comportamento mostrou?",
    options: [
        "Pedir que as pessoas prevejam seu comportamento aumenta a probabilidade de ação.",
        "As pessoas não cumprem suas previsões.",
        "Previsões não têm efeito sobre o comportamento.",
        "As pessoas se sentem pressionadas a mentir sobre suas previsões."
    ],
    correctAnswer: 0
},
{
    question: "O que o princípio da aprovação social sugere sobre o comportamento humano?",
    options: [
        "As pessoas tendem a seguir as ações dos outros em situações de incerteza.",
        "As pessoas sempre agem de forma independente.",
        "As pessoas ignoram completamente as ações dos outros.",
        "As pessoas evitam seguir exemplos sociais."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Moriarty na praia de Nova York demonstrou?",
    options: [
        "As pessoas são mais propensas a ajudar quando se sentem responsáveis.",
        "As pessoas ignoram completamente os furtos.",
        "As pessoas só ajudam quando há recompensa.",
        "As pessoas não se importam com os pertences dos outros."
    ],
    correctAnswer: 0
},
{
    question: "Por que as pessoas tendem a seguir a multidão em situações de emergência?",
    options: [
        "Elas assumem que a multidão sabe o que está fazendo.",
        "Elas não sabem o que fazer sozinhas.",
        "Elas querem se destacar da multidão.",
        "Elas ignoram completamente a multidão."
    ],
    correctAnswer: 0
},
{
    question: "O que o princípio da afinidade sugere sobre a persuasão?",
    options: [
        "As pessoas são mais propensas a dizer 'sim' a quem gostam.",
        "As pessoas ignoram quem gostam.",
        "As pessoas são menos propensas a dizer 'sim' a quem gostam.",
        "As pessoas não se importam com afinidades."
    ],
    correctAnswer: 0
},
{
    question: "Qual foi a estratégia usada pelos vendedores da Amway para aumentar vendas?",
    options: [
        "Oferecer amostras grátis e pedir compromissos futuros.",
        "Ignorar a regra da reciprocidade.",
        "Usar ameaças para conseguir vendas.",
        "Não fazer nenhum pedido."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Howard sobre doações para o Comitê Hunger Relief demonstrou?",
    options: [
        "Perguntar 'Como você está se sentindo hoje?' aumentou as doações.",
        "Perguntar 'Como você está se sentindo hoje?' diminuiu as doações.",
        "As pessoas não se importaram com a pergunta.",
        "As pessoas ignoraram completamente a pergunta."
    ],
    correctAnswer: 0
},
{
    question: "O que o princípio da autoridade sugere sobre o comportamento humano?",
    options: [
        "As pessoas tendem a obedecer figuras de autoridade.",
        "As pessoas ignoram figuras de autoridade.",
        "As pessoas são menos propensas a obedecer figuras de autoridade.",
        "As pessoas não se importam com autoridade."
    ],
    correctAnswer: 0
},
{
    question: "Qual foi o resultado do estudo de Milgram sobre obediência à autoridade?",
    options: [
        "A maioria dos participantes obedeceu às ordens de aplicar choques elétricos.",
        "A maioria dos participantes desobedeceu às ordens de aplicar choques elétricos.",
        "Os participantes ignoraram completamente as ordens.",
        "Os participantes não se importaram com as ordens."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Cialdini sobre a influência da autoridade em decisões de compra demonstrou?",
    options: [
        "As pessoas são mais propensas a comprar produtos recomendados por especialistas.",
        "As pessoas ignoram recomendações de especialistas.",
        "As pessoas são menos propensas a comprar produtos recomendados por especialistas.",
        "As pessoas não se importam com recomendações de especialistas."
    ],
    correctAnswer: 0
},
{
    question: "O que o princípio da escassez sugere sobre o comportamento humano?",
    options: [
        "As pessoas valorizam mais itens que percebem como escassos.",
        "As pessoas ignoram itens escassos.",
        "As pessoas são menos propensas a valorizar itens escassos.",
        "As pessoas não se importam com escassez."
    ],
    correctAnswer: 0
},
{
    question: "Qual foi o resultado do estudo de Worchel sobre a escassez de biscoitos?",
    options: [
        "Os participantes valorizaram mais os biscoitos quando estavam em menor quantidade.",
        "Os participantes ignoraram a quantidade de biscoitos.",
        "Os participantes valorizaram menos os biscoitos quando estavam em menor quantidade.",
        "Os participantes não se importaram com a quantidade de biscoitos."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Cialdini sobre a escassez de joias de turquesa demonstrou?",
    options: [
        "As pessoas compraram mais joias quando o preço foi aumentado.",
        "As pessoas ignoraram o aumento de preço.",
        "As pessoas compraram menos joias quando o preço foi aumentado.",
        "As pessoas não se importaram com o preço."
    ],
    correctAnswer: 0
},
{
    question: "O que o princípio da influência instantânea sugere sobre o comportamento humano?",
    options: [
        "As pessoas tomam decisões rápidas com base em atalhos mentais.",
        "As pessoas ignoram atalhos mentais.",
        "As pessoas são menos propensas a tomar decisões rápidas.",
        "As pessoas não se importam com atalhos mentais."
    ],
    correctAnswer: 0
},
{
    question: "Qual foi o resultado do estudo de Cialdini sobre a técnica da rejeição seguida de recuo?",
    options: [
        "A técnica aumentou a probabilidade de concordância com pedidos menores.",
        "A técnica diminuiu a probabilidade de concordância com pedidos menores.",
        "A técnica não teve efeito sobre a concordância com pedidos menores.",
        "A técnica foi ignorada pelos participantes."
    ],
    correctAnswer: 0
},
{
    question: "O que o estudo de Cialdini sobre a técnica do 'pé na porta' demonstrou?",
    options: [
        "Pedidos menores aumentam a probabilidade de concordância com pedidos maiores.",
        "Pedidos menores diminuem a probabilidade de concordância com pedidos maiores.",
        "Pedidos menores não têm efeito sobre a concordância com pedidos maiores.",
        "Pedidos menores são ignorados pelos participantes."
    ],
    correctAnswer: 0
},
{
    question: "Qual é a principal mensagem do livro *As Armas da Persuasão*?",
    options: [
        "As pessoas são facilmente influenciadas por princípios psicológicos.",
        "As pessoas são imunes à influência psicológica.",
        "As pessoas não se importam com princípios psicológicos.",
        "As pessoas são menos propensas a serem influenciadas por princípios psicológicos."
    ],
    correctAnswer: 0
},
{
    question: "Qual dos seguintes princípios NÃO é discutido no livro?",
    options: [
        "Reciprocidade.",
        "Coerência.",
        "Afinidade.",
        "Gravidade."
    ],
    correctAnswer: 3
},
{
    question: "Qual é o papel dos 'atalhos mentais' na persuasão?",
    options: [
        "Eles permitem que as pessoas tomem decisões rápidas com base em informações limitadas.",
        "Eles impedem que as pessoas tomem decisões rápidas.",
        "Eles não têm efeito sobre as decisões das pessoas.",
        "Eles são ignorados pelas pessoas."
    ],
    correctAnswer: 0
},
{
    question: "Qual é a principal defesa contra as técnicas de persuasão discutidas no livro?",
    options: [
        "Reconhecer e questionar as técnicas de persuasão.",
        "Ignorar completamente as técnicas de persuasão.",
        "Aceitar todas as técnicas de persuasão sem questionar.",
        "Não se importar com as técnicas de persuasão."
    ],
    correctAnswer: 0
},
{
    question: "Qual é o impacto da coerência sobre o comportamento humano?",
    options: [
        "As pessoas tendem a agir de forma coerente com decisões anteriores.",
        "As pessoas ignoram decisões anteriores.",
        "As pessoas são menos propensas a agir de forma coerente.",
        "As pessoas não se importam com decisões anteriores."
    ],
    correctAnswer: 0
},
{
    question: "Qual é a importância do compromisso na persuasão?",
    options: [
        "O compromisso aumenta a probabilidade de comportamento coerente no futuro.",
        "O compromisso diminui a probabilidade de comportamento coerente no futuro.",
        "O compromisso não tem efeito sobre o comportamento futuro.",
        "O compromisso é ignorado pelas pessoas."
    ],
    correctAnswer: 0
},
    // Adicione as outras perguntas aqui...
];

// Elementos do DOM
const questionContainer = document.getElementById("question-container");
const clickSound = document.getElementById("clickSound");
const backgroundMusic = document.getElementById("background-music");
const themeStyle = document.getElementById("theme-style");

// Função para embaralhar um array usando o algoritmo de Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Embaralhar a lista de perguntas no início do quiz
shuffleArray(questions);

// Função para carregar a pergunta atual
function loadQuestion() {
    const questionData = questions[currentQuestionIndex];

    if (!questionData) {
        endQuiz();
        return;
    }

    // Embaralhar as opções da pergunta atual
    const shuffledOptions = shuffleArray([...questionData.options]);

    questionContainer.innerHTML = `
        <h2>Pergunta ${currentQuestionIndex + 1}</h2>
        <imagem src="${questionData.image}" alt="Imagem da pergunta">
        <p>${questionData.question}</p>
        ${shuffledOptions
            .map(
                (option, index) => `
            <button class="answer-button" data-index="${questionData.options.indexOf(option)}">${option}</button>
        `
            )
            .join("")}
    `;

    // Reproduzir áudio da pergunta, se existir
    if (questionData.audio) {
        const questionAudio = new Audio(questionData.audio);
        questionAudio.play().catch(error => console.error("Erro ao reproduzir áudio:", error));
    }

    // Adicionar eventos aos botões de resposta
    document.querySelectorAll(".answer-button").forEach((button) => {
        button.addEventListener("click", handleAnswer);
    });
}

// Função para tratar a resposta do usuário
function handleAnswer(event) {
    const selectedIndex = parseInt(event.target.getAttribute("data-index"));
    const isCorrect = selectedIndex === questions[currentQuestionIndex].correctAnswer;

    if (isCorrect) {
        score++;
        event.target.style.backgroundColor = "#34c759";
    } else {
        event.target.style.backgroundColor = "#ff3b30";
    }

    // Reproduzir som de clique
    if (clickSound) {
        clickSound.play();
    }

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
    questionContainer.innerHTML = `
        <h2>Quiz concluído!</h2>
        <p>Sua pontuação: <strong>${score} / ${questions.length}</strong></p>
        <button id="restart-button">Reiniciar Quiz</button>
    `;

    document.getElementById("restart-button").addEventListener("click", restartQuiz);
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleArray(questions);
    loadQuestion();
}

// Iniciar o quiz
loadQuestion();

// Configurações de música e tema
document.addEventListener("DOMContentLoaded", function () {
    const musicToggle = document.getElementById("music-toggle");
    const musicVolume = document.getElementById("music-volume");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Carregar configurações salvas
    const musicEnabled = localStorage.getItem("musicEnabled") === "true";
    const savedVolume = parseFloat(localStorage.getItem("musicVolume")) || 0.5;
    const savedTheme = localStorage.getItem("theme") || "tema_padrão.css";

    if (themeStyle) {
        themeStyle.href = savedTheme;
    }

    // Configuração do tema
    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", function () {
            let currentTheme = themeStyle.href;
            let newTheme;

            if (this.checked) {
                newTheme =
                    currentTheme.includes("tema_padrão.css")
                        ? "tema_escuro_padrão.css"
                        : currentTheme.includes("tema_elegante.css")
                        ? "tema_escuro_elegante.css"
                        : currentTheme;
            } else {
                newTheme =
                    currentTheme.includes("tema_escuro_padrão.css")
                        ? "tema_padrão.css"
                        : currentTheme.includes("tema_escuro_elegante.css")
                        ? "tema_elegante.css"
                        : currentTheme;
            }

            themeStyle.href = newTheme;
            localStorage.setItem("theme", newTheme);
        });
    }
});