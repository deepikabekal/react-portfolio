import React from 'react'

const Message = () => {
    return (
        <div class="form-group">
            <label htmlFor="message">Message:</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
    )
}

export default Message
