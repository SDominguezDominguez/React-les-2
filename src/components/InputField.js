import React from 'react';
import './InputField.css'

function InputField({label, description, type, value, callFunction}) {
    return (
        <label htmlFor={label}>
            {description}
            <input type={type}
                   id={label}
                   value={value}
                   onChange={(e) => callFunction(e.target.value)}

            />
        </label>

    )

}

export default InputField;