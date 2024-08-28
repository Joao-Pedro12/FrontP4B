import React from 'react'
import fotoprivada from '../assets/fotoprivada.png'
const TrabalhandoComImagens = () => {
  return (
    <div>
        <h1>Imagem pública</h1>
        <img src = 'fotopublica.png' alt=""/>

        <h1>Imagem privada</h1>
        <img src = {fotoprivada} alt=""/>



    </div>
  )
}

export default TrabalhandoComImagens