import React from 'react'
import './Presentacion.css'

class Presentacion extends React.Component {
    constructor () {
        super () 

        this.state = {
            name : "Leonardo" ,
            lastname : "Choquehuanca" ,
            dev : "Desarrollador"
        }
    }

    render () {

        const { name , lastname , dev } = this.state

        return (
            <div className="card">
                <div className="data">
                    <h1>
                        { name } { lastname }
                    </h1>
                    <p>{ dev }</p>
                </div>

            </div>
        )
    }
}

export default Presentacion