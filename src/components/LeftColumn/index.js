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

      const textColor = isDarkTheme ? '#ffffff' : '#000000'
      const bgColor = isDarkTheme ? '#000000' : '#ffffff'

      return (
        <LeftColumnContainer bgColor={bgColor}>
          <TabItemsContainer bgColor={bgColor}>
            <TabItem
              onClick={onClickHomeTabItem}
              isActive={activeTab === 'HOME' ? '#e2e8f0' : 'transparent'}
            >
              <Link to="/" textColor={textColor}>
                <AiFillHome
                  size={20}
                  color={activeTab === 'HOME' ? '#ff0b37' : 'none'}
                />
                Home
              </Link>
            </TabItem>

            <TabItem
              onClick={onClickTrendingTabItem}
              isActive={activeTab === 'TRENDING' ? '#e2e8f0' : 'transparent'}
            >
              <Link to="/trending" textColor={textColor}>
                <AiFillFire
                  size={20}
                  color={activeTab === 'TRENDING' ? '#ff0b37' : 'none'}
                />
                Trending
              </Link>
            </TabItem>

            <TabItem
              onClick={onClickGamingTabItem}
              isActive={activeTab === 'GAMING' ? '#e2e8f0' : 'transparent'}
            >
              <Link to="/gaming" textColor={textColor}>
                <SiYoutubegaming
                  size={20}
                  color={activeTab === 'GAMING' ? '#ff0b37' : 'none'}
                />
                Gaming
              </Link>
            </TabItem>

            <TabItem
              onClick={onClickSavedVideosTabItem}
              isActive={
                activeTab === 'SAVED VIDEOS' ? '#e2e8f0' : 'transparent'
              }
            >
              <Link to="/saved-videos" textColor={textColor}>
                <MdPlaylistAdd
                  size={20}
                  color={activeTab === 'SAVED VIDEOS' ? '#ff0b37' : 'none'}
                />
                Saved videos
              </Link>
            </TabItem>
          </TabItemsContainer>

          <ContactUsContainer bgColor={bgColor}>
            <Heading textColor={textColor}>CONTACT US</Heading>
            <IconsContainer bgColor={bgColor}>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
            <Paragraph textColor={textColor}>
              Enjoy! Now to see your channels and recommendations!
            </Paragraph>
          </ContactUsContainer>
        </LeftColumnContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default LeftColumn
