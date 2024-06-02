import ThemeContext from '../../context/ThemeContext'

import {
  FailureContainer,
  FailedImage,
  Heading,
  Paragraph,
  Button,
} from './styledComponents'

const FailureView = props => {
  const {retryOption} = props

  const onClickRetryBtn = () => {
    retryOption()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#000000' : '#ffffff'
        const textColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <FailureContainer bgColor={bgColor}>
            <FailedImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="failure status"
            />
            <Heading textColor={textColor}>Oops! Something Went Wrong</Heading>
            <Paragraph textColor={textColor}>
              We are having some trouble to complete your request. Please try
              again.
            </Paragraph>
            <Button
              onClick={onClickRetryBtn}
              type="button"
              textColor={textColor}
            >
              Retry
            </Button>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
