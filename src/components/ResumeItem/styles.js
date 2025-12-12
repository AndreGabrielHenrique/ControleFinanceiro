// CAMINHO RELATIVO: src/components/ResumeItem/styles.js
// Importa styled-components
import styled from "styled-components"

// Container principal do item do resumo
export const Container = styled.div
`
    display: flex; /* Usa Flexbox */
    flex-direction: column; /* Organiza os filhos em coluna (vertical) */
    align-items: center; /* Centraliza os filhos horizontalmente */
    background-color: #fff; /* Fundo branco */
    border-radius: 5px; /* Bordas arredondadas */
    padding: 5px 15x; /* Padding: 5px vertical, 15px horizontal (NOTA: "15x" pode ser erro - deveria ser "15px") */
    width: 30%; /* Ocupa 30% da largura do container pai */

    /* Media query para telas menores que 750px */
    @media (max-width: 750px)
    {
        width: 20%; /* Reduz a largura para 20% em telas menores */

        /* Estiliza todos os elementos <p> dentro do container */
        p
        {
            font-size: 12px; /* Reduz tamanho da fonte */
        }

        /* Estiliza todos os elementos <span> dentro do container */
        span
        {
            font-size: 20px; /* Reduz tamanho da fonte */
        }

        /* Estiliza todos os elementos SVG (ícones) dentro do container */
        svg
        {
            display: none; /* Esconde os ícones em telas menores */
        }
    }
`

// Cabeçalho do item (contém título e ícone)
export const Header = styled.header
`
    display: flex; /* Flexbox para alinhar título e ícone */
    align-items: center; /* Centraliza verticalmente */
    justify-content: space-around; /* Distribui espaço igualmente ao redor */
    width: 100%; /* Ocupa 100% da largura do container pai */
    gap: 10px; /* Espaço de 10px entre título e ícone */
    margin: 20px auto; /* Margem vertical de 20px, centraliza horizontalmente */

    /* Estiliza todos os elementos SVG (ícones) dentro do header */
    svg
    {
        width: 25px; /* Largura fixa */
        height: 25px; /* Altura fixa */
    }
`

// Título do item
export const HeaderTitle = styled.p
`
    font-size: 20px; /* Tamanho da fonte */
`

// Valor do item
export const Total = styled.span
`
    font-size: 30px; /* Tamanho maior da fonte */
    font-weight: bold; /* Texto em negrito */
`