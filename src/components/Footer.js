import '../css/footer.css';
import social1 from '../img/linkedin.png';
import social2 from '../img/github.png';
import social3 from '../img/insta.png';
import social4 from '../img/twitter.png';

import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <a href='https://www.linkedin.com/in/shikhar-mall-161b05230' target='new'> <img src={social1} alt=''/> </a>
        <a href='https://github.com/Shikharmall' target='new'> <img src={social2} alt=''/> </a>
        <a href='https://instagram.com/_shikharrrrr_?igshid=NTA5ZTk1NTc=' target='new'> <img src={social3} alt=''/> </a>
        <a href='https://twitter.com/itsShikharMall?s=08' target='new'> <img src={social4} alt=''/> </a>
    </div>
  )
}
