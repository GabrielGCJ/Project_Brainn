import "./MegaSena.css";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios";



const MegaSena = () => {
  const history = useHistory()
  const [ PGSelect, setPGSelect ] = useState(1)


 
  const ParMegaSena = () => {
    const [ numeros, setnumeros ] = useState([])
  
    axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2359")
    .then((res) => {
      setnumeros(res.data.numeros)
    })
    .catch((err) =>{
      ParMegaSena()
    })
    return numeros
  }

  const numero1 = ParMegaSena()[0]
  const numero2 = ParMegaSena()[1]
  const numero3 = ParMegaSena()[2]
  const numero4 = ParMegaSena()[3]
  const numero5 = ParMegaSena()[4]
  const numero6 = ParMegaSena()[5]


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
      <div className='divmae-1' id="">
          <div className='bloco1-1'>
  
            <div className='blocoInter-1'>
              <div className='botaoselect-1'>
                <select name="Mega-Sena" id="Mega-Sena" onChange={selectChange}>
                    <option value="0">Mega-Sena</option>
                    <option value="1">Quina</option>
                    <option value="2">Loto-Facil</option>
                    <option value="3">Loto-Mania</option>
                    <option value="4">Time-Mania</option> 
                    <option value="5">Dia de Sorte</option>
                </select>
              </div>
              <div>
                <h1>Mega-Sena</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-1'>
            <div className="blocoNumeros-1">
              <div className="numeros-1">{numero1}</div>
              <div className="numeros-1">{numero2}</div>
              <div className="numeros-1">{numero3}</div>
              <div className="numeros-1">{numero4}</div>
              <div className="numeros-1">{numero5}</div>
              <div className="numeros-1">{numero6}</div>
            </div>
            <div className="blocoDeTexto-1">
              <div className="texto">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default MegaSena;