import React from 'react'
import ResProyect from './ResProyect'
import './Proyects.css'
import { FaGithub } from "react-icons/fa"
import { RiGitlabFill } from "react-icons/ri"
import { ReactComponent as Sos } from '../Img/sos.svg'

class Proyects extends React.Component {
    render () {
        return (
            <div className="resProyect">
                <h2>Proyects</h2>
                <ResProyect
                    imgProyect = { <Sos /> }
                    nameProyect = "Calculadora"
                    iconGit = { <RiGitlabFill /> }
                    codeProyect = "https://www.google.com" 
                />
                <ResProyect
                    imgProyect = { <Sos /> }
                    nameProyect = "Calculadora"
                    iconGit = { <FaGithub /> }
                    codeProyect = "https://www.google.com" 
                />
                <ResProyect
                    imgProyect = { <Sos /> }
                    nameProyect = "Calculadora"
                    iconGit = { <RiGitlabFill /> }
                    codeProyect = "https://www.google.com" 
                />
                <ResProyect
                    imgProyect = { <Sos /> }
                    nameProyect = "Calculadora"
                    iconGit = { <FaGithub /> }
                    codeProyect = "https://www.google.com" 
                />
                <ResProyect
                    imgProyect = { <Sos /> }
                    nameProyect = "Calculadora"
                    iconGit = { <RiGitlabFill /> }
                    codeProyect = "https://www.google.com" 
                />
                <ResProyect
                    imgProyect = { <Sos /> }
                    nameProyect = "Calculadora"
                    iconGit = { <FaGithub /> }
                    codeProyect = "https://www.google.com" 
                />
            </div>
        )
    }
}

export default Proyects