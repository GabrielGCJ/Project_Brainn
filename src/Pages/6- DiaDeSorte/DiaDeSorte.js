import "./DiaDeSorte.css";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"

const DiaDeSorte = () => {

  const history = useHistory()
  const [ PGSelect, setPGSelect ] = useState(1)


  const irParaPagina = (url) => {
    history.push(`${url}`)
  }


  const selectChange = (event) => {
    setPGSelect(event.target.value)
    console.log(event.target.value)


  
    switch (event.target.value) {
      case '0':
        console.log('Recebendo 0');
        irParaPagina("/")
        break
      case '1':
        console.log('Recebendo 1')
        irParaPagina("/quina")
        break
      case '2':
        console.log('Recebendo 2')
        irParaPagina("/lotoFacil")
        break
      case '3':
        console.log('Recebendo 3')
        irParaPagina("/lotoMania")
        break
      case '4':
        console.log('Recebendo 4')
        irParaPagina("/timeMania")
        break
      case '5':
        console.log('Recebendo 5')
        irParaPagina("/diaDeSorte")
        break
      
      default:
        console.log(`Sorry`);
    }
  }


    return (
      <div className='divmae-6'>
          <div className='bloco1-6'>
  
            <div className='blocoInter-6'>
              <div className='botaoselect-6'>
                <select name="Dia-De-Sorte" id="Dia-De-Sorte" onChange={selectChange}>
                    <option value="0">Mega-Sena</option>
                    <option value="1">Quina</option>
                    <option value="2">Loto-Facil</option>
                    <option value="3">Loto-Mania</option>
                    <option value="4">Time-Mania</option> 
                    <option value="5">Dia de Sorte</option>
                </select>
              </div>
              <div>
                <h1>DiaDeSorte</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-6'>
            <div className="blocoNumeros-6">
              <div className="numeros-6">2</div>
              <div className="numeros-6">3</div>
              <div className="numeros-6">4</div>
              <div className="numeros-6">1</div>
              <div className="numeros-6">5</div>
              <div className="numeros-6">6</div>
              <div className="numeros-6">7</div>
              <div className="numeros-6">8</div>
              <div className="numeros-6">9</div>
              <div className="numeros-6">10</div>
              <div className="numeros-6">11</div>
              <div className="numeros-6">12</div>
            </div>
            <div className="blocoDeTexto-6">
              <div className="texto-6">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default DiaDeSorte;