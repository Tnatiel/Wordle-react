

export function InputBox({boxId, focus, letter}) {
    return (
        <div id={boxId} className={`ur-input  ${focus === true ? 'focused': ''}`}>{focus === true ? letter : '' }</div>
    )
} 