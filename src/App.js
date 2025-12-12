// CAMINHO RELATIVO: src/App.js
// Importa React e os hooks useState (gerenciar estado) e useEffect (efeitos colaterais)
import React, {useState, useEffect} from 'react'
// Importa estilos globais
import Global from './styles/global'
// Importa componentes
import Header from './components/Header'
import Resume from './components/Resume'
import Form from './components/Form'

// Componente principal da aplicação
const App=()=>
{
  // Obtém os dados do localStorage com a chave 'transactions'
  // localStorage: API do navegador para armazenamento persistente de dados
  const data = localStorage.getItem('transactions')
  
  // useState para gerenciar a lista de transações
  // Se existirem dados no localStorage, converte de JSON para array, senão usa array vazio
  const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : [])
  
  // useState para o total de entradas (receitas)
  const [income, setIncome] = useState(0)
  
  // useState para o total de saídas (despesas)
  const [expense, setExpense] = useState(0)
  
  // useState para o saldo total (entradas - saídas)
  const [total, setTotal] = useState(0)

  // useEffect: executa sempre que transactionsList é atualizada
  useEffect(()=>
  {
    // Filtra as transações que são despesas (expense: true)
    // Converte o amount de string para número com Number()
    const amountExpense = transactionsList
      .filter(item=>item.expense)
      .map(transaction=>Number(transaction.amount))
    
    // Filtra as transações que são receitas (expense: false)
    const amountIncome = transactionsList
      .filter(item=>!item.expense)
      .map(transaction=>Number(transaction.amount))
    
    // Calcula o total de despesas usando reduce
    // reduce: soma todos os valores do array, começando de 0
    // toFixed(2): formata para 2 casas decimais
    const expense = amountExpense.reduce((acc, cur)=>acc + cur, 0).toFixed(2)
    
    // Calcula o total de receitas
    const income = amountIncome.reduce((acc, cur)=>acc + cur, 0).toFixed(2)
    
    // Calcula o saldo total (diferença absoluta entre receitas e despesas)
    const total = Math.abs(income - expense).toFixed(2)

    // Atualiza os estados formatando os valores como string com "R$"
    setIncome(`R$ ${income}`)
    setExpense(`R$ ${expense}`)
    
    // Define o saldo total com sinal negativo se as despesas forem maiores que as receitas
    setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`)
    
  }, [transactionsList]) // Array de dependências: executa sempre que transactionsList mudar

  // Função para adicionar uma nova transação à lista
  const handleAdd=(transaction)=>
  {
    // Cria um novo array com todas as transações existentes mais a nova
    const newArrayTransactions = [...transactionsList, transaction]
    
    // Atualiza o estado da lista de transações
    setTransactionsList(newArrayTransactions)
    
    // Salva a nova lista no localStorage (converte array para JSON string)
    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions))
  }

  // Renderiza a aplicação
  return (
    // Fragmento React (<> </>): agrupa múltiplos elementos sem adicionar nó extra ao DOM
    <>
    {/* Componente Header (cabeçalho) */}
    <Header/>
    
    {/* Componente Resume (resumo) com os valores calculados */}
    <Resume income={income} expense={expense} total={total}/>
    
    {/* Componente Form (formulário) para adicionar novas transações */}
    {/* Passa a função handleAdd, a lista de transações e a função para atualizá-la */}
    <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
    
    {/* Estilos globais da aplicação */}
    <Global/>
    </>
  )
}

// Exporta o componente App como padrão
export default App