// CAMINHO RELATIVO: src/components/Header/index.js
// Importa React
import React from "react"
// Importa componentes estilizados
import * as S from "./styles"

// Componente Header (cabeçalho da aplicação)
const Header=()=>
{
  return (
    // Container principal do cabeçalho
    <S.Container>
        {/* Elemento de cabeçalho */}
        <S.Header>
            {/* Título com animação de rotação */}
            <S.Title>Controle Financeiro</S.Title>
        </S.Header>
    </S.Container>
  )
}

export default Header