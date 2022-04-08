import "./LotoFacil.css";
import React from "react";

const LotoFacil = () => {
    return (
      <div className='divmae-3'>
          <div className='bloco1-3'>
  
            <div className='blocoInter-3'>
              <div className='botaoselect-3'>
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
                <h1>LotoFacil</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-3'>
            <div className="blocoNumeros-3">
              <div className="numeros-3">1</div>
              <div className="numeros-3">2</div>
              <div className="numeros-3">3</div>
              <div className="numeros-3">4</div>
              <div className="numeros-3">5</div>
              <div className="numeros-3">6</div>
              <div className="numeros-3">7</div>
              <div className="numeros-3">8</div>
              <div className="numeros-3">9</div>
              <div className="numeros-3">10</div>
              <div className="numeros-3">11</div>
              <div className="numeros-3">12</div>
              <div className="numeros-3">13</div>
              <div className="numeros-3">14</div>
              <div className="numeros-3">15</div>
            </div>
            <div className="blocoDeTexto-3">
              <div className="texto">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default LotoFacil;