import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const handleThemeToggle = () => {
            toggleTheme()
          }

          const navBarBgColor = isDarkTheme ? 'darkshade' : 'light'
          const navBarWebsiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
          const NavLinkTextColor = isDarkTheme ? 'white' : 'black'
          const themeUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

          return (
            <nav className={`nav-header ${navBarBgColor}`}>
              <div className="nav-content">
                <div className="nav-img-container">
                  <img
                    className="website-logo"
                    src={navBarWebsiteLogo}
                    alt="website logo"
                  />
                </div>

                <ul className="nav-menu">
                  <li className="nav-menu-item">
                    <Link to="/" className={`nav-link ${NavLinkTextColor}`}>
                      Home
                    </Link>
                  </li>

                  <li className="nav-menu-item">
                    <Link
                      to="/about"
                      className={`nav-link ${NavLinkTextColor}`}
                    >
                      About
                    </Link>
                  </li>
                </ul>

                <button
                  data-testid="theme"
                  type="button"
                  className="theme-change-btn"
                  onClick={handleThemeToggle}
                >
                  <img
                    testid="theme-img"
                    className="theme"
                    src={themeUrl}
                    alt="theme"
                  />
                </button>
              </div>
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
