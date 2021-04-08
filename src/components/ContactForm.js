import React from 'react';
import useForm from './useForm';
import './ContactForm.css';
import validateForm from './validateForm'

function ContactForm (){


    const {handleChange,values,handleSubmit,errors}=useForm(validateForm);

    return(
        <>
            <div className='contact-form'>
                <h1>Send Me an Email</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto ">
                            <input 
                                type="text" 
                                className="input-field" 
                                placeholder="Name" 
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                
                                />
                            {errors.name && <p>* {errors.name}</p>}
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input 
                                type="email" 
                                className="input-field" 
                                placeholder="Email Address" 
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                />
                            {errors.email && <p>* {errors.email}</p>}
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input 
                                type="text" 
                                className="input-field" 
                                placeholder="Subject" 
                                name="subject"
                                value={values.subject}
                                onChange={handleChange}
                                />
                            {errors.subject && <p>* {errors.subject}</p>}
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea 
                                className="input-field text-area" 
                                id="" cols="30" 
                                rows="8" 
                                placeholder="Your message" 
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                >
                            </textarea>
                            {errors.message && <p>* {errors.message}</p>}
                        </div>
                        <div className="col-8 pt-2 mx-auto">
                            <input 
                            type="submit" 
                            className="btn btn--primary btn--medium" 
                            value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm
