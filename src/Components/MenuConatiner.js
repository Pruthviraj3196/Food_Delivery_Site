import React from 'react'

const MenuConatiner = ({link, icon}) => {
  return (
    <li>
        <a href={link}>
            <span className='icon'>{icon}</span>
        </a>
    </li>
  )
}

export default MenuConatiner