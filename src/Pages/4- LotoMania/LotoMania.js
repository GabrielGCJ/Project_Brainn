import "./LotoMania.css";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios";



const LotoMania = () => {
  const history = useHistory()
  const [ PGSelect, setPGSelect ] = useState(1)



  const ParLotoMania = () => {
    const [ numeros, setnumeros ] = useState([])
  
    axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2167")
    .then((res) => {
      setnumeros(res.data.numeros)
    })
    .catch((err) =>{
      ParLotoMania()
    })
    return numeros
  }

  const numero1 = ParLotoMania()[0]
  const numero2 = ParLotoMania()[1]
  const numero3 = ParLotoMania()[2]
  const numero4 = ParLotoMania()[3]
  const numero5 = ParLotoMania()[4]
  const numero6 = ParLotoMania()[5]
  const numero7 = ParLotoMania()[6]
  const numero8 = ParLotoMania()[7]
  const numero9 = ParLotoMania()[8]
  const numero10 = ParLotoMania()[9]
  const numero11 = ParLotoMania()[10]
  const numero12 = ParLotoMania()[11]
  const numero13 = ParLotoMania()[12]
  const numero14 = ParLotoMania()[13]
  const numero15 = ParLotoMania()[14]
  const numero16 = ParLotoMania()[15]
  const numero17 = ParLotoMania()[16]
  const numero18 = ParLotoMania()[17]
  const numero19 = ParLotoMania()[18]
  const numero20 = ParLotoMania()[19]


  
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
              <div className="numeros-4">{numero1}</div>
              <div className="numeros-4">{numero2}</div>
              <div className="numeros-4">{numero3}</div>
              <div className="numeros-4">{numero4}</div>
              <div className="numeros-4">{numero5}</div>
              <div className="numeros-4">{numero6}</div>
              <div className="numeros-4">{numero7}</div>
              <div className="numeros-4">{numero8}</div>
              <div className="numeros-4">{numero9}</div>
              <div className="numeros-4">{numero10}</div>
              <div className="numeros-4">{numero11}</div>
              <div className="numeros-4">{numero12}</div>
              <div className="numeros-4">{numero13}</div>
              <div className="numeros-4">{numero14}</div>
              <div className="numeros-4">{numero15}</div>
              <div className="numeros-4">{numero16}</div>
              <div className="numeros-4">{numero17}</div>
              <div className="numeros-4">{numero18}</div>
              <div className="numeros-4">{numero19}</div>
              <div className="numeros-4">{numero20}</div>
            </div>
            <div className="blocoDeTexto-4">
              <div className="texto-4">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default LotoMania;