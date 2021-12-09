import React, {KeyboardEvent} from 'react';

interface InputProps {
    onChange: any;
    onEnterPress: any;
}

const Input = (props: InputProps) => {
    const {
        onChange,
        onEnterPress,
    } = props;

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            console.log(`Enter is pressed: ${e.key}`);
            onEnterPress();
        }
    }

    return (
        <input onChange={onChange} onKeyDown={handleKeyDown} placeholder='What needs to be done?'/>
    )
}

export default Input;