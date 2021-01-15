import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import ParSticles from './Components/ParSticles/ParSticles'

class App extends React.Component {
    render () {
        return (
            <div>
                <Navbar/>
                <ParSticles />
            </div>
        )
    }
}

export default App