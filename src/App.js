
import './App.css';
import { Header } from './components/Header';
import { InputRow } from './components/InputsRow';
import { KeyboardRow } from './components/KeyboardRow';


function App() {

  const mainTitle = 'Wordle'
  // Input rows
  const rowOneIds = ['0-0', '0-1', '0-2', '0-3', '0-4']
  const rowTwoIds = ['1-0', '1-1', '1-2', '1-3', '1-4']
  const rowThreeIds = ['2-0', '2-1', '2-2', '2-3', '2-4']
  const rowFourIds = ['3-0', '3-1', '3-2', '3-3', '3-4']
  const rowFiveIds = ['4-0', '4-1', '4-2', '4-3', '4-4']
  const rowSixIds = ['5-0', '5-1', '5-2', '5-3', '5-4']

  // Keyboard rows
  const rowOneLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'] 
  const rowTwoLetters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'] 
  const rowThreeLetters = ['enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'del'] 



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
            <KeyboardRow letters={rowOneLetters}/>
            {/* <!-- ROW2 --> */}
            <KeyboardRow letters={rowTwoLetters}/>
            {/* <!-- ROW3 --> */}
            <KeyboardRow letters={rowThreeLetters}/>
        </div>
    </main>
    
  );
}

export default App;
