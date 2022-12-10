
export function KeyboardButton({keyboardLetter}) {

    return (
        <button id={keyboardLetter} className="kbd-btn">{keyboardLetter}</button>
    )
}