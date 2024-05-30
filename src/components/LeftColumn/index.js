import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import {
  LeftColumnContainer,
  ContactUsContainer,
  Heading,
  IconsContainer,
  Image,
  Paragraph,
  TabItemsContainer,
  TabItem,
} from './styledComponents'

const LeftColumn = () => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTabItem, activeTab, isDarkTheme} = value

      const onClickHomeTabItem = () => {
        activeTabItem('HOME')
      }

      const onClickTrendingTabItem = () => {
        activeTabItem('TRENDING')
      }

      const onClickGamingTabItem = () => {
        activeTabItem('GAMING')
      }

      const onClickSavedVideosTabItem = () => {
        activeTabItem('SAVED VIDEOS')
      }

      const bgColor = isDarkTheme ? '#ffffff' : '#000000'

      const textColor = isDarkTheme ? '#000000' : '#ffffff'

      return (
        <LeftColumnContainer bgColor={bgColor}>
          <TabItemsContainer>
            <TabItem
              onClick={onClickHomeTabItem}
              isActive={activeTab === 'HOME' ? '#f1f5f9' : 'transparent'}
              bgColor={bgColor}
            >
              <Link to="/" color={textColor}>
                <AiFillHome />
                Home
              </Link>
            </TabItem>

            <TabItem
              onClick={onClickTrendingTabItem}
              isActive={activeTab === 'TRENDING' ? '#f1f5f9' : 'transparent'}
              bgColor={bgColor}
            >
              <Link to="/trending" color={textColor}>
                <AiFillFire />
                Trending
              </Link>
            </TabItem>

            <TabItem
              onClick={onClickGamingTabItem}
              isActive={activeTab === 'GAMING' ? '#f1f5f9' : 'transparent'}
              bgColor={bgColor}
            >
              <Link to="/gaming" color={textColor}>
                <SiYoutubegaming />
                Gaming
              </Link>
            </TabItem>

            <TabItem
              onClick={onClickSavedVideosTabItem}
              isActive={
                activeTab === 'SAVED VIDEOS' ? '#f1f5f9' : 'transparent'
              }
              bgColor={bgColor}
            >
              <Link to="/saved-videos" color={textColor}>
                <MdPlaylistAdd />
                Saved videos
              </Link>
            </TabItem>
          </TabItemsContainer>

          <ContactUsContainer bgColor={bgColor}>
            <Heading color={textColor}>CONTACT US</Heading>
            <IconsContainer bgColor={bgColor}>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="facebook logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linkedin logo"
              />
            </IconsContainer>
            <Paragraph color={textColor}>
              Enjoy!Now to see your channels and recommendations
            </Paragraph>
          </ContactUsContainer>
        </LeftColumnContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default LeftColumn
