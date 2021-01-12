import React, { ChangeEvent, useState } from 'react'
import Radio from '@material-ui/core/Radio'
import { FormControlLabel } from '@material-ui/core'

interface Props {
    category: string;
    setCategory: (value: string) => void;
}


const CheckBoxes: React.FC<Props> = ({category, setCategory}) => {

    return (
        <FormControlLabel style={{color: 'grey'}} value={category} control={<Radio style={{color: '#9147ff'}}/>} label={category} labelPlacement="end" />
    )
}

export default CheckBoxes;