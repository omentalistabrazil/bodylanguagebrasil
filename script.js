const quizData = [
  {
    question: "Quando uma pessoa cruza os braços, geralmente isso indica:",
    options: [
      "Confiança e abertura",
      "Defensividade ou desconforto",
      "Felicidade extrema",
      "Indiferença total",
    ],
    correct: "Defensividade ou desconforto",
  },
  {
    question: "Manter contato visual constante pode indicar:",
    options: [
      "Interesse e sinceridade",
      "Desconfiança",
      "Entusiasmo excessivo",
      "Timidez",
    ],
    correct: "Interesse e sinceridade",
  },
  {
    question: "Quando uma pessoa tenta atrair sua atenção, mas seu corpo está voltado para longe, isso pode ser um sinal de:",
    options: [
      "Abertura e interesse",
      "Desinteresse ou fuga",
      "Confiança",
      "Tentativa de manipulação",
    ],
    correct: "Desinteresse ou fuga",
  },
  {
    question: "Qual é o principal objetivo do mentalismo?",
    options: [
      "Manipular diretamente os pensamentos de alguém",
      "Ler a mente de uma pessoa de forma precisa",
      "Fazer previsões sobre o futuro de alguém",
      "Utilizar pistas externas para influenciar o comportamento",
    ],
    correct: "Utilizar pistas externas para influenciar o comportamento",
  },
  {
    question: "Quando uma pessoa tem uma postura relaxada e descomplicada em uma conversa, isso geralmente indica:",
    options: [
      "Desinteresse",
      "Abertura e confiança",
      "Nervosismo",
      "Tentativa de manipulação",
    ],
    correct: "Abertura e confiança",
  },
  {
    question: "A maneira como uma pessoa reage ao apertar a mão de outra pode indicar:",
    options: [
      "Confiança e poder",
      "Medo ou insegurança",
      "Sentimento de superioridade",
      "Desejo de ser simpático",
    ],
    correct: "Confiança e poder",
  },
  {
    question: "Quando alguém mantém a cabeça inclinada para um lado, isso normalmente indica:",
    options: [
      "Desinteresse",
      "Atenção e empatia",
      "Confusão",
      "Arrogância",
    ],
    correct: "Atenção e empatia",
  },
  {
    question: "A forma como as pessoas posicionam seus pés em uma conversa pode revelar:",
    options: [
      "Sentimento de segurança",
      "Desejo de sair ou escapar",
      "Abertura para novas ideias",
      "Timidez",
    ],
    correct: "Desejo de sair ou escapar",
  },
  {
    question: "Quando uma pessoa finge estar interessada em uma conversa, mas seus olhos estão desviando, isso indica:",
    options: [
      "Falta de interesse",
      "Tentativa de ser educada",
      "Ansiedade",
      "Abertura para o diálogo",
    ],
    correct: "Falta de interesse",
  },
  {
    question: "Pessoas que sempre mantêm os braços abertos enquanto conversam geralmente demonstram:",
    options: [
      "Segurança e disposição",
      "Desconfiança",
      "Timidez",
      "Desejo de manipular",
    ],
    correct: "Segurança e disposição",
  },
  {
    question: "O que significa quando alguém olha para a boca de outra pessoa durante a conversa?",
    options: [
      "Falta de interesse",
      "Desejo de se aproximar ou beijar",
      "Confiança",
      "Medo",
    ],
    correct: "Desejo de se aproximar ou beijar",
  },
  {
    question: "Quando uma pessoa finge estar relaxada, mas está mexendo constantemente nas mãos ou pés, isso indica:",
    options: [
      "Conforto e segurança",
      "Ansiedade ou nervosismo",
      "Sinceridade",
      "Confiança",
    ],
    correct: "Ansiedade ou nervosismo",
  },
  {
    question: "Em persuasão, o uso de palavras como 'você' e 'nós' é eficaz porque:",
    options: [
      "Torna a pessoa mais receptiva e conectada",
      "Faz a pessoa se sentir desconfortável",
      "Apresenta uma abordagem agressiva",
      "Aumenta a confusão",
    ],
    correct: "Torna a pessoa mais receptiva e conectada",
  },
  {
    question: "O que significa quando uma pessoa endireita o corpo e se aproxima fisicamente de outra pessoa durante a conversa?",
    options: [
      "Desejo de mostrar superioridade",
      "Interesse e foco no outro",
      "Tentativa de intimidação",
      "Sentimento de insegurança",
    ],
    correct: "Interesse e foco no outro",
  },
  {
    question: "Quando alguém finge estar calmo mas está batendo os pés ou batendo com os dedos, isso pode indicar:",
    options: [
      "Confiança e segurança",
      "Impaciência ou frustração",
      "Tristeza",
      "Tensão controlada",
    ],
    correct: "Impaciência ou frustração",
  },
  {
    question: "O que geralmente significa quando alguém sorri enquanto fala, mas seus olhos estão frios e distantes?",
    options: [
      "Abertura e sinceridade",
      "Manipulação ou falsidade",
      "Felicidade genuína",
      "Confusão",
    ],
    correct: "Manipulação ou falsidade",
  },
  {
    question: "Quando uma pessoa olha para a direção da saída ou porta durante uma conversa, isso pode indicar:",
    options: [
      "Interesse pela conversa",
      "Desejo de sair ou evitar o assunto",
      "Curiosidade",
      "Confiança",
    ],
    correct: "Desejo de sair ou evitar o assunto",
  },
  {
    question: "Qual das opções abaixo é uma técnica comum de persuasão?",
    options: [
      "Criar uma sensação de urgência",
      "Fazer o outro se sentir inferior",
      "Rejeitar qualquer negociação",
      "Criar desconforto no outro",
    ],
    correct: "Criar uma sensação de urgência",
  },
  {
    question: "Quando uma pessoa mantém o corpo aberto e usa gestos largos, isso geralmente indica:",
    options: [
      "Desconfiança",
      "Abertura e honestidade",
      "Confusão",
      "Arrogância",
    ],
    correct: "Abertura e honestidade",
  },
  {
    question: "Se alguém constantemente balança a cabeça enquanto ouve você, isso geralmente significa:",
    options: [
      "Desinteresse",
      "Concordância e compreensão",
      "Tentativa de manipulação",
      "Confusão",
    ],
    correct: "Concordância e compreensão",
  },
  {
    question: "O que a posição das mãos na cintura geralmente indica em uma conversa?",
    options: [
      "Segurança e controle",
      "Confusão",
      "Medo ou insegurança",
      "Falta de confiança",
    ],
    correct: "Segurança e controle",
  },
  {
    question: "Quando uma pessoa altera sua voz de forma sutil, isso pode indicar:",
    options: [
      "Agressividade",
      "Tentativa de esconder a verdadeira emoção",
      "Alegria",
      "Confiança",
    ],
    correct: "Tentativa de esconder a verdadeira emoção",
  },
  {
    question: "O que significa quando alguém desvia rapidamente os olhos ao ser questionado?",
    options: [
      "Desinteresse",
      "Mentira ou evasão",
      "Felicidade",
      "Insegurança",
    ],
    correct: "Mentira ou evasão",
  },
  {
    question: "Quando uma pessoa começa a se mover em direção à saída ou porta durante uma conversa, isso geralmente indica:",
    options: [
      "Desinteresse em continuar a conversa",
      "Desejo de aprofundar a conversa",
      "Confiança",
      "Simpatia",
    ],
    correct: "Desinteresse em continuar a conversa",
  },
  {
    question: "Qual é a técnica do espelho em persuasão?",
    options: [
      "Imitar os gestos e comportamento de outra pessoa",
      "Fazer com que a outra pessoa se sinta desconfortável",
      "Criar uma sensação de urgência",
      "Oferecer vantagens inesperadas",
    ],
    correct: "Imitar os gestos e comportamento de outra pessoa",
  },
  {
    question: "Quando uma pessoa inclina a cabeça e olha para você diretamente, isso pode indicar:",
    options: [
      "Curiosidade ou interesse genuíno",
      "Desinteresse",
      "Tentativa de manipulação",
      "Arrogância",
    ],
    correct: "Curiosidade ou interesse genuíno",
  },
  {
    question: "Quando alguém fala em voz baixa ou suave durante uma conversa, isso pode indicar:",
    options: [
      "Confiança",
      "Insegurança",
      "Desinteresse",
      "Felicidade",
    ],
    correct: "Insegurança",
  },
  {
    question: "A leitura fria pode ser usada para:",
    options: [
      "Advinhar o futuro",
      "Criar uma conexão com outra pessoa e dar uma falsa impressão de conhecimento",
      "Manipular a mente de alguém",
      "Obter informações secretas",
    ],
    correct: "Criar uma conexão com outra pessoa e dar uma falsa impressão de conhecimento",
  },
  {
    question: "Quando uma pessoa se aproxima fisicamente de você sem invadir o espaço pessoal, isso geralmente indica:",
    options: [
      "Abertura e conforto",
      "Tentativa de intimidação",
      "Desinteresse",
      "Arrogância",
    ],
    correct: "Abertura e conforto",
  },
  {
    question: "Quando alguém mantém os pés apontados para a porta, isso geralmente significa:",
    options: [
      "Desejo de conversar mais",
      "Desejo de escapar ou terminar a conversa",
      "Interesse genuíno",
      "Timidez",
    ],
    correct: "Desejo de escapar ou terminar a conversa",
  },
];
quizData.push(
  {
    question: "Quando alguém toca frequentemente no próprio rosto durante uma conversa, isso pode indicar:",
    options: [
      "Confiança",
      "Nervosismo ou incerteza",
      "Felicidade",
      "Concentração extrema",
    ],
    correct: "Nervosismo ou incerteza",
  },
  {
    question: "O que significa quando alguém inclina o corpo para frente enquanto conversa?",
    options: [
      "Desinteresse",
      "Interesse e engajamento",
      "Tentativa de manipulação",
      "Confusão",
    ],
    correct: "Interesse e engajamento",
  },
  {
    question: "Desviar os olhos repetidamente durante uma conversa pode ser um sinal de:",
    options: [
      "Desonestidade ou desconforto",
      "Atenção plena",
      "Empatia",
      "Autoconfiança",
    ],
    correct: "Desonestidade ou desconforto",
  },
  {
    question: "Qual é a intenção por trás do uso de pausas estratégicas em uma conversa persuasiva?",
    options: [
      "Criar tensão e expectativa",
      "Demonstrar nervosismo",
      "Interromper o fluxo da conversa",
      "Confundir o ouvinte",
    ],
    correct: "Criar tensão e expectativa",
  },
  {
    question: "Quando alguém mantém as mãos visíveis e abertas enquanto conversa, isso geralmente indica:",
    options: [
      "Honestidade e abertura",
      "Insegurança",
      "Arrogância",
      "Falta de interesse",
    ],
    correct: "Honestidade e abertura",
  }
);
quizData.push(
  {
    question: "Na leitura fria, fazer uma afirmação genérica como 'Você às vezes sente que está sendo mal compreendido' é eficaz porque:",
    options: [
      "Apela a experiências comuns",
      "Demonstra conhecimento profundo",
      "Faz a pessoa se sentir insegura",
      "É completamente preciso",
    ],
    correct: "Apela a experiências comuns",
  },
  {
    question: "A técnica de 'desarmar objeções' na leitura fria é usada para:",
    options: [
      "Reforçar uma conexão emocional",
      "Evitar que a outra pessoa duvide",
      "Confundir a outra pessoa",
      "Demonstrar superioridade",
    ],
    correct: "Evitar que a outra pessoa duvide",
  },
  {
    question: "Uma estratégia comum de leitura fria é observar:",
    options: [
      "A linguagem corporal e expressões faciais",
      "A altura e peso da pessoa",
      "O tom de voz apenas",
      "A cor da roupa da pessoa",
    ],
    correct: "A linguagem corporal e expressões faciais",
  },
  {
    question: "O que significa usar a 'técnica de Barnum' em leitura fria?",
    options: [
      "Fazer afirmações amplas que podem se aplicar a qualquer pessoa",
      "Fazer perguntas altamente específicas",
      "Focar apenas em informações negativas",
      "Evitar contato visual",
    ],
    correct: "Fazer afirmações amplas que podem se aplicar a qualquer pessoa",
  },
  {
    question: "Por que a leitura fria depende tanto da validação do ouvinte?",
    options: [
      "Para ajustar as afirmações com base nas reações",
      "Para demonstrar confiança",
      "Para intimidar o ouvinte",
      "Para criar desconfiança",
    ],
    correct: "Para ajustar as afirmações com base nas reações",
  },
  {
    question: "Uma pessoa que está usando leitura fria pode frequentemente:",
    options: [
      "Fazer perguntas para obter informações adicionais",
      "Evitar fazer contato visual",
      "Falar rapidamente para confundir",
      "Fazer declarações absolutas",
    ],
    correct: "Fazer perguntas para obter informações adicionais",
  },
  {
    question: "O que significa 'pescar informações' na leitura fria?",
    options: [
      "Fazer perguntas vagas para obter respostas detalhadas",
      "Forçar alguém a confessar algo",
      "Evitar perguntas diretas",
      "Fingir conhecimento sobre um assunto",
    ],
    correct: "Fazer perguntas vagas para obter respostas detalhadas",
  },
  {
    question: "Afirmações contraditórias em leitura fria podem ser eficazes porque:",
    options: [
      "Aumentam a probabilidade de acerto",
      "Confundem o ouvinte",
      "Mostram confiança",
      "Impressionam pela precisão",
    ],
    correct: "Aumentam a probabilidade de acerto",
  },
  {
    question: "Uma abordagem típica na leitura fria é:",
    options: [
      "Fazer generalizações e ajustá-las conforme a resposta",
      "Focar apenas em informações negativas",
      "Usar uma linguagem complexa para confundir",
      "Evitar qualquer tipo de pergunta",
    ],
    correct: "Fazer generalizações e ajustá-las conforme a resposta",
  },
  {
    question: "Por que a leitura fria é frequentemente associada a ilusionistas e mentalistas?",
    options: [
      "Porque cria uma ilusão de leitura de mente",
      "Porque envolve truques de mágica",
      "Porque usa ferramentas físicas como cartas",
      "Porque não exige interação com o público",
    ],
    correct: "Porque cria uma ilusão de leitura de mente",
  }
);quizData.push({
    question: "Quando uma pessoa toca o rosto enquanto fala, isso pode indicar:",
    options: [
        "A) Confiança",
        "B) Desconforto ou mentira",
        "C) Abertura emocional",
        "D) Interesse genuíno"
    ],
    correct: "B) Desconforto ou mentira"
});

