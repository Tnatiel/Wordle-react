import { KeyboardButtom } from "./KeyboardButton";
export function KeyboardRow({letters}) {
    return (
        <div className="kboard-row1">
            {letters.map( letter => (
                <KeyboardButtom keyboardLetter={letter}/>
            ))}
            
        </div>
    )
}