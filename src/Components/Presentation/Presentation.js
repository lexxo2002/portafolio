import React from 'react'
import './Presentation.css'
import CardPresentation from './CardPresentation'
import { FaFileCode } from "react-icons/fa";

class Presentation extends React.Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <div className="container">
                <CardPresentation
                    dev = "Leonardo Choquehuanca    "
                    imgDev = { <FaFileCode />}
                    ocupation = "Desarrollador"
                />
            </div>
        )
    }
}

export default Presentation