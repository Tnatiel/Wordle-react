import { KeyboardButton } from "./KeyboardButton";
export function KeyboardRow({letters, onAddLetter}) {

    function handleCLick(event) {
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.id)
        onAddLetter(event.target.id)

    }

    return (
        <div className="kboard-row">
            {letters.map( letter => (
                <KeyboardButton handleClick={handleCLick} key={letter} keyboardLetter={letter}/>
            ))}
            
        </div>
    )
}