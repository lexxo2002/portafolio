import React from 'react'
import './CardTechnologie.css'

class CardTechnologie extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div className="card">
                <div className="card__technologie">
                    { this.props.technologie }
                </div>


                <div className="card__progress">
                    <span>
                        { this.props.porcentage }
                    </span>
                </div>
           </div>
        )
    }
}

export default CardTechnologie