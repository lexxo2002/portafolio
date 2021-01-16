import React from 'react'
import './Card.css'

class Card extends React.Component {
    constructor () {
        super ()

        this.state = {
            
        }
    }
    
    render () {
        return (
            <div className="card">
                <img className="card__technology" src={ this.props.technology }/>

                <div className="progress">
                    <p className="progress__num">{
                     this.props.progress }
                    </p>
                </div>
            </div>
        )
    }
}

export default Card