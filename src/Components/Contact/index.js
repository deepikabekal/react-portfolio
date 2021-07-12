import React, {useState} from 'react';
import Button from './Button';
import EmailInput from './EmailInput';
import Message from './Message';
import NameInput from './NameInput';

const Contact = () => {

    const [formState, setFormState] = useState({name : ' ', email : ' ', message : ' '});
    const {name, email,message} = formState;

    //handles the change in the state of the form elements
    function handleChange (e) {
        setFormState({...formState, [e.target.name] : [e.target.value]});
        //console.log(formState);
    };

    //handles the form submission
    function handleSubmit (e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
        <h3>Contact me</h3>
        <form id="contact-form" onSubmit = {handleSubmit}>
            <div class="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" name="name" defaultValue = {name} onChange = {handleChange} />
            </div>
            <div class="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" name="email" defaultValue = {email} onChange = {handleChange} />
            </div>
            <div class="form-group">
                <label htmlFor="message">Message:</label>
                <textarea name="message" className="form-control" rows="5" defaultValue = {message} onChange = {handleChange} />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    </section>
    )
}

export default Contact
