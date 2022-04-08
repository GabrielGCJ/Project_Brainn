import "./DiaDeSorte.css";
import React from "react";

const DiaDeSorte = () => {
    return (
      <div className='divmae-6'>
          <div className='bloco1-6'>
  
            <div className='blocoInter-6'>
              <div className='botaoselect-6'>
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
                <h1>DiaDeSorte</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2-6'>
            <div className="blocoNumeros-6">
              <div className="numeros-6">2</div>
              <div className="numeros-6">3</div>
              <div className="numeros-6">4</div>
              <div className="numeros-6">1</div>
              <div className="numeros-6">5</div>
              <div className="numeros-6">6</div>
              <div className="numeros-6">7</div>
              <div className="numeros-6">8</div>
              <div className="numeros-6">9</div>
              <div className="numeros-6">10</div>
              <div className="numeros-6">11</div>
              <div className="numeros-6">12</div>
            </div>
            <div className="blocoDeTexto-6">
              <div className="texto-6">Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</div>
            </div>
          </div>
      </div>
    );
  }
  
  export default DiaDeSorte;