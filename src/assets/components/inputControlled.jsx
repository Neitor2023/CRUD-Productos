import { useState } from 'react'

const inputControlled = () => {

        const [ value, setValue ] = useState("un valor x")
    return (
        <div>
        <input 
        value={value}
        type="text"
        onChange={ e => setValue(e.target.value)}
        />
        </div>
    );
};

export default inputControlled;