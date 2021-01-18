import React from 'react' 
import { SiGmail } from 'react-icons/si'
import { GrTechnology , GrProjects } from "react-icons/gr";
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
                            titulo = "tecnologys"
                            icon = {<GrTechnology />}
                        />                    
                        
                        <Button 
                            titulo = "proyects"
                            icon = {<GrProjects />}
                        />   

                        <Button 
                            titulo = "snone@gmail.com"
                            icon = {<SiGmail />}
                        />

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar