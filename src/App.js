
import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { InputRow } from './components/InputsRow';
import { KeyboardRow } from './components/KeyboardRow';


function App() {

  
  // useEffect(() => {
    
  // }, [currentInputIndex])
  
  const mainTitle = 'Wordle'
  // Input rows
  const rowOneIds = ['0', '1', '2', '3', '4']
  const rowOneInputs = rowOneIds.map( id => id === '0' ? ({inputId: id, focus: true, letter: ''}): ({inputId: id, focus: false, letter: ''}))
  const rowTwoIds = ['6', '7', '8', '9', '10']
  const rowTwoInputs = rowTwoIds.map( id => ({inputId: id, focus: false, letter: ''}))
  const rowThreeIds = ['11', '12', '13', '14', '15']
  const rowThreeInputs = rowThreeIds.map( id => ({inputId: id, focus: false, letter: ''}))
  const rowFourIds = ['16', '17', '18', '19', '20']
  const rowFourInputs = rowFourIds.map( id => ({inputId: id, focus: false, letter: ''}))
  const rowFiveIds = ['21', '22', '23', '24', '25']
  const rowFiveInputs = rowFiveIds.map( id => ({inputId: id, focus: false, letter: ''}))
  const rowSixIds = ['26', '27', '28', '29', '30']
  const rowSixInputs = rowSixIds.map( id => ({inputId: id, focus: false, letter: ''}))
  const allInputs = rowOneInputs.concat(rowTwoInputs).concat(rowThreeInputs).concat(rowFourInputs).concat(rowFiveInputs).concat(rowSixInputs)
  
  
  const [inputs, setCurrentInputs] = useState([allInputs])

  
  
  // Keyboard rows
  const rowOneLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'] 
  const rowTwoLetters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'] 
  const rowThreeLetters = ['enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'del'] 
  
  
  const addLetter = (letter) => {
    const focusedInput = allInputs.filter( input => input.focus !== false)
    focusedInput.map( input => input.letter = letter )
          // setCurrentInputIndex(currentInputIndex <= 30 ? currentInputIndex + 1: console.log('GameOver'))
    console.log(focusedInput)
    // console.log(currentInput)
    // setCurrentInput(input)
  }

  return (
        <main>

        {/* <!-- PAGE HEADER --> */}
        <Header appTitle={mainTitle} />

        {/* <!-- USER INPUTS --> */}
        <div className="user-input-sec">
            {/* <!-- ROW 1 --> */}
            <InputRow 
              inputsData={rowOneInputs}
              rowClass={'r1'}
            />
            {/* <!-- ROW 2 --> */}
            <InputRow 
              inputsData={rowTwoInputs}
              rowClass={'r2'}
              />
            {/* <!-- ROW 3 --> */}
            <InputRow 
              inputsData={rowThreeInputs}
              rowClass={'r3'}
              />
            {/* <!-- ROW 4 --> */}
            <InputRow 
              inputsData={rowFourInputs}
              rowClass={'r4'}
              />
            {/* <!-- ROW 5 --> */}
            <InputRow 
              inputsData={rowFiveInputs}
              rowClass={'r5'}
              />
            {/* <!-- ROW 6 --> */}
            <InputRow 
              inputsData={rowSixInputs}
              rowClass={'r6'}
              />
        </div>
        
        {/* <!-- KEYBOARD --> */}
        <div className="keyboard">
            {/* <!-- ROW1 --> */}
            <KeyboardRow onAddLetter={addLetter}  letters={rowOneLetters}/>
            {/* <!-- ROW2 --> */}
            <KeyboardRow onAddLetter={addLetter} letters={rowTwoLetters}/>
            {/* <!-- ROW3 --> */}
            <KeyboardRow onAddLetter={addLetter} letters={rowThreeLetters}/>
        </div>
    </main>
    
  );
}

export default App;