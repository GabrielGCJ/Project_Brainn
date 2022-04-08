import "./TimeMania.css";
import React from "react";

const TimeMania = () => {
    return (
      <div className='divmae-5'>
          <div className='bloco1-5'>
  
            <div className='blocoInter-5'>
              <div className='botaoselect-5'>
                <select name="Mega-Sena" id="Mega-Sena">
                    <option>Mega-Sena</option>
                    <option>Quina</option>
                    <option>Loto-Facil</option>
                    <option>Loto-Mania</option>
                    <option>Time-Mania</option>
                    <option>Dia de Sorte</option>
                </select>
              </div>
              <div>
                <h1>TimeMania</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-5'>
            <div className="blocoNumeros-5">
              <div className="numeros-5">1</div>
              <div className="numeros-5">2</div>
              <div className="numeros-5">3</div>
              <div className="numeros-5">4</div>
              <div className="numeros-5">5</div>
              <div className="numeros-5">6</div>
              <div className="numeros-5">7</div>
            </div>
            <div className="blocoDeTexto-5">
              <div className="texto-5">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default TimeMania;