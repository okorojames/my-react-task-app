import React from 'react'
import { Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p className="footer-paragraph">Copyright &copy; {new Date().getFullYear()} </p>
      <p className="footer-second-paragraph"><Link className='footer-about-link' to="/about">About Us</Link></p>
    </footer>
  )
}

export default Footer