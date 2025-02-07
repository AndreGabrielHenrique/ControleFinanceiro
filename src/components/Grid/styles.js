import styled from "styled-components"

export const Table = styled.table
`
    width: 98%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    max-width: 1120px;
    margin: 20px auto;
`

export const TableHeader = styled.thead
``

export const TableBody = styled.tbody
``

export const TR = styled.tr
``

export const TH = styled.th
`
    border-bottom: inset;
    padding-bottom: 5px;
    text-align: ${props => props.alignCenter ? "center" : "start"};
    width: ${props => props.width ? "%" : "auto"};
`