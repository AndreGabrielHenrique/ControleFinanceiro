import React from "react"
import * as S from "./styles"

const ResumeItem=({title, Icon, value, color})=>
{
  return (
    <S.Container>
        <S.Header>
            <S.HeaderTitle>{title}</S.HeaderTitle>
            <Icon style={{color: color}}/>
        </S.Header>
        <S.Total>{value}</S.Total>
    </S.Container>
  )
}

export default ResumeItem