quizData.push({
    question: "A pessoa que cruza as pernas enquanto está de pé pode estar demonstrando:",
    options: [
        "A) Confiança",
        "B) Tentativa de se proteger ou defensividade",
        "C) Abertura para a conversa",
        "D) Relaxamento"
    ],
    correct: "B) Tentativa de se proteger ou defensividade"
});

quizData.push({
    question: "Quando uma pessoa mantém o olhar fixo por muito tempo, isso pode ser um sinal de:",
    options: [
        "A) Conflito ou hostilidade",
        "B) Interesse e sinceridade",
        "C) Desinteresse",
        "D) Tentativa de manipulação"
    ],
    correct: "A) Conflito ou hostilidade"
});

quizData.push({
    question: "Qual é o significado de uma pessoa que movimenta constantemente as mãos durante a conversa?",
    options: [
        "A) Sinal de estresse ou impaciência",
        "B) Relaxamento e confiança",
        "C) Interesse genuíno",
        "D) Abertura emocional"
    ],
    correct: "A) Sinal de estresse ou impaciência"
});

quizData.push({
    question: "Quando alguém fica com os braços abertos durante uma conversa, isso pode ser um sinal de:",
    options: [
        "A) Defensividade",
        "B) Confiança e abertura",
        "C) Frustração",
        "D) Desinteresse"
    ],
    correct: "B) Confiança e abertura"
});

