// CAMINHO RELATIVO: src/styles/global.js
// Importa a função createGlobalStyle do styled-components para criar estilos globais
import {createGlobalStyle} from "styled-components"

// Cria e exporta os estilos globais da aplicação
const Global = createGlobalStyle
// Template string com estilos CSS globais
`
/* Seletor universal *: aplica a todos os elementos */
*
{
    margin: 0; /* Remove todas as margens padrão */
    padding: 0; /* Remove todos os paddings padrão */
}

/* Estiliza o elemento body da página */
body
{
    font-family: 'Poppins', Sans-Serif; /* Define a fonte Poppins como principal, com fallback para sans-serif */
    background-color: #f2f2f2; /* Cor de fundo cinza claro para toda a página */
}
`

// Exporta os estilos globais como padrão
export default Global