import React, {useState} from 'react';

const InputChain = () => {
    const [value, setValue] = useState('None')

    return (
        <div>
            <h1>{value}</h1>

            <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
        </div>
    )
}

export default InputChain;