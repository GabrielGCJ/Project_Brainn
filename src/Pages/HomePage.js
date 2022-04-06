import "./HomePage.css";


function HomePage() {
    return (
      <div className='divmae'>
          <div className='bloco1'>
  
            <div className='blocoInter'>
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
                <h1>Loto-mania</h1>
              </div>    
            </div>
          </div>
  
          <div className='bloco2'>
             <div className="numeros">1</div>
             <div className="numeros">2</div>
             <div className="numeros">3</div>
             <div className="numeros">4</div>
             <div className="numeros">5</div>
             <div className="numeros">6</div>
          </div>
      </div>
    );
  }
  
  export default HomePage;