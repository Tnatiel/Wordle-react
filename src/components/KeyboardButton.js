
export function KeyboardButtom({keyboardLetter}) {

    return (
        <button key={Date().now} id={keyboardLetter} className="kbd-btn">{keyboardLetter}</button>
    )
}