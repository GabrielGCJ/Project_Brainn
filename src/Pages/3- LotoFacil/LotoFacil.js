import "./LotoFacil.css";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios";



const LotoFacil = () => {
  const history = useHistory()
  const [ PGSelect, setPGSelect ] = useState(1)



  const ParLotoFacil = () => {
    const [ numeros, setnumeros ] = useState([])
  
    axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2200")
    .then((res) => {
      setnumeros(res.data.numeros)
    })
    .catch((err) =>{
      ParLotoFacil()
    })
    return numeros
  }

  const numero1 = ParLotoFacil()[0]
  const numero2 = ParLotoFacil()[1]
  const numero3 = ParLotoFacil()[2]
  const numero4 = ParLotoFacil()[3]
  const numero5 = ParLotoFacil()[4]
  const numero6 = ParLotoFacil()[5]
  const numero7 = ParLotoFacil()[6]
  const numero8 = ParLotoFacil()[7]
  const numero9 = ParLotoFacil()[8]
  const numero10 = ParLotoFacil()[9]
  const numero11 = ParLotoFacil()[10]
  const numero12 = ParLotoFacil()[11]
  const numero13 = ParLotoFacil()[12]
  const numero14 = ParLotoFacil()[13]
  const numero15 = ParLotoFacil()[14]




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
                <img src="https://www.mazusoft.com.br/mega/images/logo-mega-sena.png"></img>
                <h1>LotoFacil</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-3'>
            <div className="blocoNumeros-3">
              <div className="numeros-3">{numero1}</div>
              <div className="numeros-3">{numero2}</div>
              <div className="numeros-3">{numero3}</div>
              <div className="numeros-3">{numero4}</div>
              <div className="numeros-3">{numero5}</div>
              <div className="numeros-3">{numero6}</div>
              <div className="numeros-3">{numero7}</div>
              <div className="numeros-3">{numero8}</div>
              <div className="numeros-3">{numero9}</div>
              <div className="numeros-3">{numero10}</div>
              <div className="numeros-3">{numero11}</div>
              <div className="numeros-3">{numero12}</div>
              <div className="numeros-3">{numero13}</div>
              <div className="numeros-3">{numero14}</div>
              <div className="numeros-3">{numero15}</div>
            </div>
            <div className="blocoDeTexto-3">
              <div className="texto-3">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default LotoFacil;