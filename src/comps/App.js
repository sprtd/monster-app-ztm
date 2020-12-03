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
    console.log('first')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      
    
      .then(users => {
        console.log(users)
        return this.setState({
        monsters: users
        })
      })

  }


  
    
     
    
  

  render() {
    return (
      <div className='container'>
        <h2 >Monster</h2>
        {this.state.monsters ? this.state.monsters.map(monster => <Monster  key={monster.id} monster={monster} /> ) : <p>Nothing to show</p>}
      </div>
    )
  }
}

export default App
