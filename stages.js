export const stages = [
    {
        narrative: "Você está em uma cidade nebulosa à noite, as ruas estão desertas e o som de passos ecoa ao longe.",
        questions: [
            {
                question: "Você encontra um suspeito em uma esquina escura. O que faz?",
                choices: [
                    { text: "Abordar o suspeito e fazer perguntas", isCorrect: true },
                    { text: "Seguir o suspeito de longe", isCorrect: false },
                    { text: "Esperar por mais informações antes de agir", isCorrect: false }
                ]
            },
            {
                question: "Você encontra uma carta enigmática em um beco. O que faz?",
                choices: [
                    { text: "Decifrar a carta imediatamente", isCorrect: true },
                    { text: "Ignorar a carta e seguir em frente", isCorrect: false },
                    { text: "Levar a carta até seu superior para análise", isCorrect: true }
                ]
            },
            {
                question: "Você encontra uma testemunha chave. O que faz?",
                choices: [
                    { text: "Convencer a testemunha a falar", isCorrect: true },
                    { text: "Ameaçar a testemunha para obter informações", isCorrect: false },
                    { text: "Deixar a testemunha ir e tentar outra abordagem", isCorrect: false }
                ]
            }
        ]
    },
    {
        narrative: "Você chega a um antigo armazém onde o caso parece se concentrar.",
        questions: [
            {
                question: "Há uma entrada secreta e uma porta trancada. O que faz?",
                choices: [
                    { text: "Tentar abrir a porta com ferramentas", isCorrect: false },
                    { text: "Procurar a entrada secreta", isCorrect: true },
                    { text: "Voltar e procurar ajuda", isCorrect: false }
                ]
            },
            {
                question: "Dentro do armazém, você encontra um corpo e uma pista. O que faz?",
                choices: [
                    { text: "Examinar o corpo com cuidado", isCorrect: true },
                    { text: "Ignorar o corpo e focar na pista", isCorrect: true },
                    { text: "Chamar a polícia imediatamente", isCorrect: false }
                ]
            },
            {
                question: "Você encontra um diário com informações sobre o caso. O que faz?",
                choices: [
                    { text: "Ler o diário cuidadosamente", isCorrect: true },
                    { text: "Ignorar o diário e procurar por mais pistas", isCorrect: false },
                    { text: "Mostrar o diário para um aliado", isCorrect: true }
                ]
            }
        ]
    },
    {
        narrative: "Você segue a pista até uma mansão isolada.",
        questions: [
            {
                question: "Você encontra um cofre trancado. O que faz?",
                choices: [
                    { text: "Tentar abrir o cofre com ferramentas", isCorrect: false },
                    { text: "Buscar uma chave para o cofre", isCorrect: true },
                    { text: "Ignorar o cofre e continuar a busca", isCorrect: false }
                ]
            },
            {
                question: "Você finalmente encontra o criminoso. O que faz?",
                choices: [
                    { text: "Enfrentar o criminoso diretamente", isCorrect: false },
                    { text: "Tentar capturar o criminoso com uma armadilha", isCorrect: true },
                    { text: "Chamar a polícia para prender o criminoso", isCorrect: false }
                ]
            }
        ]
    },
    // Fase 4
    {
        narrative: "Você recebe uma pista importante que o leva a um depósito abandonado.",
        questions: [
            {
                question: "No depósito, há várias caixas suspeitas. O que faz?",
                choices: [
                    { text: "Inspecionar cuidadosamente cada caixa", isCorrect: true },
                    { text: "Ignorar as caixas e procurar por documentos", isCorrect: false },
                    { text: "Chamar reforços imediatamente", isCorrect: false }
                ]
            },
            {
                question: "Você encontra um objeto suspeito em uma das caixas. O que faz?",
                choices: [
                    { text: "Levar o objeto para análise", isCorrect: true },
                    { text: "Deixar o objeto onde está", isCorrect: false },
                    { text: "Enviar uma foto para seu parceiro", isCorrect: true }
                ]
            }
        ]
    },
    // Fase 5
    {
        narrative: "Com novas evidências, você volta ao centro da cidade para conectar os pontos.",
        questions: [
            {
                question: "Você encontra um informante no bar. O que faz?",
                choices: [
                    { text: "Conversar e extrair informações", isCorrect: true },
                    { text: "Ignorar o informante", isCorrect: false },
                    { text: "Ameaçar o informante para obter respostas", isCorrect: false }
                ]
            },
            {
                question: "O informante menciona um local suspeito. O que faz?",
                choices: [
                    { text: "Investigar o local mencionado", isCorrect: true },
                    { text: "Desconsiderar a informação", isCorrect: false },
                    { text: "Voltar e reavaliar o caso", isCorrect: true }
                ]
            }
        ]
    },
    // Fase 6
    {
        narrative: "Você se dirige ao local final onde o criminoso se esconde.",
        questions: [
            {
                question: "Ao chegar, você percebe que o local está fortemente vigiado. O que faz?",
                choices: [
                    { text: "Planejar uma infiltração cuidadosa", isCorrect: true },
                    { text: "Tentar uma entrada direta", isCorrect: false },
                    { text: "Esperar o momento certo para agir", isCorrect: true }
                ]
            },
            {
                question: "Dentro do local, você confronta o criminoso. O que faz?",
                choices: [
                    { text: "Confrontar o criminoso e capturá-lo", isCorrect: true },
                    { text: "Chamar a polícia imediatamente", isCorrect: false },
                    { text: "Tentar negociar uma rendição", isCorrect: false }
                ]
            }
        ]
    }
];
