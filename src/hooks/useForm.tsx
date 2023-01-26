import { useState } from 'react';

const useForm = (callback?:any, customValues?:any) => {
    const [values, setValues] = useState(customValues)

    const handleChange = (event:React.FormEvent<HTMLFormElement>) => {
        const { name, value }:any = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        callback()
    }

    return {
        handleChange,
        handleSubmit,
        values
    }
}

export default useForm;