import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import ParSticles from './Components/ParSticles/ParSticles'
import Tecnologys from './Components/Tecnologys/Tecnologys'

class App extends React.Component {
    render () {
        return (
            <div>
                <Navbar />
                <ParSticles />
                <Tecnologys />
            </div>
        )
    }
}

export default App