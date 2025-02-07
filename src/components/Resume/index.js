import React from "react"
import * as S from "./styles"
import ResumeItem from "../ResumeItem"
import
{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
}
from "react-icons/fa"

const Resume=({income, expense, total})=>
{
  return (
    <S.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} color="green"/>
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} color="red"/>
        <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
    </S.Container>
  )
}

export default Resume