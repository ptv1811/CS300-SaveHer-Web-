import React from 'react'

function ContactColumn (props) {
    return (
        <div id='contact-column'>
            <img id='contact-icon' src={props.contactIcon} alt='icon'></img>
            <div id='contact-title'>{props.contactTitle}</div>
            <div id='contact-content'>{props.contactContent}</div>
        </div>
    )
}

export default ContactColumn