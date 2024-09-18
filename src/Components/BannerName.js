import React from 'react'

const BannerName = ({name, discount, link}) => {
  return (
   <div className='bannerContent'> 
   <h3>Hello {name}</h3>
   <p>
    Get free discount for Every <span>${discount}</span> Purchase
   </p>

   <a href={link}>Learn More</a>
   </div>
  )
}

export default BannerName