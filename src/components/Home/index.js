// Write your code here

import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const homeBgColor = isDarkTheme ? 'dark' : 'light'
          const homeImges = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
          const homeTextColor = isDarkTheme ? 'white' : 'black'
          return (
            <>
              <Navbar />
              <div className={`home-container ${homeBgColor}`}>
                <img className="home-img" src={homeImges} alt="home" />
                <h1 className={homeTextColor}>Home</h1>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
