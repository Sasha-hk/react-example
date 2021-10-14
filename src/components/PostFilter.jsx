import React from 'react';
import Select from './UI/Select/Select'
import Input from './UI/Input/Input'



const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input onChange={e => setFilter({...filter, query: e.target.value})} value={filter.query} />

            <Select 
                options={[{value: 'title', name: 'by name'}, {value: 'body', name: 'by body'}]} 
                defaultValue="None" 
                value={filter.sort}
                onChange={e => setFilter({...filter, sort: e})}    
            />
        </div>
    )
}

export default PostFilter;
