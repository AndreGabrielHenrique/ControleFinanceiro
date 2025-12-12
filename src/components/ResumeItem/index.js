// CAMINHO RELATIVO: src/components/ResumeItem/index.js
// Importa React
import React from "react"
// Importa componentes estilizados
import * as S from "./styles"

// Componente ResumeItem para cada item do resumo
// Recebe 4 props: title (título), Icon (componente do ícone), value (valor), color (cor do ícone - opcional)
const ResumeItem=({title, Icon, value, color})=>
{
  return (
    // Container do item do resumo
    <S.Container>
        {/* Cabeçalho do item (título + ícone) */}
        <S.Header>
            {/* Título do item */}
            <S.HeaderTitle>{title}</S.HeaderTitle>
            
            {/* Ícone com cor personalizada (se a prop color for fornecida) */}
            <Icon style={{color: color}}/>
        </S.Header>
        
        {/* Valor do item (entradas, saídas ou total) */}
        <S.Total>{value}</S.Total>
    </S.Container>
  )
}

export default ResumeItem