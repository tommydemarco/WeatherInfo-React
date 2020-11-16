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
                    <textarea className="contacts__input" type="text"  placeholder="Your Message" ></textarea>
                    <button className="contacts__button" >Contact us</button>
                </form>
                <div className="contact-description">
                    <h3 className="contact-description__title">We are happy to hear from you!</h3>
                    <p className="contact-description__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Vitae numquam at eos consequuntur accusantium beatae ex aperiam 
                        veritatis saepe iste ullam aut quaerat, dolorum, repudiandae 
                        ducimus iure laboriosam recusandae iusto.
                    </p>
                </div>
            </div>

        </PageContainer>
    )
}

export default ContactsPage
