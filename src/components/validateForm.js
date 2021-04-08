export default function validateForm(values){
    let errors={};

    if(!values.name.trim()){
        errors.name='Name is Required';
    }
    
    if(!values.email){
        errors.email = 'Email is required';
    }
    if(!values.subject.trim()){
        errors.subject='Subject is Required';
    }
    if(!values.message){
        errors.message='Message is Required';
    }

    return errors;
}