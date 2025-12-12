// CAMINHO RELATIVO: src/components/Resume/styles.js
// Importa styled-components
import styled from "styled-components"

// Componente Container para o resumo
export const Container = styled.div
`
    max-width: 1120px; /* Largura máxima */
    width: 98%; /* Largura de 98% do elemento pai */
    margin: 0 auto; /* Centraliza horizontalmente */
    display: flex; /* Usa Flexbox */
    gap: 20px; /* Espaço de 20px entre os itens */
    margin-top: -50px; /* Margem negativa para sobrepor o cabeçalho */
    justify-content: space-around; /* Distribui os itens com espaço igual ao redor */
`