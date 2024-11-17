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

        const FAILURE_IMG = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer bgColor={bgColor}>
            <FailedImage src={FAILURE_IMG} alt="failure view" />
            <Heading textColor={textColor}>Oops!Something Went Wrong</Heading>
            <Paragraph textColor={textColor}>
              We are having some trouble to complete your request. Please try
              again.
            </Paragraph>

            <Button
              onClick={onClickRetryBtn}
              textColor={textColor}
              type="button"
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
