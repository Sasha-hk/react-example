import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <input className={classes.input} ref={ref} {...props} />
    )
})

export default Input;