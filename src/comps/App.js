import { Component } from 'react'
import Monster from './Monster'

class App extends Component {

  constructor() {
    super() 

    this.state = {
      monsters: [],
      error: null
    }
  }
  
  componentDidMount() {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplceholder.typicode.com/users')
        const users = await response.json()  
        return this.setState({
          monsters: users
        })
      }
      catch(err) {
        console.log(err)
        return this.setState({error: err.message})
        
      }
    }
    fetchData()
  }

  render() {
    return (
      <div className='container'>
        <h2 >Monster</h2>
        {this.state.monsters.map(monster => <Monster  key={monster.id} monster={monster} />   )}
        <p>{this.state.error }</p>
      </div>
    )
  }
}

export default App
