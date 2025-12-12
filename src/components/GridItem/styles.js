// CAMINHO RELATIVO: src/components/GridItem/styles.js
// Importa styled-components
import styled from "styled-components"

// Componente para as linhas da tabela (herda de TR do Grid)
export const TR = styled.tr
/* Vazio - herda estilos */
``

// Componente para as células da tabela
// Recebe prop alignCenter para centralizar conteúdo
export const TD = styled.td
`
    padding-top: 15px; /* Padding superior de 15px */
    
    /* Alinhamento do texto: centraliza se alignCenter for true, senão alinha à esquerda */
    text-align: ${props => props.alignCenter ? "center" : "start"};
    
    word-break: break-all; /* Quebra palavras longas para não saírem da célula */

    /* Estiliza todos os elementos SVG (ícones) dentro da célula */
    svg
    {
        width: 18px; /* Largura fixa dos ícones */
        height: 18px; /* Altura fixa dos ícones */
    }
`