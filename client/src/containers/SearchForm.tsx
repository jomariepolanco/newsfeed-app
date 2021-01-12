import { Button, FormControl, FormLabel, RadioGroup } from '@material-ui/core'
import React, { ChangeEvent, useState } from 'react'
import CheckBoxes from '../components/CheckBoxes'

export default function SearchForm() {

    const [value, setValue] = useState('All')

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const renderCheckBoxes = () => {
        return ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'].map(category => <CheckBoxes category={category} />)
    }
    
    console.log(value)
        return (
            <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Choose a Category</FormLabel>
                <RadioGroup row value={value} onChange={changeHandler} aria-label="category">
                    {renderCheckBoxes()}
                </RadioGroup>
                <Button variant="outlined" color="primary">Submit</Button>
            </FormControl>
            </>
        )
}
