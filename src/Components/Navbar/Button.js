import React from 'react'
import './Button.css'

class Button extends React.Component {
    constructor (props) {
        super (props)

        this.state = {

        }
    }

    render () {
        const { titulo } = this.props
        return (
                <a href="#" className="button__li_a">
                    { titulo }
                </a>
        )
    }
}

export default Button