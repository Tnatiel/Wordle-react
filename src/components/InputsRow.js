import { InputBox } from "./InputBox";


export function InputRow({inputsData, rowClass}) {

    


    return (
        <div className={rowClass}>
            {inputsData.map( inputData => (
                <InputBox 
                    boxId={inputData.inputId}
                    key={inputData.inputId}
                    focus={inputData.focus}
                    letter={inputData.letter}
                 />
            ))}
            {/* {console.log(inputsData)} */}
           {/* TODO add input onkeyup that enter the key */}
        </div>
    )
}