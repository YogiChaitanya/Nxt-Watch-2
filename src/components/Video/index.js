import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoContainer,
  Image,
  VideoCard,
  ProfileImage,
  Heading,
  Paragraph,
  ViewsAndDateContainer,
  ChannelDetails,
} from './styledComponents'

const Video = props => {
  const {detailsOfVideo} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = detailsOfVideo
  const {name, profileImageUrl} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#000000' : '#ffffff'
        const textColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <Link to={`/videos/${id}`}>
            <VideoContainer bgColor={bgColor}>
              <Image src={thumbnailUrl} alt="thumbnail_url" />
              <ChannelDetails>
                <ProfileImage src={profileImageUrl} alt={name} />
                <VideoCard>
                  <Heading color={textColor}>{title}</Heading>
                  <Paragraph>{name}</Paragraph>
                  <ViewsAndDateContainer>
                    <Paragraph color={textColor}>{viewCount} views</Paragraph>
                    <Paragraph color={textColor}>{publishedAt}</Paragraph>
                  </ViewsAndDateContainer>
                </VideoCard>
              </ChannelDetails>
            </VideoContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Video
