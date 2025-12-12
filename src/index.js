// CAMINHO RELATIVO: src/index.js
// Importa a função createRoot do React 18 para renderização
import {createRoot} from 'react-dom/client'
// Importa o componente principal App
import App from './App'

// Cria a raiz de renderização no elemento com id 'root'
// document.querySelector('#root'): seleciona o elemento div com id="root" do index.html
const root = createRoot(document.querySelector('#root'))

// Renderiza o componente App dentro da raiz criada
root.render
(
  <App/>
)