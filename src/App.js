
import './App.css';
import { Header } from './components/Header';

function App() {
  return (
        <main>
        {/* <!-- PAGE HEADER --> */}
        <Header />
        {/* <!-- USER INPUTS --> */}
        <div className="user-input-sec">
            {/* <!-- ROW 1 --> */}
            <div className="r1">
                <div id="0-0" className="ur-input"></div>
                <div id="0-1" className="ur-input"></div>
                <div id="0-2" className="ur-input"></div>
                <div id="0-3" className="ur-input"></div>
                <div id="0-4" className="ur-input"></div>              
            </div>
            {/* <!-- ROW 2 --> */}
            <div className="r2">
                <div id="1-0" className="ur-input"></div>
                <div id="1-1" className="ur-input"></div>
                <div id="1-2" className="ur-input"></div>
                <div id="1-3" className="ur-input"></div>
                <div id="1-4" className="ur-input"></div>
            </div>
            {/* <!-- ROW 3 --> */}
            <div className="r3">
                <div id="2-0" className="ur-input"></div>
                <div id="2-1" className="ur-input"></div>
                <div id="2-2" className="ur-input"></div>
                <div id="2-3" className="ur-input"></div>
                <div id="2-4" className="ur-input"></div>
            </div>
            {/* <!-- ROW 4 --> */}
            <div className="r4">
                <div id="3-0" className="ur-input"></div>
                <div id="3-1" className="ur-input"></div>
                <div id="3-2" className="ur-input"></div>
                <div id="3-3" className="ur-input"></div>
                <div id="3-4" className="ur-input"></div>
            </div>
            {/* <!-- ROW 5 --> */}
            <div className="r5">
                <div id="4-0" className="ur-input"></div>
                <div id="4-1" className="ur-input"></div>
                <div id="4-2" className="ur-input"></div>
                <div id="4-3" className="ur-input"></div>
                <div id="4-4" className="ur-input"></div>
            </div>
            {/* <!-- ROW 6 --> */}
            <div className="r6">
                <div id="5-0" className="ur-input"></div>
                <div id="5-1" className="ur-input"></div>
                <div id="5-2" className="ur-input"></div>
                <div id="5-3" className="ur-input"></div>
                <div id="5-4" className="ur-input"></div>
            </div>
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
