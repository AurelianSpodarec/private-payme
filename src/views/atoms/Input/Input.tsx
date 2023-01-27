import React from 'react';


const Input: React.FC<InputProps> = (props) => {
    const {
        id,
        name,
        className,
        placeholder,
        variant = "primary",
        kind = "outline",
        disabled = false,
        fullWidth = false,
        label,
        labelPosition = "top",
        icon,
        iconPosition = "right",
        type = "text",
        autoComplete,
        defaultValue,
        required = false,
        helperText,
        value,
        onChange,
    } = props;

    return (
        <input 
            {...props}     
            id={id}
            name={name}
            type={type}
            autoComplete={autoComplete}
            placeholder={placeholder} 
            defaultValue={defaultValue}
            value={value}
            onChange={(e) => onChange(e)}
            className={`
                block w-full placeholder:text-[#D4D4D4] appearance-none rounded-[3px] border border-gray-300 px-3 py-2 placeholder-gray-800 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
                ${className} 
            `}
        />
    );
}

export default Input;

interface InputProps {
    id?: string;
    name?: string;
    className?: string;
    placeholder?: string;
    variant?: "primary" | "secondary";
    kind?: "outline" | "filled" | "standard";
    disabled?: boolean;
    fullWidth?: boolean;
    label?: string;
    labelPosition?: "top" | "right" | "bottom" | "left";
    icon?: string;
    iconPosition?: "left" | "right";
    type?: "number" | "email" | "tel" | "text" | "password" ;
    autoComplete?: string;
    defaultValue?: string;
    helperText?: string;
    required?: boolean;
    value?: any;
    onChange?: any;
}
