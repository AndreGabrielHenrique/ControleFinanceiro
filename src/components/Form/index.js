// CAMINHO RELATIVO: src/components/Form/index.js
// Importa React e o hook useState da biblioteca React
import React,{useState} from "react"
// Importa todos os componentes estilizados do arquivo styles.js como 'S'
import * as S from "./styles"
// Importa o componente Grid que será usado para exibir a lista de transações
import Grid from "../Grid"

// Define o componente Form que recebe 3 props como parâmetros:
// 1. handleAdd: função para adicionar nova transação
// 2. setTransactionsList: função para atualizar a lista de transações
// 3. transactionsList: array contendo todas as transações
const Form=({handleAdd, setTransactionsList, transactionsList})=>
{
    // useState para gerenciar o estado da descrição da transação
    // desc: valor atual do estado
    // setDesc: função para atualizar o estado
    // '' (string vazia): valor inicial do estado
    const [desc, setDesc] = useState('')
    
    // useState para gerenciar o estado do valor da transação
    const [amount, setAmount] = useState('')
    
    // useState para gerenciar se a transação é uma despesa (true) ou receita (false)
    const [isExpense, setExpense] = useState(false)

    // Função para gerar um ID aleatório para cada transação
    // Math.random(): gera número decimal entre 0 e 1
    // * 1000: multiplica por 1000 para ter números entre 0 e 1000
    // Math.round(): arredonda para número inteiro
    const generateID=()=> Math.round(Math.random() * 1000)

    // Função chamada quando o botão "Adicionar" é clicado
    const handleSave=()=>
    {
        // Verifica se a descrição OU o valor estão vazios
        if (!desc || !amount)
        {
            // Se estiverem vazios, exibe alerta e para a execução da função
            alert("Informe descrição e valor")
            return
        }
        // Verifica se o valor é menor que 1
        else if (amount < 1)
        {
            // Se for menor que 1, exibe alerta e para a execução
            alert("Valor tem que ser positivo")
            return
        }

        // Cria um objeto 'transaction' com os dados da nova transação
        const transaction =
        {
            id: generateID(), // Gera ID único
            desc, // Descrição da transação (shorthand para desc: desc)
            amount, // Valor da transação
            expense: isExpense // Tipo: true para despesa, false para receita
        }

        // Chama a função handleAdd passada via props para adicionar a transação
        handleAdd(transaction)

        // Limpa os campos do formulário após adicionar
        setDesc('') // Reseta a descrição para string vazia
        setAmount('') // Reseta o valor para string vazia
    }

    // Retorna o JSX (JavaScript XML) que será renderizado
    return (
        // Fragmento React (<> </>): agrupa elementos sem adicionar nó extra ao DOM
        <>
            {/* Container principal do formulário usando componente estilizado S.Container */}
            <S.Container>
                {/* Container para o campo de descrição */}
                <S.InputContent>
                    {/* Label do campo descrição */}
                    <S.Label>Descrição</S.Label>
                    {/* Input para digitar a descrição */}
                    {/* value={desc}: conecta o input ao estado 'desc' */}
                    {/* onChange={e=>setDesc(e.target.value)}: atualiza o estado quando o valor muda */}
                    <S.Input value={desc} onChange={e=>setDesc(e.target.value)}/>
                </S.InputContent>
                
                {/* Container para o campo de valor */}
                <S.InputContent>
                    <S.Label>Valor</S.Label>
                    {/* Input do tipo number para valores numéricos */}
                    <S.Input value={amount} type="number" onChange={e=>setAmount(e.target.value)}/>
                </S.InputContent>
                
                {/* Grupo de radio buttons para escolher entre Entrada ou Saída */}
                <S.RadioGroup>
                    {/* Radio button para "Entrada" (receita) */}
                    {/* defaultChecked: marca este como selecionado por padrão */}
                    {/* name="group1": agrupa os radio buttons (apenas um pode ser selecionado) */}
                    {/* onChange={()=>setExpense(!isExpense)}: inverte o estado de isExpense quando clicado */}
                    <S.Input type="radio" id="rIncome" defaultChecked name="group1" onChange={()=>setExpense(!isExpense)}/>
                    {/* Label associada ao radio button pelo atributo htmlFor */}
                    <S.Label htmlFor="rIncome">Entrada</S.Label>
                    
                    {/* Radio button para "Saída" (despesa) */}
                    <S.Input type="radio" id="rExpenses" name="group1" onChange={()=>setExpense(!isExpense)}/>
                    {/* NOTA: O htmlFor aqui está errado - deveria ser "rExpenses" mas está "rIncome" */}
                    <S.Label htmlFor="rIncome">Saída</S.Label>
                </S.RadioGroup>
                
                {/* Botão para adicionar a transação - chama handleSave quando clicado */}
                <S.Button onClick={handleSave}>Adicionar</S.Button>
            </S.Container>
            
            {/* Componente Grid que exibe a lista de transações */}
            {/* Passa a lista de transações e a função para atualizá-la */}
            <Grid itens={transactionsList} setItens={setTransactionsList}/>
        </>
    )
}

// Exporta o componente Form como padrão para ser importado em outros arquivos
export default Form