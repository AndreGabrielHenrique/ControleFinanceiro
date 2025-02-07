import styled, {keyframes} from "styled-components"

export const Container = styled.div
`
    height: 150px;
    text-align: center;
    background: teal;
`

export const Header = styled.h1
``

const rotateText = keyframes
`
    0% {transform: rotateY(0deg);}
    100% {transform: rotateY(360deg);}
`

export const Title = styled.div
`
    padding-top: 20px;
    color: #fff;
    animation: ${rotateText} 4s linear infinite;
`