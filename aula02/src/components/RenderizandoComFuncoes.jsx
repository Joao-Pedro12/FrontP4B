import React from 'react'

const RenderizandoComFuncoes = () => {

    function escolhaDeRenderuzacao (oQueRenderizar){
        if (oQueRenderizar === "h1") {
            return <h1>Texte em h1</h1>

        } else{
            return <h2>texto em h2</h2>
        }
        

    }

  return (
    <div>
        {escolhaDeRenderuzacao("teste")}
        {escolhaDeRenderuzacao("h1")}
    </div>
  )
}

export default RenderizandoComFuncoes