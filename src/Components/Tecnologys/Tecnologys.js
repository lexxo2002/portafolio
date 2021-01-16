import React from 'react'
import { Animated } from 'react-animated-css'
import Card from './Card'
import './Tecnologys.css'

class Tecnologys extends React.Component {
    render () {
        return (
            <div className="response">
                <Card 
                    proyectName = "No tengo idea"
                    progress = { 60 }
                />
            </div>
        )
    }
}

export default Tecnologys