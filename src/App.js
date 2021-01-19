import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Presentation from './Components/Presentation/Presentation'
import Technologies from './Components/Technologies/Technologies'
import Proyects from './Components/Proyects/Proyects'

class App extends React.Component {
    render () {
        return (
            <div>
                <Navbar />
                <Presentation />
                <Technologies />
                <Proyects />
            </div>
        )
    }
}

export default App