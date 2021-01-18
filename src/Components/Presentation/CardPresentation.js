import React from 'react' 
import './CardPresentation.css'

class CardPresentation extends React.Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <div className="cardPresentation">
                <h2 className="cardPresentation__h2">
                    { this.props.dev }
                </h2>
                <p className="cardPresentation__ocupacion">
                    { this.props.ocupation }
                    <span className="cardPresentation__ocupacion-icon"> 
                        { this.props.imgDev } 
                    </span>
                </p>
                
            </div>
        )
    }
}

export default CardPresentation