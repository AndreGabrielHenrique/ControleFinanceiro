// CAMINHO RELATIVO: src/components/Resume/index.js
// Importa React
import React from "react"
// Importa componentes estilizados
import * as S from "./styles"
// Importa o componente ResumeItem para cada item do resumo
import ResumeItem from "../ResumeItem"
// Importa ícones do FontAwesome
import
{
    FaRegArrowAltCircleUp, // Ícone para entradas (seta para cima)
    FaRegArrowAltCircleDown, // Ícone para saídas (seta para baixo)
    FaDollarSign // Ícone de dólar para o total
}
from "react-icons/fa"

// Componente Resume que exibe o resumo financeiro
// Recebe 3 props: income (entradas), expense (saídas), total (saldo)
const Resume=({income, expense, total})=>
{
  return (
    // Container principal do resumo
    <S.Container>
        {/* Item para Entradas - passa título, ícone, valor e cor verde */}
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} color="green"/>
        
        {/* Item para Saídas - passa título, ícone, valor e cor vermelha */}
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} color="red"/>
        
        {/* Item para Total - passa título, ícone e valor (sem cor específica) */}
        <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
    </S.Container>
  )
}

export default Resume