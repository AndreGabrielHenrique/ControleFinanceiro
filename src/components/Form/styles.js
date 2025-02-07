import styled from "styled-components"

export const Container = styled.div
`
    max-width: 1120px;
    width: 98%;
    margin: 20px auto;
    display: flex;
    gap: 10px;
    justify-content: space-around;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    padding: 15px 0px;

    @media (max-width: 750px)
    {
        display: grid;
    }
`

export const InputContent = styled.div
`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label
``

export const Input = styled.input
`
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 15px;
`

export const RadioGroup = styled.div
`
    display: flex;
    align-items: center;

    input
    {
        margin-left: 20px;
        accent-color: black;
        margin-top: 0;
        margin-right: 5px;
    }
`

export const Button = styled.button
`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: teal;
    color: white;
    cursor: pointer;
`