quizData.push({
    question: "A maneira como uma pessoa segura o copo em uma reunião pode indicar:",
    options: [
        "A) Confiança e controle",
        "B) Desinteresse e desconforto",
        "C) Nervosismo ou ansiedade",
        "D) Abertura emocional"
    ],
    correct: "C) Nervosismo ou ansiedade"
});

quizData.push({
    question: "Quando alguém anda de forma relaxada com as mãos nos bolsos, isso geralmente indica:",
    options: [
        "A) Confiança e tranquilidade",
        "B) Frustração e insegurança",
        "C) Tentativa de esconder algo",
        "D) Abertura e descontração"
    ],
    correct: "A) Confiança e tranquilidade"
});

quizData.push({
    question: "Qual é o significado de uma pessoa que evita o contato visual e olha para baixo frequentemente?",
    options: [
        "A) Desinteresse e evasão",
        "B) Nervosismo ou insegurança",
        "C) Conflito ou hostilidade",
        "D) Interesse genuíno"
    ],
    correct: "B) Nervosismo ou insegurança"
});

quizData.push({
    question: "Quando alguém toca o cabelo enquanto fala, isso pode indicar:",
    options: [
        "A) Confiança e segurança",
        "B) Nervosismo ou insegurança",
        "C) Interesse genuíno",
        "D) Arrogância"
    ],
    correct: "B) Nervosismo ou insegurança"
});

