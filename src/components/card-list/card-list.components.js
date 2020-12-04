import React from 'react'
import './card-list.styles.css'

const CardList = ({monsters}) => {
  return (
    <div className='card-list'>
      {monsters.map(monster => <h1  key={monster.id} monster={monster} > {monster.name} </h1>   )}
     
    </div>
  )
}

export default CardList
