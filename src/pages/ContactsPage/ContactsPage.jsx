import React from 'react'
//=======> COMPONENTS 
import PageContainer from '../UI/PageContainer/PageContainer'
import PageHeader from '../UI/PageHeader/PageHeader'
//=======> CSS
import './ContactsPage.styles.css'

const ContactsPage = () => {
    return (
        <PageContainer>
            <PageHeader title="Contact us" />
            <div className="contact-us-page">
                <form className="contacts">
                    <input className="contacts__input" type="text" placeholder="Your Name" />
                    <input className="contacts__input" type="text" placeholder="Your Email" />
                    <textarea className="contacts__input" placeholder="Your Message" ></textarea>
                    <button classNane="contacts__button">Contact us</button>
                </form>
            </div>

        </PageContainer>
    )
}

export default ContactsPage
