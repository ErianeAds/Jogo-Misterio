# Jogo de Mistério - Detetive

Este é um jogo interativo de mistério onde o jogador assume o papel de um detetive. Durante o jogo, o jogador fará escolhas estratégicas para resolver um caso misterioso, enfrentando desafios e coletando pistas ao longo do caminho. O objetivo é avançar pelas fases e coletar o maior número de pistas possíveis para resolver o caso antes de perder todas as vidas.

## Funcionalidades

- **Escolhas interativas**: O jogador pode escolher entre várias alternativas que afetam a pontuação e a quantidade de vidas.
- **Sistema de Pontuação e Vidas**: O jogador acumula pontos com escolhas corretas e perde vidas com escolhas erradas.
- **Transições entre fases**: Ao passar de uma fase para outra, uma mensagem de transição é exibida.
- **Plano de fundo dinâmico**: A cada fase, o plano de fundo muda automaticamente com uma imagem aleatória retirada da API do Pexels.
- **Dicas**: O jogador pode obter dicas ao longo do jogo, que são geradas aleatoriamente pela API do Quotable.

## Tecnologias Utilizadas

- **HTML**: Para a estrutura do jogo e exibição de conteúdo.
- **CSS**: Para estilizar a interface do jogo.
- **JavaScript**: Para a lógica do jogo, interatividade e integração com APIs externas.
- **APIs externas**:
  - [Pexels API](https://www.pexels.com/api/) - Para obter imagens de plano de fundo aleatórias.
  - [Quotable API](https://quotable.io/) - Para gerar citações inspiradoras como dicas no jogo.

## Como Jogar

1. **Iniciar o Jogo**: Clique no botão "Iniciar" para começar a jogar.
2. **Fazendo Escolhas**: Durante o jogo, você será apresentado a várias perguntas com opções de resposta. Cada escolha afetará a sua pontuação e vidas.
3. **Passando para a Próxima Fase**: Quando você completar todas as perguntas de uma fase, uma mensagem de transição será exibida, e você passará para a próxima fase com um novo plano de fundo.
4. **Obter Dicas**: Você pode clicar no botão "Obter Dica" a qualquer momento para receber uma dica inspiradora que pode ajudar em suas escolhas.
5. **Fim do Jogo**: O jogo termina quando o jogador perde todas as vidas ou conclui todas as fases do caso.

## Instruções para Rodar Localmente

### 1. Baixar o Repositório

Clone o repositório para a sua máquina local:

```bash
git clone https://github.com/seu-usuario/jogo-detetive.git
