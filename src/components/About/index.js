import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBgColorTheme = isDarkTheme
        ? 'about-dark-theme-bg'
        : 'about-light-theme-bg'
      const aboutTitleColorTheme = isDarkTheme
        ? 'about-dark-theme-title'
        : 'about-light-theme-title'
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <>
          <Navbar />
          <div className={`about-container ${aboutBgColorTheme}`}>
            <img src={aboutImage} alt="about" className="about-image" />
            <h1 className={`about-title ${aboutTitleColorTheme}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
