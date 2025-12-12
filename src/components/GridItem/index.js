// CAMINHO RELATIVO: src/components/GridItem/index.js
// Importa React
import React from "react"
// Importa componentes estilizados
import * as S from "./styles"
// Importa ícones da biblioteca react-icons/fa (FontAwesome)
import
{
    FaRegArrowAltCircleUp, // Ícone de seta para cima (verde - entrada)
    FaRegArrowAltCircleDown, // Ícone de seta para baixo (vermelho - saída)
    FaTrash // Ícone de lixeira (para deletar)
}
from "react-icons/fa"

// Componente GridItem que representa uma linha na tabela
// Recebe 2 props: item (transação) e onDelete (função para deletar)
const GridItem=({item, onDelete})=>
{
  return (
    // Linha da tabela
    <S.TR>
        {/* Célula com a descrição da transação */}
        <S.TD>{item.desc}</S.TD>
        
        {/* Célula com o valor da transação */}
        <S.TD>{item.amount}</S.TD>
        
        {/* Célula com o ícone do tipo de transação (centralizada) */}
        <S.TD alignCenter>
            {
                // Se item.expense for true (despesa), mostra seta para baixo vermelha
                // Se for false (receita), mostra seta para cima verde
                item.expense ? 
                <FaRegArrowAltCircleDown color="red"/> : 
                <FaRegArrowAltCircleUp color="green"/>
            }
        </S.TD>
        
        {/* Célula com o ícone de lixeira para deletar (centralizada) */}
        <S.TD alignCenter>
            {/* Ícone de lixeira que chama onDelete com o ID do item quando clicado */}
            <FaTrash onClick={()=>onDelete(item.id)}/>
        </S.TD>
    </S.TR>
  )
}

export default GridItem