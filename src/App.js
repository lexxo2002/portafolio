import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Presentation from './Components/Presentation/Presentation'
import Technologies from './Components/Technologies/Technologies'

class App extends React.Component {
    render () {
        return (
            <div>
                <Navbar />
                <Presentation />
                <Technologies />
            </div>
        )
    }
}

export default App