import React, {ChangeEvent, useState} from 'react'

interface Props {
    type: string;
    onChangeHandler: (input: string) => void;

}

const FormInput: React.FC<Props> = ({type, onChangeHandler}) => {

    const [value, setValue] = useState('')

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        if (onChangeHandler){
            onChangeHandler(value)
        }
    }

    return (
        <>
            <input type={type} value={value} name="input" onChange={changeHandler}  />
        </>
    )
}

export default  FormInput;