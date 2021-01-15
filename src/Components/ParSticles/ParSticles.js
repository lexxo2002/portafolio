import React from 'react'
import './ParSticles.css'
import Particles from 'react-particles-js'
import Presentacion from './Presentacion'


class ParSticles extends React.Component {
    constructor () {
        super ()

        this.state = {
            
        }
    }

    render () {
        return (
            <div className="pars">
                <Particles />
                <Presentacion />
            </div>
        )
    }
}

export default ParSticles