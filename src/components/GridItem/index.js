import React from "react"
import * as S from "./styles"
import
{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash
}
from "react-icons/fa"

const GridItem=({item, onDelete})=>
{
  return (
    <S.TR>
        <S.TD>{item.desc}</S.TD>
        <S.TD>{item.amount}</S.TD>
        <S.TD alignCenter>
            {
                item.expense ? <FaRegArrowAltCircleDown color="red"/> : <FaRegArrowAltCircleUp color="green"/>
            }
        </S.TD>
        <S.TD alignCenter>
            <FaTrash onClick={()=>onDelete(item.id)}/>
        </S.TD>
    </S.TR>
  )
}

export default GridItem