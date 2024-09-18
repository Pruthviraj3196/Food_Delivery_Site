import React from 'react'
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';

const Header = () => {
  return (
    <header>
        <img src='https://image.similarpng.com/very-thumbnail/2020/08/Nature-food-Logo-on-transparent-background-PNG.png' 
        alt='Logo.png' 
        className='logo'
        />

        <div className='inputBox'>
            <SearchRounded className='serachIcon' />
            <input type='text' placeholder='serach' />
        </div>
        <div className='shoppingCart'>
            <ShoppingCartRounded className='cart' />
            <div className='cart_content'>
                <p>2</p>
            </div>
        </div>
        <div className='profileContainer'>
            <div className='imgBox'>
                <img src='https://www.citypng.com/public/uploads/preview/png-round-blue-contact-user-profile-icon-701751694975293fcgzulxp2k.png'
                 alt=''
                 className='profilePic'
                 />
            </div>

            <h2 className='userName'>Pruthvi</h2>
        </div>
        <div className='toggleMenu'>
            <BarChart className='toggleIcon' />
        </div>
    </header>
  )
}

export default Header