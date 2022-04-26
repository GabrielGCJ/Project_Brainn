import "./Quina.css";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios";
import imageLoto from "../../Images/logoSena.png"

const Quina = () => {
  const history = useHistory()
  const [ PGSelect, setPG1Select ] = useState(2)



  const ParQuina = () => {
    const [ numeros, setnumeros ] = useState([])
  
    axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/5534")
    .then((res) => {
      setnumeros(res.data.numeros)
    })
    .catch((err) =>{
      ParQuina()
    })
    return numeros
  }

  const numero1 = ParQuina()[0]
  const numero2 = ParQuina()[1]
  const numero3 = ParQuina()[2]
  const numero4 = ParQuina()[3]
  const numero5 = ParQuina()[4]




  const irParaPagina = (url) => {
    history.push(`${url}`)
  }


  const selectChange = (event) => {
    setPG1Select(event.target.value)
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
      <div className='divmae-2'>
          <div className='bloco1-2'>
  
            <div className='blocoInter-2'>
              <div className='botaoselect-2'>
                <select name="Quina" id="Quina" onChange={selectChange}>
                    <option value="0">Mega-Sena</option>
                    <option value="1">Quina</option>
                    <option value="2">Loto-Facil</option>
                    <option value="3">Loto-Mania</option>
                    <option value="4">Time-Mania</option>
                    <option value="5">Dia de Sorte</option>
                </select>
              </div>
              <div className="imagemLoto">
                <img src={imageLoto}></img>
              </div>

              <div>
                <h1>Quina</h1>
              </div>

            </div>
          </div>
  
          <div className='bloco2-2'>
            <div className="blocoNumeros-2">
              <div className="numeros-2">{numero1}</div>
              <div className="numeros-2">{numero2}</div>
              <div className="numeros-2">{numero3}</div>
              <div className="numeros-2">{numero4}</div>
              <div className="numeros-2">{numero5}</div>
            </div>
            <div className="blocoDeTexto-2">
              <div className="texto-2">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Quina;