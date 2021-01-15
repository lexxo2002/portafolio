import React from 'react' 
import './Navbar.css'
import Button from './Button'

class Navbar extends React.Component {
    constructor (props) {
        super (props)
        
        this.state = {

        }
    }
    render () {
        return (
            <div className="navbar">
                <div className="titulo">
                    <h1>Leonardo</h1>
                </div>
               
                <nav className="navbar__nav">
                    <ul className="navbar__nav_ul">
                        <Button 
                            titulo = "response"
                        />                    
                        <Button 
                            titulo = "response"
                        />                    
                        <Button 
                            titulo = "response"
                        />
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar