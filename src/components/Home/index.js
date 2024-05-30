import {Component} from 'react'
import {IoIosSearch, IoMdClose} from 'react-icons/io'
import Cookies from 'js-cookie'

import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import Header from '../Header'
import LeftColumn from '../LeftColumn'
import Video from '../Video'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer,
  HomeCard,
  PremiumCard,
  Image,
  Paragraph,
  Heading,
  Button,
  SearchBox,
  SearchInput,
  BoxSearchIcon,
  UlElement,
  NoSearchResultsFound,
  PremimumDetails,
  CloseButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchedVideos: [],
    searchInput: '',
    display: 'flex',
  }

  componentDidMount() {
    this.getVideosData()
  }

  onCloseBanner = () => {
    this.setState({display: 'none'}, this.renderPremiumCard)
  }

  renderPremiumCard = () => {
    const {display} = this.state

    return (
      <>
        <PremiumCard data-testid="banner" display={display}>
          <PremimumDetails>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <Paragraph>Buy Nxt Watch Premium prepaid plans with UPI</Paragraph>
            <Button backgroundColor="transparent">GET IT NOW</Button>
          </PremimumDetails>

          <CloseButton
            type="button"
            data-testid="close"
            onClick={this.onCloseBanner}
          >
            <IoMdClose size={20} color="#231f20" />
          </CloseButton>
        </PremiumCard>
      </>
    )
  }

  getVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const videosData = await response.json()
    console.log(videosData)

    const updatedData = videosData.videos.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      thumbnailURL: eachItem.thumbnail_url,
      channel: {
        name: eachItem.channel.name,
        profileImageURL: eachItem.channel.profile_image_url,
      },
      viewCount: eachItem.view_count,
      publishedAt: eachItem.published_at,
    }))

    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        searchedVideos: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  renderLoader = () => <LoaderView />

  renderFailureView = () => <FailureView />

  renderSuccessView = () => {
    const {searchedVideos, searchInput} = this.state
    const searchResults = searchedVideos.filter(eachVideo =>
      eachVideo.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const noSearchResultsFound = searchResults.length === 0
    return noSearchResultsFound ? (
      <NoSearchResultsFound>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <Heading>No Search results found</Heading>
        <Paragraph>Try different key words or remove search filter</Paragraph>
        <Button>Retry</Button>
      </NoSearchResultsFound>
    ) : (
      <UlElement>
        {searchResults.map(eachVideo => (
          <Video key={eachVideo.id} detailsOfVideo={eachVideo} />
        ))}
      </UlElement>
    )
  }

  renderData = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <>
              <Header />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <LeftColumn onChangeActiveTab={this.onChangeActiveTab} />
                <HomeCard bgColor={bgColor}>
                  {this.renderPremiumCard()}
                  <SearchBox>
                    <SearchInput
                      type="search"
                      value={searchInput}
                      onChange={this.onChangeSearch}
                      placeholder="search"
                    />
                    <BoxSearchIcon>
                      <IoIosSearch aria-label="close" />
                    </BoxSearchIcon>
                  </SearchBox>
                  {this.renderData()}
                </HomeCard>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
