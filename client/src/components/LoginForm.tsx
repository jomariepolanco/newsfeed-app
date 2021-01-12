import { Button, Typography } from '@material-ui/core';
import React, { ChangeEvent } from 'react'
import FormInput from './FormInput'

interface Props {
    handleLogin: (name: string) => void;
}
const LoginForm: React.FC<Props> = ({handleLogin}) =>{

    const submitHandler = (e: any) => {
        e.preventDefault()
        handleLogin(e.target.name.value)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <Typography>Name</Typography>
                <FormInput type="text" name="name" onChangeHandler={null} />
                <br /><br />
                <Button variant="outlined" color="primary" type="submit">Login</Button>
            </form>
        </div>
    )
}

export default LoginForm;