import React from 'react'

interface Props {
    handleSignup: (name: string) => void;
}

const Signup: React.FC<Props> = ({handleSignup}) => {
    return (
        <div>
            signup
        </div>
    )
}

export default Signup;