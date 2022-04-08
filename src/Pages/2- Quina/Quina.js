import "./Quina.css";
import React from "react";

const Quina = () => {
    return (
      <div className='divmae-2'>
          <div className='bloco1-2'>
  
            <div className='blocoInter-2'>
              <div className='botaoselect'>
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
                <h1>Quina</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-2'>
            <div className="blocoNumeros-2">
              <div className="numeros-2">1</div>
              <div className="numeros-2">2</div>
              <div className="numeros-2">3</div>
              <div className="numeros-2">4</div>
              <div className="numeros-2">5</div>
            </div>
            <div className="blocoDeText-2">
              <div className="texto">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Quina;