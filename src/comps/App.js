import { Component } from 'react'
import { v4 as uuid } from 'uuid'
import Monster from './Monster'

class App extends Component {

  constructor() {
    super() 

    this.state = {
      monsters: [
        {
          id: uuid(),
          name: 'Dracula'
        },
        {
          id: uuid(),
          name: 'Maestro'
        },
        {
          id: uuid(),
          name: 'Coolies'
        }
      ]
    }
  }

  render() {
    return (
      <div className='container'>
        <h2 >Monster</h2>
        {this.state.monsters.map(monster => <Monster  key={monster.id} monster={monster} /> )}
      </div>
    )
  }
}

export default App
