import React from 'react'
import ContactColumn from '../components/ContactColumn'
import PhoneIcon from '../assets/icon/phone.png'
import EmailIcon from '../assets/icon/email.png'
import AddressIcon from '../assets/icon/address.png'
import '../assets/css/Contact.css'

function Contact () {
    return (
        <div id="contact">
            <div class="parallax"></div>
            <h1 id='title'>Get in touch with us!</h1>
            <div id='contact-detail'>
                <ContactColumn contactIcon={PhoneIcon} contactTitle='Phone' contactContent='0941639193'/>
                <ContactColumn contactIcon={AddressIcon} contactTitle='Address' contactContent='227 Nguyen Van Cu, District 5, HCM city'/>
                <ContactColumn contactIcon={EmailIcon} contactTitle='Email' contactContent='nguyenln2204@gmail.com'/>
            </div>
            <div class="parallax"></div>
        </div>
    )
}

export default Contact