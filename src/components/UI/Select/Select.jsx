import React from 'react';
import classes from './Select.module.css';

const Select = ({defaultValue, options, value, onChange}) => {
    return (
        <div>
            <select 
                className={classes.select}
                value={value} 
                onChange={sort => onChange(sort.target.value)}
            >
                <option disabled value={defaultValue}>{defaultValue}</option>
                {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
            </select>
        </div>
    )
}

export default Select;