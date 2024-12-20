import React from 'react'
import './module.css'

const Footer = () => {
  return (
    <div className='footer-container'>

      <a className='coffe-logo' href="./">
        <img style={{
          width: '24px',
          height: '24px'
        }} src="./nav-image/coffe-icon.png" alt="" />
        <h1 style={{
          color: 'white',
        }}>coffeeroasters</h1>
      </a>

      <ul>
        <li ><a style={{ color: 'gray' }} href="">HOME</a></li>
        <li><a style={{ color: 'gray' }} href="">ABOUT US</a></li>
        <li><a style={{ color: 'gray' }} href="">CREATE YOUR PLAN</a></li>
      </ul>

      <div className="contact">
<a  target='_blank' href="https://www.facebook.com/"><img className='messenjer' src="./footer-img/facebook.png" width={24} alt="" /></a>
<a  target='_blank' href="https://x.com/"><img className='messenjer' src="./footer-img/twitter.png" width={24} alt="" /></a>
<a  target='_blank' href="https://www.instagram.com/"><img className='messenjer' src="./footer-img/instagram.png" width={24} alt="" /></a>
      </div>

    </div>
  )
}

export default Footer