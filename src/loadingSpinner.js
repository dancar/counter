import React from 'react'
import './loadingSpinner.css'

export default class LoadingSpinner extends React.Component {
    render = () => {
        return (
            <div style={ {display: this.props.show ? "block" : "none" } }
                 className="loading">
              טוען... &#8230;
            </div>
        )
    }
}
