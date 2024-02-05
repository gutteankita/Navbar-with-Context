// Write your code here

import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

class About extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const aboutBgColor = isDarkTheme ? 'dark' : 'light'
          const aboutImges = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
          const aboutTextColor = isDarkTheme ? 'white' : 'black'

          return (
            <>
              <Navbar />
              <div className={`about-container ${aboutBgColor}`}>
                <img src={aboutImges} alt="about" className="about-img" />
                <h1 className={aboutTextColor}>About</h1>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
