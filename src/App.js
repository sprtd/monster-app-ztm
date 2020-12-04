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
        return this.setState({error: `Error: ${err.message}`})
        
      }
    }
    fetchData()
  }

  render() {
    return (
      <div className='container'>
        <h2>Monster</h2>
        <CardList  monsters={this.state.monsters} />
  
        <p>{this.state.error }</p>

      </div>
    )
  }
}

export default App