quizData.push({
    question: "Uma postura ereta com ombros para trás geralmente demonstra:",
    options: [
        "A) Desconfiança",
        "B) Confiança e domínio",
        "C) Frustração",
        "D) Desinteresse"
    ],
    correct: "B) Confiança e domínio"
});quizData.push(
  {
    question: "O que é o efeito de primazia em persuasão?",
    options: [
      "A tendência de lembrar mais das informações apresentadas primeiro",
      "A tendência de lembrar mais das informações finais",
      "A capacidade de persuadir alguém com base na repetição",
      "A habilidade de influenciar com o uso de emoções"
    ],
    correct: "A tendência de lembrar mais das informações apresentadas primeiro",
  },
  {
    question: "Como a fórmula da amizade é aplicada na persuasão?",
    options: [
      "Criando uma conexão emocional através de similaridade",
      "Usando linguagem agressiva para convencer",
      "Manipulando as emoções do outro com frases curtas",
      "Impondo sua opinião com autoridade"
    ],
    correct: "Criando uma conexão emocional através de similaridade",
  },
  {
    question: "Qual dos seguintes elementos é fundamental para criar um vínculo de amizade com alguém?",
    options: [
      "Abertura e empatia",
      "Mentiras suaves",
      "Isolamento",
      "Evitar contato visual"
    ],
    correct: "Abertura e empatia",
  },
  {
    question: "O que acontece quando uma pessoa tem uma impressão inicial positiva sobre outra?",
    options: [
      "Ela tende a confiar mais e a ser mais persuasível",
      "Ela cria uma barreira mental contra a persuasão",
      "Ela começa a questionar a sinceridade da outra pessoa",
      "Ela perde interesse"
    ],
    correct: "Ela tende a confiar mais e a ser mais persuasível",
  },
  {
    question: "A técnica de 'espelhamento' em persuasão consiste em:",
    options: [
      "Imitar os gestos e a postura da outra pessoa",
      "Fazer com que a pessoa se sinta inferior",
      "Alterar a voz para um tom mais grave",
      "Ignorar as emoções do outro"
    ],
    correct: "Imitar os gestos e a postura da outra pessoa",
  },
  {
    question: "Em um processo de persuasão, a reciprocidade pode ser criada ao:",
    options: [
      "Fazer algo de bom para a outra pessoa, esperando algo em troca",
      "Ignorar as necessidades do outro para focar nos próprios interesses",
      "Mostrar desinteresse nas opiniões da outra pessoa",
      "Usar uma linguagem agressiva para intimidar"
    ],
    correct: "Fazer algo de bom para a outra pessoa, esperando algo em troca",
  },
  {
    question: "O que é a técnica de 'anexação emocional' na persuasão?",
    options: [
      "Criar uma ligação emocional para gerar empatia",
      "Usar a lógica fria para convencer",
      "Fazer com que a pessoa se sinta mal com sua decisão",
      "Manipular os sentimentos do outro sem transparência"
    ],
    correct: "Criar uma ligação emocional para gerar empatia",
  },
  {
    question: "O que faz o efeito de primazia ser eficaz?",
    options: [
      "A primeira impressão é difícil de mudar",
      "A última impressão tem mais peso",
      "As primeiras informações são esquecidas mais rapidamente",
      "A primeira impressão é sempre negativa"
    ],
    correct: "A primeira impressão é difícil de mudar",
  },
  {
    question: "Como o princípio da consistência pode ser usado em persuasão?",
    options: [
      "Fazendo com que as pessoas se comprometam a algo pequeno antes de pedir algo maior",
      "Oferecendo muitas opções para que as pessoas escolham",
      "Forçando uma decisão sem permitir reflexão",
      "Alterando constantemente a mensagem persuasiva"
    ],
    correct: "Fazendo com que as pessoas se comprometam a algo pequeno antes de pedir algo maior",
  },
  {
    question: "Em uma negociação, qual a vantagem de começar com um pedido mais ousado?",
    options: [
      "As pessoas tendem a ceder a um pedido maior depois de receberem uma primeira oferta ousada",
      "A pessoa sente que a negociação está sendo desonesta",
      "O pedido é menos provável de ser aceito",
      "A pessoa fica mais desconfiada e resistente"
    ],
    correct: "As pessoas tendem a ceder a um pedido maior depois de receberem uma primeira oferta ousada",
  },
  {
    question: "Qual é a melhor forma de construir rapport com alguém em uma conversa persuasiva?",
    options: [
      "Mostrar interesse genuíno pela pessoa e suas opiniões",
      "Fazer perguntas difíceis e provocativas",
      "Fazer a pessoa sentir-se inferior para obter controle",
      "Focar apenas em seus próprios interesses"
    ],
    correct: "Mostrar interesse genuíno pela pessoa e suas opiniões",
  },
  {
    question: "Por que a empatia é importante em persuasão?",
    options: [
      "Porque cria um vínculo emocional que facilita a persuasão",
      "Porque faz a pessoa se sentir desconfortável",
      "Porque faz com que as pessoas revelem segredos",
      "Porque leva as pessoas a se afastarem de você"
    ],
    correct: "Porque cria um vínculo emocional que facilita a persuasão",
  },
  {
    question: "Em persuasão, qual é o efeito de 'anexação social'?",
    options: [
      "A tendência das pessoas a serem influenciadas por quem elas consideram parte do seu grupo social",
      "A habilidade de enganar as pessoas com argumentos lógicos",
      "O uso de recompensas financeiras para persuadir alguém",
      "A tendência de ignorar as necessidades dos outros em favor de interesses próprios"
    ],
    correct: "A tendência das pessoas a serem influenciadas por quem elas consideram parte do seu grupo social",
  },
  {
    question: "Em persuasão, qual é o impacto de oferecer uma escassez percebida?",
    options: [
      "Aumenta o valor percebido da oferta e incentiva a ação imediata",
      "Faz com que a oferta pareça menos valiosa",
      "Cria uma sensação de falta de controle sobre a situação",
      "Reduz a confiança na oferta"
    ],
    correct: "Aumenta o valor percebido da oferta e incentiva a ação imediata",
  }
);quizData.push(
  {
    question: "O que é a técnica de 'afirmação social' em persuasão?",
    options: [
      "Mostrar que outras pessoas já tomaram a mesma decisão",
      "Dizer que você está sempre certo",
      "Usar argumentos emocionais sem lógica",
      "Focar apenas em um único ponto de venda"
    ],
    correct: "Mostrar que outras pessoas já tomaram a mesma decisão",
  },
  {
    question: "Qual a principal vantagem de usar o efeito de primazia em um discurso persuasivo?",
    options: [
      "As pessoas se lembram mais da primeira informação apresentada",
      "As últimas informações são as mais lembradas",
      "As pessoas se esquecem mais rapidamente da primeira parte do discurso",
      "As informações intermediárias são mais relevantes"
    ],
    correct: "As pessoas se lembram mais da primeira informação apresentada",
  },
  {
    question: "Em persuasão, o que significa 'consistência'?",
    options: [
      "A tendência de manter ações e decisões que estão em linha com escolhas anteriores",
      "A habilidade de mudar constantemente de opinião",
      "A persuasão que ignora a opinião dos outros",
      "A técnica de alterar a narrativa a cada oportunidade"
    ],
    correct: "A tendência de manter ações e decisões que estão em linha com escolhas anteriores",
  },
  {
    question: "A técnica de 'apresentação de autoridade' em persuasão é usada para:",
    options: [
      "Convencer alguém usando figuras de autoridade como referências",
      "Manipular com base em emoções",
      "Criar uma sensação de medo e urgência",
      "Distorcer informações para convencer"
    ],
    correct: "Convencer alguém usando figuras de autoridade como referências",
  },
  {
    question: "O que é o princípio da 'escassez' em persuasão?",
    options: [
      "As pessoas tendem a valorizar mais aquilo que é raro ou difícil de obter",
      "As pessoas sempre preferem opções ilimitadas",
      "A escassez cria desinteresse e medo",
      "A escassez deve ser evitada em qualquer persuasão"
    ],
    correct: "As pessoas tendem a valorizar mais aquilo que é raro ou difícil de obter",
  },
  {
    question: "Em que tipo de situação o efeito de primazia é mais eficaz?",
    options: [
      "Quando se quer que alguém tome uma decisão rápida",
      "Quando há uma série de argumentos e o impacto da primeira impressão é crucial",
      "Quando a pessoa está disposta a ouvir muitas alternativas",
      "Quando se tenta manter a pessoa neutra durante a conversa"
    ],
    correct: "Quando há uma série de argumentos e o impacto da primeira impressão é crucial",
  },
  {
    question: "Como o princípio de 'reciprocidade' pode ser usado de forma ética em persuasão?",
    options: [
      "Ao oferecer algo de valor para outra pessoa e esperar que ela retribua de forma justa",
      "Ao enganar alguém com um favor para obter algo em troca",
      "Ao manipular as escolhas de alguém com recompensas materiais",
      "Ao usar pressão emocional para forçar uma retribuição"
    ],
    correct: "Ao oferecer algo de valor para outra pessoa e esperar que ela retribua de forma justa",
  },
  {
    question: "O que é a técnica de 'criar urgência' em persuasão?",
    options: [
      "Fazer a pessoa acreditar que deve agir rapidamente para não perder uma oportunidade",
      "Criar uma sensação de pânico sem motivo real",
      "Atrasar uma decisão de forma estratégica",
      "Fazer com que a pessoa ignore suas opções por completo"
    ],
    correct: "Fazer a pessoa acreditar que deve agir rapidamente para não perder uma oportunidade",
  },
  {
    question: "Quando uma pessoa se sente 'ouvida' durante uma conversa, qual é o impacto em uma negociação persuasiva?",
    options: [
      "Ela tende a se tornar mais receptiva e confiante nas soluções propostas",
      "Ela perde o interesse nas propostas apresentadas",
      "Ela sente que a persuasão não é genuína",
      "Ela se torna mais resistente à proposta"
    ],
    correct: "Ela tende a se tornar mais receptiva e confiante nas soluções propostas",
  },
  {
    question: "Qual das alternativas abaixo é uma boa prática ao usar a técnica de persuasão baseada na similaridade?",
    options: [
      "Encontrar pontos em comum para criar uma conexão emocional genuína",
      "Fazer a outra pessoa acreditar que são idênticos em todos os aspectos",
      "Alterar a própria personalidade para agradar",
      "Usar as semelhanças de forma superficial e manipuladora"
    ],
    correct: "Encontrar pontos em comum para criar uma conexão emocional genuína",
  }
);
const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const errorAlert = document.createElement("div"); // Criar o alerta de erro
errorAlert.classList.add("error-alert");
const correctAlert = document.createElement("div"); // Criar o alerta de resposta correta
correctAlert.classList.add("correct-alert");
let currentQuestionIndex = 0;

