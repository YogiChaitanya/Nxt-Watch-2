import {
  FailureContainer,
  FailedImage,
  Heading,
  Paragraph,
  Button,
} from './styledComponents'

const FailureView = props => {
  const {getVideosData} = props

  return (
    <FailureContainer>
      <FailedImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        alt="failure status"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Paragraph>
        We are having some trouble to complete your request. Please try again.
      </Paragraph>
      <Button
        onClick={getVideosData}
        type="button"
        color="#ffffff"
        backgroundColor="#4f46e5"
      >
        Retry
      </Button>
    </FailureContainer>
  )
}

export default FailureView
