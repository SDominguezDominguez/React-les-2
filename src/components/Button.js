import React from 'react';

function Button({buttonType, setFunction, buttonName, disabled}) {
    return (
        <button
            type={buttonType}
            onClick={setFunction}
            disabled={disabled}
        >{buttonName}
        </button>
    );
}

export default Button;