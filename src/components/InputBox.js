

export function InputBox({boxId, focus}) {
    return (
        <div id={boxId} className={`ur-input  ${focus === true ? 'focused': ''}`}></div>
    )
} 