import  { Component } from 'react'

class Monster extends Component {
 

  render() {
    return (
      <div className='monster'>
       
        <h1 >{ this.props.monster.name } </h1>
      </div>
    )
  }
}

export default Monster
