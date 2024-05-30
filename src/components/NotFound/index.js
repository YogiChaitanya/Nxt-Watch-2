import {NotFoundContainer, Image, Heading, Paragraph} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const textColor = isDarkTheme ? 'white' : 'black'
      const bgColor = isDarkTheme ? 'black' : 'white'

      return (
        <>
          <NotFoundContainer bgColor={bgColor}>
            <Image src={imageUrl} alt="not found" />
            <Heading color={textColor}>Page Not Found</Heading>
            <Paragraph color={textColor}>
              We are sorry, the page you requested could not be found.
            </Paragraph>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
