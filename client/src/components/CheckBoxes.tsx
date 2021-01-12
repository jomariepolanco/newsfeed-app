import React, { ChangeEvent, useState } from 'react'
import Radio from '@material-ui/core/Radio'
import { FormControlLabel } from '@material-ui/core'

interface Props {
    category: string;
}


const CheckBoxes: React.FC<Props> = ({category}) => {

    const [selectedCategory, setSelectedCategory] = useState('all')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedCategory(e.target.value)
    }

    return (
        <>
        <FormControlLabel value={category} control={<Radio checked={selectedCategory === category} onChange={handleChange} value={category} name={category} color="primary"/>} label={category} labelPlacement="end" />
        </>
    )
}

export default CheckBoxes;