import { Button, FormControl, FormLabel, RadioGroup } from '@material-ui/core'
import React, { ChangeEvent, useState } from 'react'
import CheckBoxes from './CheckBoxes'

interface Props {
    setCategory: (value: string) => void;
}

const SearchForm: React.FC<Props> = ({setCategory}) => {

    const [value, setValue] = useState('All')

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const renderCheckBoxes = () => {
        return ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'].map(category => <CheckBoxes category={category} setCategory={setCategory}/>)
    }
    
    const submitHandler = (event: any) => {
        event.preventDefault()
        setCategory(value)
    }
        return (
            <>
            <form onSubmit={submitHandler}>
                <FormControl component="fieldset">
                    <FormLabel style={{color: '#6e22b4', fontWeight: 'bolder'}}component="legend">Choose a Category</FormLabel>
                    <RadioGroup row value={value} onChange={changeHandler} aria-label="category">
                        {renderCheckBoxes()}
                    </RadioGroup>
                    <Button size={'large'} style={{color: '#ffffff', backgroundColor: '#9147ff'}}type="submit" variant="outlined">Submit</Button>
                </FormControl>
            </form>
            </>
        )
}

export default SearchForm;
