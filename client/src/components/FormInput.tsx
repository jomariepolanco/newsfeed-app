import React, {ChangeEvent, useState} from 'react'

interface Props {
    type: string;
    name: string;
    onChangeHandler: null | ((event: ChangeEvent<HTMLInputElement>) => void); 
    value: string | null;
};


const FormInput: React.FC<Props> = ({type, onChangeHandler, name}) => {

    const [value, setValue] = useState('')

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        if (onChangeHandler){
            onChangeHandler(event)
        }
    }

    return (
        <>
            <input type={type} value={value} name={name} onChange={changeHandler}  />
        </>
    )
}

export default  FormInput;