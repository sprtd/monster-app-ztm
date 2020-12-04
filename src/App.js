import { Component } from 'react'
import CardList from './components/card-list/card-list.components'


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
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
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
        <h2>Monster</h2>
        <CardList>
          {this.state.monsters.map(monster => <h1  key={monster.id} monster={monster} > {monster.name} </h1>   )}
        </CardList>
        <p>{this.state.error }</p>

      </div>
    )
  }
}

export default App
