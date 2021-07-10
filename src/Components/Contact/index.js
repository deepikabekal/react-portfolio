import React from 'react'
import Button from './Button'
import EmailInput from './EmailInput'
import Message from './Message'
import NameInput from './NameInput'

const Contact = () => {
    return (
        <form>
            <NameInput></NameInput>
            <EmailInput></EmailInput>
            <Message></Message>
            <Button></Button>
        </form>
    )
}

export default Contact
