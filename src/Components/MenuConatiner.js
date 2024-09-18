import React from 'react'

const MenuConatiner = ({link, icon, isHome}) => {
  return (
    <li className={isHome? "active": ""}>
        <a href={link}>
            <span className='icon'>{icon}</span>
        </a>
    </li>
  )
}

export default MenuConatiner