function loadQuiz() {
  const currentQuestion = quizData[currentQuestionIndex];
  const quizBlock = document.createElement("div");
  quizBlock.classList.add("quiz-block");
  quizBlock.innerHTML = `
    <p>${currentQuestionIndex + 1}. ${currentQuestion.question}</p>
    ${currentQuestion.options
      .map(
        (option) =>
          `<label>
            <input type="radio" name="question${currentQuestionIndex}" value="${option}">
            ${option}
          </label>`
      )
      .join("")}
  `;
  quizContainer.innerHTML = '';  // Limpa o conteúdo da pergunta anterior
  quizContainer.appendChild(quizBlock);
  quizContainer.appendChild(errorAlert); // Adiciona o alerta de erro
  quizContainer.appendChild(correctAlert); // Adiciona o alerta de acerto
}

function calculateScore() {
  let score = 0;
  const selectedOption = document.querySelector(
    `input[name="question${currentQuestionIndex}"]:checked`
  );
  if (selectedOption && selectedOption.value === quizData[currentQuestionIndex].correct) {
    score++;
  }
  return score;
}

function showResult(score) {
  scoreDisplay.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
  resultContainer.classList.remove("hidden");
}

function nextQuestion() {
  const score = calculateScore();
  if (score > 0) {
    // Se acertou, exibe o alerta de acerto e avança para a próxima questão
    correctAlert.textContent = "Resposta correta!";
    correctAlert.style.display = "block"; // Exibe o alerta de acerto
    setTimeout(() => {
      correctAlert.style.display = "none"; // Esconde o alerta após 2 segundos
    }, 2000);
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuiz();
    } else {
      showResult(score);
    }
  } else {
    // Se errou, exibe o alerta de erro
    errorAlert.textContent = "Resposta incorreta. Tente novamente!";// Se errou, exibe o alerta de erro
    errorAlert.textContent = "Resposta incorreta. Tente novamente!";
    errorAlert.style.display = "block"; // Exibe o alerta de erro
    setTimeout(() => {
      errorAlert.style.display = "none"; // Esconde o alerta após 2 segundos
    }, 2000);
  }
}

