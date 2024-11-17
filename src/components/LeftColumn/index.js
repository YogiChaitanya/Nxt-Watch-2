import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {GiSaveArrow} from 'react-icons/gi'

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
  TabName,
  NavLink,
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
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

      return (
        <LeftColumnContainer bgColor={bgColor}>
          <TabItemsContainer bgColor={bgColor}>
            <NavLink to="/" textColor={textColor}>
              <TabItem
                onClick={onClickHomeTabItem}
                isActive={activeTab === 'HOME' ? '#e2e8f0' : 'transparent'}
              >
                <AiFillHome
                  size={20}
                  color={activeTab === 'HOME' ? '#ff0b37' : 'none'}
                />
                <TabName textColor={textColor}>Home</TabName>
              </TabItem>
            </NavLink>

            <NavLink to="/trending" textColor={textColor}>
              <TabItem
                onClick={onClickTrendingTabItem}
                isActive={activeTab === 'TRENDING' ? '#e2e8f0' : 'transparent'}
              >
                <AiFillFire
                  size={20}
                  color={activeTab === 'TRENDING' ? '#ff0b37' : 'none'}
                />
                <TabName textColor={textColor}>Trending</TabName>
              </TabItem>
            </NavLink>

            <NavLink to="/gaming" textColor={textColor}>
              <TabItem
                onClick={onClickGamingTabItem}
                isActive={activeTab === 'GAMING' ? '#e2e8f0' : 'transparent'}
              >
                <SiYoutubegaming
                  size={20}
                  color={activeTab === 'GAMING' ? '#ff0b37' : 'none'}
                />
                <TabName textColor={textColor}>Gaming</TabName>
              </TabItem>
            </NavLink>

            <NavLink to="/saved-videos" textColor={textColor}>
              <TabItem
                onClick={onClickSavedVideosTabItem}
                isActive={
                  activeTab === 'SAVED VIDEOS' ? '#e2e8f0' : 'transparent'
                }
              >
                <GiSaveArrow
                  size={20}
                  color={activeTab === 'SAVED VIDEOS' ? '#ff0b37' : 'none'}
                />
                <TabName textColor={textColor}>Saved Videos</TabName>
              </TabItem>
            </NavLink>
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
