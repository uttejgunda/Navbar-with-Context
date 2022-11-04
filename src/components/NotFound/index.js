import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgTheme = isDarkTheme
        ? 'dark-not-found-theme'
        : 'light-not-found-theme'
      const notFoundFonts = isDarkTheme
        ? 'not-found-dark-fonts'
        : 'not-found-light-fonts'

      return (
        <>
          <Navbar />
          <div className={`not-found-container ${notFoundBgTheme}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={`not-found-title ${notFoundFonts}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-desc ${notFoundFonts}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
