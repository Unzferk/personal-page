import { useForm } from 'react-hook-form';
import './ContactForm.css';
import emailjs from 'emailjs-com';
import { useEffect } from 'react';


function ContactForm (){

    const {register,handleSubmit,reset,formState, formState:{errors}} = useForm({
        defaultValues:{
            name:"",
            email:"",
            subject:"",
            msg:""
        }
    });
  
    const onSubmit = (data) =>{

        console.log(data);

        emailjs.send('gmail', 'page_template', data, 'user_QHDcNWb9MuhduGEmlKyAu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert('Your message has been sent!');

    }
    
    useEffect(() => {
        if(formState.isSubmitSuccessful){
            reset({name:"",
                    email:"",
                    subject:"",
                    msg:""});
        }
    }, [formState,reset]);

    return(
        <>
            <div className='contact-form'>
                <h1>Send Me an Email</h1>  
                <form onSubmit={handleSubmit(onSubmit)} className='contact-form__fields'>
                    <input type="text" 
                           placeholder='Name'    
                           className="input-field"
                           {...register("name",{required:true})}
                           >   
                    </input>

                    <p>{errors.name?.type === 'required' && "This field is required"} </p>

                    <input type="email" 
                           placeholder='Email'    
                           className="input-field"
                           {...register("email",{required:true})}
                    >
                    </input>

                    <p> {errors.email?.type === 'required' && "This field is required"} </p>

                    <input type="text" 
                           placeholder='Subject'              
                           className="input-field"
                           {...register("subject",{required:true})}
                    >
                    </input>

                    <p> {errors.subject?.type === 'required' && "This field is required"} </p>

                    <textarea placeholder='Your Message'   
                              className="input-field text-area"
                              {...register("msg",{required:true})}
                              >           
                    </textarea>

                    <p> {errors.msg?.type === 'required' && "This field is required"} </p>
                    

                    <input 
                            type="submit" 
                            className="btn btn--primary btn--medium" 
                            value="Send Message"    
                    >                        
                    </input>
                </form>
            </div>        
        </>
    )
}

export default ContactForm
