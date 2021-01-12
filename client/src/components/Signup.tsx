import { Button, Container, Typography } from '@material-ui/core';
import React, {useState, ChangeEvent} from 'react'
import FormInput from './FormInput';

interface Props {
    handleSignup: (name: string) => void;
}

const Signup: React.FC<Props> = ({handleSignup}) => {
    const [name, setName] = useState('')

    const submitHandler = (e: any) => {
        e.preventDefault()
        handleSignup(name)
    }

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    return (
        <Container fixed>
            <h1>Sign Up</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <Typography>Name</Typography>
                    <FormInput type="text" name="name" value={name}onChangeHandler={changeHandler} />
                    <br /><br />
                    <Button variant="outlined" color="primary" type="submit">Sign Up</Button>
                </form>
            </div>
        </Container>
    )
}

export default Signup;