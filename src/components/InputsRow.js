import { LetterBox } from "./LetterBox";


export function InputRow({ids, rowClass}) {
    return (
        <div className={rowClass}>
            {ids.map( id => (
                <LetterBox 
                    boxId={id}
                    key={id}
                 />
            ))}            
        </div>
    )
}