import React from 'react'
import './PageContainer.styles.css'

class PageContainer extends React.Component {

    render() {
        return (
            <section className="page">
                {this.props.children}
            </section>
        )
    }
}

export default PageContainer