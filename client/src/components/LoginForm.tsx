import { Box, Button, Container, Typography } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react'
import FormInput from './FormInput'

interface Props {
    handleLogin: (name: string) => void;
}
const LoginForm: React.FC<Props> = ({handleLogin}) =>{

    const [name, setName] = useState('')

    const submitHandler = (e: any) => {
        e.preventDefault()
        handleLogin(name)
    }

    const onNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return (
        <Container fixed>
            <h1>Login</h1>
        <div>
            <form onSubmit={submitHandler}>
                <Typography>Name</Typography>
                <FormInput value={name} type="text" name="name" onChangeHandler={onNameChangeHandler} />
                <br /><br />
                <Button variant="outlined" color="primary" type="submit">Login</Button>
            </form>
        </div>

        </Container>
    )
}

export default LoginForm;