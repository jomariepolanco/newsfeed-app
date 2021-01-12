import React from 'react'

interface Props {
    handleLogin: (name: string) => void;
}
const LoginForm: React.FC<Props> = () =>{
    return (
        <div>
            login
        </div>
    )
}

export default LoginForm;