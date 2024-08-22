import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstutar'


const App = () => {
  return (
    <div>
      <Adicao num1= {2} num2= {2} />
      <Subtracao num1= {3} num2= {2} />
      <Multiplicacao num1 = {5} num2= {5} />
      <Divisao num1= {10} num2= {2} />
      <PrecisoEstudar nomeDaTecnologia = "Java"/>

    </div>
  )
}


export default App