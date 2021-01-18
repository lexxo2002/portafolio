import React from 'react'
import './Technologies.css' 

import CardTechnologie from './CardTechnologie'
import { ReactComponent as Html } from '../Img/html.svg';
import { ReactComponent as Css } from '../Img/css.svg';
import { ReactComponent as Js } from '../Img/js.svg';
import { ReactComponent as Bootstrap } from '../Img/bootstrap.svg';
import { ReactComponent as Sass } from '../Img/sass.svg';
import { ReactComponent as ReactWeb } from '../Img/react.svg';
import { ReactComponent as Git } from '../Img/git.svg';
import { ReactComponent as Bash } from '../Img/bash.svg';

class Technologies extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
       return (
            <div className="technologie__container">
                <h2>Technologies</h2>
                <CardTechnologie 
                    technologie = { <Html /> }
                    porcentage = { 20 }
                />
                <CardTechnologie 
                    technologie = { <Css /> }
                    porcentage = { 20 }
                />
                <CardTechnologie 
                    technologie = { <Js /> }
                    porcentage = { 20 }
                />
                <CardTechnologie 
                    technologie = { <Bootstrap /> }
                    porcentage = { 20 }
                />
                <CardTechnologie 
                    technologie = { <Sass /> }
                    porcentage = { 20 }
                />
                <CardTechnologie 
                    technologie = { <ReactWeb /> }
                    porcentage = { 20 }
                />                                
                <CardTechnologie 
                    technologie = { <Git /> }
                    porcentage = { 20 }
                />  
                <CardTechnologie 
                    technologie = { <Bash /> }
                    porcentage = { 20 }
                />  
            </div>
       ) 
    }
}

export default Technologies