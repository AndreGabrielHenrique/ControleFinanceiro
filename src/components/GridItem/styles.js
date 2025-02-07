import styled from "styled-components"

export const TR = styled.tr
``

export const TD = styled.td
`
    padding-top: 15px;
    text-align: ${props => props.alignCenter ? "center" : "start"};
    word-break: break-all;

    svg
    {
        width: 18px;
        height: 18px;
    }
`