import React from 'react'
import EmailInput from './EmailInput'
import Message from './Message'
import NameInput from './NameInput'

const Contact = () => {
    return (
        <form>
            <NameInput></NameInput>
            <EmailInput></EmailInput>
            <Message></Message>
        </form>
    )
}

export default Contact
