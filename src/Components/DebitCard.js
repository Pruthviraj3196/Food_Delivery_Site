import React from 'react'

const DebitCard = () => {
  return (
    <div className='cardGroup'>
        <img 
        src='https://www.pngplay.com/wp-content/uploads/8/Visa-Logo-Transparent-PNG.png' 
        alt='' className='cardLogo'/>
        <img src='https://banner2.cleanpng.com/20180330/krw/avieomx2m.webp' 
        alt='' 
        className='cardChip'/>

        <div className='card_number'>1234 567 8920 3274</div>
        <div className='card_name'>Pruthviraj Barbole</div>
        <div className='card_from'>10/21</div>
        <div className='card_to'>20/25</div>
        <div className='card_ring'></div>
    </div>
  )
}

export default DebitCard