// CAMINHO RELATIVO: src/components/Header/styles.js
// Importa styled-components e a função keyframes para criar animações
import styled, {keyframes} from "styled-components"

// Componente Container para o cabeçalho
export const Container = styled.div
`
    height: 150px; /* Altura fixa de 150px */
    text-align: center; /* Centraliza o texto horizontalmente */
    background: teal; /* Cor de fundo azul esverdeado (teal) */
`

// Componente para o elemento de cabeçalho
export const Header = styled.h1
/* Vazio - herda estilos de h1 */
``

// Define uma animação chamada rotateText usando keyframes
// keyframes: define os passos de uma animação CSS
const rotateText = keyframes
`
    0% {transform: rotateY(0deg);} /* Início: sem rotação no eixo Y */
    100% {transform: rotateY(360deg);} /* Fim: rotação completa de 360 graus no eixo Y */
`

// Componente para o título com animação
export const Title = styled.div
`
    padding-top: 20px; /* Padding superior de 20px */
    color: #fff; /* Cor do texto branco */
    
    /* Aplica a animação rotateText:
       - Duração: 4 segundos
       - Timing function: linear (velocidade constante)
       - Iteração: infinite (repete infinitamente) */
    animation: ${rotateText} 4s linear infinite;
`