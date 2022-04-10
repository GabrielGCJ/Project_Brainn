import "./LotoMania.css";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"


const LotoMania = () => {


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
      <div className='divmae-4'>
          <div className='bloco1-4'>
  
            <div className='blocoInter-4'>
              <div className='botaoselect-4'>
                <select name="LotoMania" id="LotoMania" onChange={selectChange}>
                    <option value="0">Mega-Sena</option>
                    <option value="1">Quina</option>
                    <option value="2">Loto-Facil</option>
                    <option value="3">Loto-Mania</option>
                    <option value="4">Time-Mania</option>
                    <option value="5">Dia de Sorte</option>
                </select>
              </div>
              <div>
                <h1>LotoMania</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-4'>
            <div className="blocoNumeros-4">
              <div className="numeros-4">1</div>
              <div className="numeros-4">2</div>
              <div className="numeros-4">3</div>
              <div className="numeros-4">4</div>
              <div className="numeros-4">5</div>
              <div className="numeros-4">6</div>
              <div className="numeros-4">7</div>
              <div className="numeros-4">8</div>
              <div className="numeros-4">9</div>
              <div className="numeros-4">10</div>
              <div className="numeros-4">11</div>
              <div className="numeros-4">12</div>
              <div className="numeros-4">13</div>
              <div className="numeros-4">14</div>
              <div className="numeros-4">15</div>
              <div className="numeros-4">16</div>
              <div className="numeros-4">17</div>
              <div className="numeros-4">18</div>
              <div className="numeros-4">19</div>
              <div className="numeros-4">20</div>
            </div>
            <div className="blocoDeTexto-4">
              <div className="texto-4">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default LotoMania;