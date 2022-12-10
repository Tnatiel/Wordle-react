
import './App.css';
import { Header } from './components/Header';
import { InputRow } from './components/InputsRow';


function App() {

  const mainTitle = 'Wordle'

  const rowOneIds = ['0-0', '0-1', '0-2', '0-3', '0-4']
  const rowTwoIds = ['1-0', '1-1', '1-2', '1-3', '1-4']
  const rowThreeIds = ['2-0', '2-1', '2-2', '2-3', '2-4']
  const rowFourIds = ['3-0', '3-1', '3-2', '3-3', '3-4']
  const rowFiveIds = ['4-0', '4-1', '4-2', '4-3', '4-4']
  const rowSixIds = ['5-0', '5-1', '5-2', '5-3', '5-4']

  return (
        <main>
        {/* <!-- PAGE HEADER --> */}
        <Header appTitle={mainTitle} />
        {/* <!-- USER INPUTS --> */}
        <div className="user-input-sec">
            {/* <!-- ROW 1 --> */}
            <InputRow 
              ids={rowOneIds}
              rowClass={'r1'}
            />
            {/* <!-- ROW 2 --> */}
            <InputRow 
              ids={rowTwoIds}
              rowClass={'r2'}
              />
            {/* <!-- ROW 3 --> */}
            <InputRow 
              ids={rowThreeIds}
              rowClass={'r3'}
              />
            {/* <!-- ROW 4 --> */}
            <InputRow 
              ids={rowFourIds}
              rowClass={'r4'}
              />
            {/* <!-- ROW 5 --> */}
            <InputRow 
              ids={rowFiveIds}
              rowClass={'r5'}
              />
            {/* <!-- ROW 6 --> */}
            <InputRow 
              ids={rowSixIds}
              rowClass={'r6'}
              />
        </div>
        {/* <!-- KEYBOARD --> */}
        <div className="keyboard">
            {/* <!-- ROW1 --> */}
            <div className="kboard-row1">
                <button id="Q" className="kbd-btn">Q</button>
                <button id="W" className="kbd-btn">W</button>
                <button id="E" className="kbd-btn">E</button>
                <button id="R" className="kbd-btn">R</button>
                <button id="T" className="kbd-btn">T</button>
                <button id="Y" className="kbd-btn">Y</button>
                <button id="U" className="kbd-btn">U</button>
                <button id="I" className="kbd-btn">I</button>
                <button id="O" className="kbd-btn">O</button>
                <button id="P" className="kbd-btn">P</button>
            </div>
            {/* <!-- ROW2 --> */}
            <div className="kboard-row2">
                <button id="A" className="kbd-btn">A</button>
                <button id="S" className="kbd-btn">S</button>
                <button id="D" className="kbd-btn">D</button>
                <button id="F" className="kbd-btn">F</button>
                <button id="G" className="kbd-btn">G</button>
                <button id="H" className="kbd-btn">H</button>
                <button id="J" className="kbd-btn">J</button>
                <button id="K" className="kbd-btn">K</button>
                <button id="L" className="kbd-btn">L</button>
            </div>
            {/* <!-- ROW3 --> */}
            <div className="kboard-row3">
                <button id="enter" className="kbd-btn">Enter</button>
                <button id="Z" className="kbd-btn">Z</button>
                <button id="X" className="kbd-btn">X</button>
                <button id="C" className="kbd-btn">C</button>
                <button id="V" className="kbd-btn">V</button>
                <button id="B" className="kbd-btn">B</button>
                <button id="N" className="kbd-btn">N</button>
                <button id="M" className="kbd-btn">M</button>
                <button id="del" className="kbd-btn">Del</button>
                
            </div>
        </div>
    </main>
    
  );
}

export default App;
