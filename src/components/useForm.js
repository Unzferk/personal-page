import {useState} from 'react';

import emailjs from 'emailjs-com';

const useForm=(validate)=>{
    const [values,setValues] =useState({
        name:'',
        email:'',
        subject:'',
        message:'',
    })

    const [errors,setErrors] = useState({})

    const handleChange=e=>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validate(values));

        emailjs.sendForm('gmail', 'page_template', e.target, 'user_QHDcNWb9MuhduGEmlKyAu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setValues('');
        e.target.reset();

    }
    
    return {handleChange,values,handleSubmit,errors};
}


export default useForm;
