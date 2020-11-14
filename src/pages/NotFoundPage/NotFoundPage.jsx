import React from 'react'
//======> COMPONENTS 
import PageContainer from '../UI/PageContainer/PageContainer'
import PageHeader from '../UI/PageHeader/PageHeader'
//======> CSS
import './NotFoundPage.styles.css'

const NotFoundPage = () => {
    return (
        <PageContainer>
            <PageHeader title="Page not found" />
            <div className="not-found">
                <h2 className="not-found__title">404</h2>
                <p className="not-found__subtitle">
                    Ooops, we couldn't find what you are looking for, use the menu to navigate
                    back into the known zone.
                </p>
            </div>
        </PageContainer>
    )
}

export default NotFoundPage
