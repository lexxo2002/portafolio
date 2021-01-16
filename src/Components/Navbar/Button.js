import React from 'react'
import './Button.css'

class Button extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        const { titulo } = this.props
        return (
                <a href="#" className="button__li_a">
                    { titulo }
                    { this.props.icon }
                </a>
        )
    }
}

export default Button