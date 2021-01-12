import React, {ChangeEvent, useState} from 'react'

interface Props {
    type: string;
    name: string;
    onChangeHandler: null | ((input: string, name: string) => void); 
};


const FormInput: React.FC<Props> = ({type, onChangeHandler, name}) => {

    const [value, setValue] = useState('')

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        if (onChangeHandler){
            onChangeHandler(value, event.target.name)
        }
    }

    return (
        <>
            <input type={type} value={value} name={name} onChange={changeHandler}  />
        </>
    )
}

export default  FormInput;