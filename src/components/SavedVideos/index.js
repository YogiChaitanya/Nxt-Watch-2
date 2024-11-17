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
  Heading2,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {savedVideos, isDarkTheme} = value

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#ffffff' : '#000000'

      const listOfSavedVideos = savedVideos.length === 0
      console.log(listOfSavedVideos)

      return (
        <>
          <Header />
          <SavedVideosContainer data-testid="savedVideos" bgColor={bgColor}>
            <LeftColumn />
            <CardContainer bgColor={bgColor}>
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
                    <AiFillFire size={40} color="#ff0b37" />
                    <Heading2 textColor={textColor}>Trending</Heading2>
                  </IconAndHeadingCard>

                  <UlElement bgColor={bgColor}>
                    {savedVideos.map(eachVideo => (
                      <Video key={eachVideo.id} detailsOfVideo={eachVideo} />
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
