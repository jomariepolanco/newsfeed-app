import React from 'react'

interface Props {
    getNews: () => void;
}

const SearchForm: React.FC<Props> = ({getNews}) => {
    return (
        <div>
            search form
        </div>
    )
}

export default SearchForm;