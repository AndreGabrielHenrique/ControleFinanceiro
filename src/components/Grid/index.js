// CAMINHO RELATIVO: src/components/Grid/index.js
// Importa React
import React from "react"
// Importa o componente GridItem para cada linha da tabela
import GridItem from "../GridItem"
// Importa todos os componentes estilizados
import * as S from "./styles"

// Componente Grid que recebe 2 props:
// 1. itens: array de transações
// 2. setItens: função para atualizar a lista de transações
const Grid=({itens, setItens})=>
{
    // Função para deletar uma transação pelo ID
    const onDelete=(id)=>
    {
        // filter: cria novo array com todos os itens EXCETO o que tem o ID fornecido
        const newArray = itens.filter(transaction => transaction.id !== id)
        // Atualiza o estado da lista de transações
        setItens(newArray)
        // Atualiza o localStorage com a nova lista (persistência de dados)
        localStorage.setItem("transactions", JSON.stringify(newArray))
    }

    // Retorna a tabela com as transações
    return (
        // Componente Table estilizado
        <S.Table>
            {/* Cabeçalho da tabela */}
            <S.TableHeader>
                {/* Linha do cabeçalho */}
                <S.TR>
                    {/* Coluna "Descrição" com largura de 40% */}
                    <S.TH width={40}>Descrição</S.TH>
                    {/* Coluna "Valor" com largura de 40% */}
                    <S.TH width={40}>Valor</S.TH>
                    {/* Coluna "Tipo" com largura de 10% e texto centralizado */}
                    <S.TH width={10} alignCenter>Tipo</S.TH>
                    {/* Coluna vazia para o ícone de deletar com largura de 10% */}
                    <S.TH width={10}></S.TH>
                </S.TR>
            </S.TableHeader>
            
            {/* Corpo da tabela */}
            <S.TableBody>
                {
                    // map: percorre cada item do array 'itens'
                    // item: cada transação individual
                    // index: índice da transação no array
                    itens.map((item, index)=>
                    (
                        // Para cada transação, renderiza um componente GridItem
                        // key={index}: identificador único necessário para listas no React
                        // item={item}: passa a transação como prop
                        // onDelete={onDelete}: passa a função de deletar como prop
                        <GridItem key={index} item={item} onDelete={onDelete}/>
                    )
                    )
                }
            </S.TableBody>
        </S.Table>
    )
}

// Exporta o componente Grid
export default Grid