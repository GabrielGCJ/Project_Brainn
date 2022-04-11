import "./TimeMania.css";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios";



const TimeMania = () => {
  const history = useHistory()
  const [ PGSelect, setPGSelect ] = useState(1)



  const ParTimeMania = () => {
    const [ numeros, setnumeros ] = useState([])
  
    axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/1622")
    .then((res) => {
      setnumeros(res.data.numeros)
    })
    .catch((err) =>{
      ParTimeMania()
    })
    return numeros
  }

  const numero1 = ParTimeMania()[0]
  const numero2 = ParTimeMania()[1]
  const numero3 = ParTimeMania()[2]
  const numero4 = ParTimeMania()[3]
  const numero5 = ParTimeMania()[4]
  const numero6 = ParTimeMania()[5]
  const numero7 = ParTimeMania()[6]
  const numero8 = ParTimeMania()[7]
  

  const irParaPagina = (url) => {
    history.push(`${url}`)
  }


  const selectChange = (event) => {
    setPGSelect(event.target.value)
    console.log(event.target.value)


  
    switch (event.target.value) {
      case '0':
        console.log('Recebendo 0');
        irParaPagina("/megaSena")
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
      <div className='divmae-5'>
          <div className='bloco1-5'>
  
            <div className='blocoInter-5'>
              <div className='botaoselect-5'>
                <select name="Time-mania" id="Time-Mania" onChange={selectChange}>
                    <option value="0">Mega-Sena</option>
                    <option value="1">Quina</option>
                    <option value="2">Loto-Facil</option>
                    <option value="3">Loto-Mania</option>
                    <option value="4">Time-Mania</option>
                    <option value="5">Dia de Sorte</option>
                </select>
              </div>
              <div>
                <h1>TimeMania</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-5'>
            <div className="blocoNumeros-5">
              <div className="numeros-5">{numero1}</div>
              <div className="numeros-5">{numero2}</div>
              <div className="numeros-5">{numero3}</div>
              <div className="numeros-5">{numero4}</div>
              <div className="numeros-5">{numero5}</div>
              <div className="numeros-5">{numero6}</div>
              <div className="numeros-5">{numero7}</div>
            </div>
            <div className="blocoDeTexto-5">
              <div className="texto-5">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default TimeMania;