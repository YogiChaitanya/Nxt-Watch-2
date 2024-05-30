import {AiFillFire} from 'react-icons/ai'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftColumn from '../LeftColumn'
import Video from '../Video'

import {
  SavedVideosContainer,
  CardContainer,
  NoSavedVideos,
  Image,
  Paragraph,
  SavedVideosCard,
  IconAndHeadingCard,
  UlElement,
  Heading,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {savedVideos, isDarkTheme} = value
      const bgColor = isDarkTheme ? '#000000' : '#ffffff'
      const textColor = isDarkTheme ? '#ffffff' : '#000000'
      console.log(savedVideos)
      const listOfSavedVideos = savedVideos.length === 0

      return (
        <>
          <Header />
          <SavedVideosContainer data-testid="savedVideos">
            <LeftColumn />
            <CardContainer>
              {listOfSavedVideos ? (
                <NoSavedVideos bgColor={bgColor}>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <Heading textColor={textColor}>No saved videos found</Heading>
                  <Paragraph textColor={textColor}>
                    You can save your videos while watching them
                  </Paragraph>
                </NoSavedVideos>
              ) : (
                <SavedVideosCard bgColor={bgColor}>
                  <IconAndHeadingCard bgColor={bgColor}>
                    <AiFillFire />
                    <Heading textColor={textColor}>Trending</Heading>
                  </IconAndHeadingCard>
                  <UlElement bgColor={bgColor}>
                    {savedVideos.map(eachVideo => (
                      <Video key={eachVideo.id} VideoDetails={eachVideo} />
                    ))}
                  </UlElement>
                </SavedVideosCard>
              )}
            </CardContainer>
          </SavedVideosContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
