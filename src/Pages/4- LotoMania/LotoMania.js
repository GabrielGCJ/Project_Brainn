import "./LotoMania.css";
import React from "react";

const LotoMania = () => {
    return (
      <div className='divmae-4'>
          <div className='bloco1-4'>
  
            <div className='blocoInter-4'>
              <div className='botaoselect-4'>
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
                <h1>LotoMania</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-4'>
            <div className="blocoNumeros-4">
              <div className="numeros-4">1</div>
              <div className="numeros-4">2</div>
              <div className="numeros-4">3</div>
              <div className="numeros-4">4</div>
              <div className="numeros-4">5</div>
              <div className="numeros-4">6</div>
              <div className="numeros-4">7</div>
              <div className="numeros-4">8</div>
              <div className="numeros-4">9</div>
              <div className="numeros-4">10</div>
              <div className="numeros-4">11</div>
              <div className="numeros-4">12</div>
              <div className="numeros-4">13</div>
              <div className="numeros-4">14</div>
              <div className="numeros-4">15</div>
              <div className="numeros-4">16</div>
              <div className="numeros-4">17</div>
              <div className="numeros-4">18</div>
              <div className="numeros-4">19</div>
              <div className="numeros-4">20</div>
            </div>
            <div className="blocoDeTexto-4">
              <div className="texto-4">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default LotoMania;