submitButton.addEventListener("click", () => {
  nextQuestion();
});

loadQuiz();  // Carrega a primeira questão
document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;

    if (name.trim() !== '' && commentText.trim() !== '') {
        const commentList = document.getElementById('comments-list');
        const newComment = document.createElement('div');
        newComment.classList.add('comment-item');

        // Criando a estrutura do novo comentário
        const commentName = document.createElement('div');
        commentName.classList.add('name');
        commentName.textContent = name;  // Exibe o nome da pessoa

        const commentContent = document.createElement('div');
        commentContent.classList.add('content');
        commentContent.textContent = commentText;  // Exibe o texto do comentário

        newComment.appendChild(commentName);
        newComment.appendChild(commentContent);

        // Adiciona o novo comentário à lista
        commentList.appendChild(newComment);

        // Limpa os campos de comentário após enviar
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});let selectedAvatar = ''; // Variável para armazenar o avatar selecionado

// Função para selecionar o avatar
function selectAvatar(avatar) {
    selectedAvatar = avatar;
    document.getElementById('user-avatar').src = avatar; // Define o avatar no cabeçalho
    document.getElementById('start-quiz').style.display = 'inline-block'; // Mostra o botão "Começar Quiz"
    document.getElementById('avatar-screen').style.display = 'none'; // Esconde a tela de seleção de avatar
    document.getElementById('quiz-screen').style.display = 'block'; // Mostra a tela do quiz
}document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('section, #avatar-screen, #quiz-screen');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Esconde todas as seções
            sections.forEach(section => section.classList.add('hidden'));

            // Mostra a seção correspondente
            const target = document.querySelector(link.getAttribute('href'));
            target.classList.remove('hidden');
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Lidar com o envio de novos comentários
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comments-list");

    commentForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const commentText = document.getElementById("comment").value;

        const comment = document.createElement("div");
        comment.classList.add("comment");

        // Criar estrutura para o comentário
        comment.innerHTML = `
            <div class="name">${name}</div>
            <div class="text">${commentText}</div>
            <button class="reply-button">Responder</button>
            <div class="reply">
                <textarea placeholder="Escreva sua resposta..." required></textarea>
                <button class="submit-reply">Enviar Resposta</button>
            </div>
        `;

        // Adicionar o comentário à lista
        commentList.appendChild(comment);

        // Limpar o formulário
        commentForm.reset();

        // Lidar com o clique no botão de resposta
        const replyButton = comment.querySelector(".reply-button");
        const replySection = comment.querySelector(".reply");
        replyButton.addEventListener("click", function() {
            replySection.style.display = replySection.style.display === "block" ? "none" : "block";
        });

        // Lidar com o envio da resposta
        const submitReplyButton = comment.querySelector(".submit-reply");
        submitReplyButton.addEventListener("click", function() {
            const replyText = replySection.querySelector("textarea").value;

            if (replyText) {
                const reply = document.createElement("div");
                reply.classList.add("reply-text");
                reply.innerHTML = `
                    <div class="name">Você</div>
                    <div class="text">${replyText}</div>
                `;
                replySection.appendChild(reply);
                replySection.querySelector("textarea").value = "";
            }
        });
    });
});