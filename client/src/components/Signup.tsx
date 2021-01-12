import { Button, Typography } from '@material-ui/core';
import React from 'react'
import FormInput from './FormInput';

interface Props {
    handleSignup: (name: string) => void;
}

const Signup: React.FC<Props> = ({handleSignup}) => {
    return (
        <div>
            <form>
                <Typography>Name</Typography>
                <FormInput type="text" name="name" onChangeHandler={null} />
                <br /><br />
                <Button variant="outlined" color="primary" type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default Signup;