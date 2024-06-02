import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'

import Header from '../Header'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import LeftColumn from '../LeftColumn'
import Video from '../Video'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingContainer,
  IconAndHeadingCard,
  Heading,
  UlElement,
  CardContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchedVideos: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    const updatedData = data.videos.map(eachItem => ({
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

  renderSuccessView = () => {
    const {searchedVideos} = this.state

    return (
      <UlElement>
        {searchedVideos.map(eachVideo => (
          <Video key={eachVideo.id} detailsOfVideo={eachVideo} />
        ))}
      </UlElement>
    )
  }

  renderFailureView = () => <FailureView retryOption={this.getVideosData} />

  renderLoader = () => <LoaderView />

  renderTrendingData = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#000000' : '#ffffff'
          const textColor = isDarkTheme ? '#ffffff' : '#000000'

          return (
            <>
              <Header />
              <TrendingContainer bgColor={bgColor}>
                <LeftColumn />
                <CardContainer bgColor={bgColor}>
                  <IconAndHeadingCard bgColor={bgColor}>
                    <SiYoutubegaming size={40} color="#ff0b37" />
                    <Heading textColor={textColor}>Trending</Heading>
                  </IconAndHeadingCard>
                  {this.renderTrendingData()}
                </CardContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
