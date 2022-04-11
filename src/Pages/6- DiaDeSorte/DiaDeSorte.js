import "./DiaDeSorte.css";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios";



const DiaDeSorte = () => {
  const history = useHistory()
  const [ PGSelect, setPGSelect ] = useState(1)



  const ParDiaDeSorte = () => {
    const [ numeros, setnumeros ] = useState([])
  
    axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/440")
    .then((res) => {
      setnumeros(res.data.numeros)
    })
    .catch(() =>{
      ParDiaDeSorte()
    })
    return numeros
  }

  const numero1 = ParDiaDeSorte()[0]
  const numero2 = ParDiaDeSorte()[1]
  const numero3 = ParDiaDeSorte()[2]
  const numero4 = ParDiaDeSorte()[3]
  const numero5 = ParDiaDeSorte()[4]
  const numero6 = ParDiaDeSorte()[5]
  const numero7 = ParDiaDeSorte()[6]
  const numero8 = ParDiaDeSorte()[7]
  const numero9 = ParDiaDeSorte()[8]
  const numero10 = ParDiaDeSorte()[9]
  const numero11 = ParDiaDeSorte()[10]
  const numero12 = ParDiaDeSorte()[11]
  




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
                <img src="https://www.mazusoft.com.br/mega/images/logo-mega-sena.png"></img>
                <h1>DiaDeSorte</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-6'>
            <div className="blocoNumeros-6">
              <div className="numeros-6">{numero1}</div>
              <div className="numeros-6">{numero2}</div>
              <div className="numeros-6">{numero3}</div>
              <div className="numeros-6">{numero4}</div>
              <div className="numeros-6">{numero5}</div>
              <div className="numeros-6">{numero6}</div>
              <div className="numeros-6">{numero7}</div>
              {/* <div className="numeros-6">{numero8}</div>
              <div className="numeros-6">{numero9}</div>
              <div className="numeros-6">{numero10}</div>
              <div className="numeros-6">{numero11}</div>
              <div className="numeros-6">{numero12}</div> */}
            </div>
            <div className="blocoDeTexto-6">
              <div className="texto-6">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default DiaDeSorte;