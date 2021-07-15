import React, {useState} from 'react';
import { validateEmail } from '../../utils/helper';

const Contact = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') 
        {
            const isValid = validateEmail(e.target.value);
            if (!isValid) 
            {
                setErrorMessage('Your email is invalid.');
            } 
            else 
            {
                setErrorMessage('');
            }
        } else 
        {
            if (!e.target.value.length) 
            {
                setErrorMessage(`${e.target.name} is required.`);
            } 
            else 
            {
                setErrorMessage('');
            }
        }
    };


    return (
        <section id="contact">
            {/* <h3>Contact</h3> */}
            <form id="contact-form" onSubmit = {handleSubmit}>
                <div class="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" name="name" defaultValue = {name} onBlur = {handleChange} />
                </div>
                <div class="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" className="form-control" name="email" defaultValue = {email} onBlur = {handleChange} />
                </div>
                <div class="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" className="form-control" rows="5" defaultValue = {message} onBlur = {handleChange} />
                </div>
                {errorMessage && (
                    <div id="error-message">
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="btn btn-grad" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;
