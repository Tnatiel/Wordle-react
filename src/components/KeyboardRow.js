import { KeyboardButton } from "./KeyboardButton";
export function KeyboardRow({letters, rowId}) {
    return (
        <div className="kboard-row">
            {letters.map( letter => (
                <KeyboardButton key={letter} keyboardLetter={letter}/>
            ))}
            
        </div>
    )
}