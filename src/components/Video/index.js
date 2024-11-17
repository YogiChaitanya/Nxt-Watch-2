import ThemeContext from '../../context/ThemeContext'

import {
  NavLink,
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
    thumbnailURL,
    channel,
    viewCount,
    publishedAt,
  } = detailsOfVideo
  const {name, profileImageURL} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const textColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <NavLink to={`/videos/${id}`}>
            <VideoContainer bgColor={bgColor}>
              <Image src={thumbnailURL} alt="video thumbnail" />
              <ChannelDetails bgColor={bgColor}>
                <ProfileImage src={profileImageURL} alt="channel logo" />
                <VideoCard bgColor={bgColor}>
                  <Heading textColor={textColor}>{title}</Heading>
                  <Paragraph textColor={textColor}>{name}</Paragraph>
                  <ViewsAndDateContainer>
                    <Paragraph textColor={textColor}>
                      {viewCount} views
                    </Paragraph>
                    <Paragraph textColor={textColor}>{publishedAt}</Paragraph>
                  </ViewsAndDateContainer>
                </VideoCard>
              </ChannelDetails>
            </VideoContainer>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Video
