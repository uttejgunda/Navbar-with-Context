import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navbarBgTheme = isDarkTheme ? 'dark-nav-theme' : 'light-nav-theme'
      const navFontsColor = isDarkTheme
        ? 'dark-theme-fonts'
        : 'light-theme-fonts'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeButtonImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onToggleTheme = () => {
        toggleTheme()
      }
      return (
        <div className={`nav-container ${navbarBgTheme}`}>
          <div className="nav-content">
            <img
              src={websiteLogo}
              alt="website logo"
              className="website-logo"
            />
            <ul className="nav-menu-list-container">
              <Link to="/" className="link-item">
                <li className={`menu-item ${navFontsColor}`}>Home</li>
              </Link>
              <Link to="/about" className="link-item">
                <li className={`menu-item ${navFontsColor}`}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="theme-button"
              onClick={onToggleTheme}
              testid="theme"
            >
              <img src={themeButtonImage} alt="theme" className="theme-image" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
