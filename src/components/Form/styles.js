// CAMINHO RELATIVO: src/components/Form/styles.js
// Importa a biblioteca styled-components para criar componentes estilizados
import styled from "styled-components"

// Cria e exporta um componente estilizado Container
// styled.div: cria um componente div com estilos CSS
export const Container = styled.div
// Template string com estilos CSS
`
    max-width: 1120px; /* Largura máxima do container */
    width: 98%; /* Largura relativa (98% do elemento pai) */
    margin: 20px auto; /* Margem: 20px top/bottom, auto left/right (centraliza) */
    display: flex; /* Usa Flexbox para layout */
    gap: 10px; /* Espaço entre os elementos filhos */
    justify-content: space-around; /* Distribui os filhos com espaço igual ao redor */
    background-color: #fff; /* Cor de fundo branca */
    box-shadow: 0 0 5px #ccc; /* Sombra suave ao redor */
    border-radius: 5px; /* Bordas arredondadas */
    padding: 15px 0px; /* Padding vertical 15px, horizontal 0 */

    /* Media query para telas com largura máxima de 750px */
    @media (max-width: 750px)
    {
        display: grid; /* Muda o display para grid em telas menores */
    }
`

// Componente para o container de cada input
export const InputContent = styled.div
`
    display: flex; /* Usa Flexbox */
    flex-direction: column; /* Organiza os filhos em coluna (vertical) */
`

// Componente para as labels
export const Label = styled.label
/* Vazio - herda estilos padrão da label */
``

// Componente para os inputs
export const Input = styled.input
`
    padding: 5px 10px; /* Padding interno: 5px vertical, 10px horizontal */
    border-radius: 5px; /* Bordas arredondadas */
    border: 1px solid #ccc; /* Borda cinza clara de 1px */
    outline: none; /* Remove contorno padrão ao focar */
    font-size: 15px; /* Tamanho da fonte */
`

// Componente para o grupo de radio buttons
export const RadioGroup = styled.div
`
    display: flex; /* Flexbox para alinhar radio buttons horizontalmente */
    align-items: center; /* Centraliza verticalmente os itens */

    /* Estiliza todos os inputs dentro do RadioGroup */
    input
    {
        margin-left: 20px; /* Margem à esquerda do primeiro radio button */
        accent-color: black; /* Cor do radio button quando selecionado */
        margin-top: 0; /* Remove margem superior padrão */
        margin-right: 5px; /* Margem à direita entre radio button e label */
    }
`

// Componente para o botão
export const Button = styled.button
`
    padding: 5px 10px; /* Padding interno */
    border: none; /* Remove borda padrão */
    border-radius: 5px; /* Bordas arredondadas */
    background-color: teal; /* Cor de fundo azul esverdeado */
    color: white; /* Cor do texto branco */
    cursor: pointer; /* Muda cursor para mãozinha ao passar sobre */
`