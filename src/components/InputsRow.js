import { InputBox } from "./InputBox";


export function InputRow({inputsData, rowClass}) {
    return (
        <div className={rowClass}>
            {console.log(inputsData)}
            {inputsData.map( inputData => (
                <InputBox 
                    boxId={inputData.inputId}
                    key={inputData.inputId}
                 />
            ))}            
        </div>
    )
}