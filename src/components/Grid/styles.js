// CAMINHO RELATIVO: src/components/Grid/styles.js
// Importa styled-components
import styled from "styled-components"

// Componente para a tabela
export const Table = styled.table`
    width: 98%; /* Largura de 98% do elemento pai */
    background-color: #fff; /* Fundo branco */
    padding: 20px; /* Padding interno de 20px em todos os lados */
    box-shadow: 0 0 5px #ccc; /* Sombra suave */
    border-radius: 5px; /* Bordas arredondadas */
    max-width: 1120px; /* Largura máxima */
    margin: 20px auto; /* Centraliza a tabela com margens */
`

// Componente para o cabeçalho da tabela
export const TableHeader = styled.thead``

// Componente para o corpo da tabela
export const TableBody = styled.tbody``

// Componente para as linhas da tabela
export const TR = styled.tr``

// Componente para as células do cabeçalho
// Recebe props: width (largura) e alignCenter (se deve centralizar)
export const TH = styled.th`
    border-bottom: inset; /* Borda inferior estilo "inset" (rebaixada) */
    padding-bottom: 5px; /* Padding inferior */
    
    /* Alinhamento do texto: se alignCenter for true, centraliza, senão alinha à esquerda */
    text-align: ${props => (props.alignCenter ? "center" : "start")};
    
    /* Largura: se width for fornecido, usa o valor seguido de %, senão usa "auto" */
    width: ${props => (props.width ? props.width + "%" : "auto")};
`