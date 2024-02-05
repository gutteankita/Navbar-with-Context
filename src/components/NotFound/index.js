// Write your code here

import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          return (
            <>
              <Navbar />
              <div
                className={` not-found-container ${
                  isDarkTheme ? 'dark' : 'light'
                }`}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="not-found-img"
                  alt="not found"
                />
                <h1 className={`${isDarkTheme ? 'white' : 'black'}`}>
                  Lost Your Way?
                </h1>
                <p className={`${isDarkTheme ? 'white' : 'black'}`}>
                  We cannot seem to find the page you are looking for
                </p>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
