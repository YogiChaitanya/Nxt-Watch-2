import {
  NavLink,
  GameVideoContainer,
  Image,
  Paragraph2,
  Paragraph,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const GameVideo = props => {
  const {detailsOfVideo} = props
  const {id, title, thumbnailURL, viewCount} = detailsOfVideo

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#000000' : '#ffffff'
        const textColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <NavLink to={`/videos/${id}`}>
            <GameVideoContainer bgColor={bgColor}>
              <Image src={thumbnailURL} alt="video thumbnail" />

              <Paragraph textColor={textColor}>{title}</Paragraph>
              <Paragraph2 textColor={textColor}>
                {viewCount} Watching Worldwide
              </Paragraph2>
            </GameVideoContainer>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GameVideo
