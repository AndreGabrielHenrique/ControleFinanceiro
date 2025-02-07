import React from "react"
import GridItem from "../GridItem"
import * as S from "./styles"

const Grid=({itens, setItens})=>
{
    const onDelete=(id)=>
    {
        const newArray = itens.filter(transaction => transaction.id !== id)
        setItens(newArray)
        localStorage.setItem("transactions", JSON.stringify(newArray))
    }

    return (
        <S.Table>
            <S.TableHeader>
                <S.TR>
                    <S.TH width={40}>Descrição</S.TH>
                    <S.TH width={40}>Valor</S.TH>
                    <S.TH width={10} alignCenter>Tipo</S.TH>
                    <S.TH width={10}></S.TH>
                </S.TR>
            </S.TableHeader>
            <S.TableBody>
                {
                    itens.map((item, index)=>
                    (
                        <GridItem key={index} item={item} onDelete={onDelete}/>
                    )
                    )
                }
            </S.TableBody>
        </S.Table>
    )
}

export default Grid