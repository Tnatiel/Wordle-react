import { InputBox } from "./InputBox";


export function InputRow({inputsData, rowClass}) {

    


    return (
        <div className={rowClass}>
            {inputsData.map( inputData => (
                <InputBox 
                    boxId={inputData.inputId}
                    key={inputData.inputId}
                 />
            ))}            
           {/* TODO conditional className */}
           {/* TODO add input onkeyup that enter the key */}
        </div>
    )
}