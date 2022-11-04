import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColorTheme = isDarkTheme ? 'dark-theme-bg' : 'light-theme-bg'
      const titleColorTheme = isDarkTheme
        ? 'dark-theme-title'
        : 'light-theme-title'
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      return (
        <>
          <Navbar />
          <div className={`home-container ${bgColorTheme}`}>
            <img src={homeImage} alt="home" className="home-image" />
            <h1 className={`home-title ${titleColorTheme}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
