import Header from '../Header'
import LeftColumn from '../LeftColumn'
import {
  NotFoundContainer,
  CardContainer,
  Image,
  Heading,
  Paragraph,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const textColor = isDarkTheme ? '#ffffff' : '#000000'
      const bgColor = isDarkTheme ? '#000000' : '#ffffff'

      return (
        <>
          <Header />
          <NotFoundContainer bgColor={bgColor}>
            <LeftColumn />
            <CardContainer bgColor={bgColor}>
              <Image src={imageUrl} alt="not found" />
              <Heading textColor={textColor}>Page Not Found</Heading>
              <Paragraph textColor={textColor}>
                We are sorry, the page you requested could not be found.
              </Paragraph>
            </CardContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
