import React from 'react'
import './ResProyect.css'

class ResProyect extends React.Component {
    render () {

        return (
            
            <div className="proyect">
                
                <div className="proyect__container">

                        <p>
                            { this.props.nameProyect }
                        </p>
                        <div className="proyect__img">
                            {this.props.imgProyect}
                        </div>
                        <div className="proyect__code">
                            <a href={ this.props.codeProyect } target="_blank">
                                { this.props.iconGit }
                                    <span>Ver codigo </span>
                            </a>
                        </div>
                </div>

            </div>
        )
    }
}

export default ResProyect