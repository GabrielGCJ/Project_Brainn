import "./LotoFacil.css";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"

const LotoFacil = () => {
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
      <div className='divmae-3'>
          <div className='bloco1-3'>
  
            <div className='blocoInter-3'>
              <div className='botaoselect-3'>
                <select name="LotoFacil" id="LotoFacil" onChange={selectChange}>
                    <option value="0">Mega-Sena</option>
                    <option value="1">Quina</option>
                    <option value="2">Loto-Facil</option>
                    <option value="3">Loto-Mania</option>
                    <option value="4">Time-Mania</option>
                    <option value="5">Dia de Sorte</option>
                </select>
              </div>
              <div>
                <h1>LotoFacil</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-3'>
            <div className="blocoNumeros-3">
              <div className="numeros-3">1</div>
              <div className="numeros-3">2</div>
              <div className="numeros-3">3</div>
              <div className="numeros-3">4</div>
              <div className="numeros-3">5</div>
              <div className="numeros-3">6</div>
              <div className="numeros-3">7</div>
              <div className="numeros-3">8</div>
              <div className="numeros-3">9</div>
              <div className="numeros-3">10</div>
              <div className="numeros-3">11</div>
              <div className="numeros-3">12</div>
              <div className="numeros-3">13</div>
              <div className="numeros-3">14</div>
              <div className="numeros-3">15</div>
            </div>
            <div className="blocoDeTexto-3">
              <div className="texto-3">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default LotoFacil;