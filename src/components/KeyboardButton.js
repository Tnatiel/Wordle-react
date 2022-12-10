
export function KeyboardButton({keyboardLetter, handleClick}) {

    return (
        <button onClick={handleClick} id={keyboardLetter} className="kbd-btn">{keyboardLetter}</button>
    )
}