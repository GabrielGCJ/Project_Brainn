import "./MegaSena.css";
import React from "react";

const MegaSena = () => {
    return (
      <div className='divmae-1' id="">
          <div className='bloco1-1'>
  
            <div className='blocoInter-1'>
              <div className='botaoselect-1'>
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
                <h1>Mega-Sena</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-1'>
            <div className="blocoNumeros-1">
              <div className="numeros-1">1</div>
              <div className="numeros-1">2</div>
              <div className="numeros-1">3</div>
              <div className="numeros-1">4</div>
              <div className="numeros-1">5</div>
              <div className="numeros-1">6</div>
            </div>
            <div className="blocoDeTexto-1">
              <div className="texto">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default MegaSena;