import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'

import {GiSaveArrow} from 'react-icons/gi'
import ReactPlayer from 'react-player'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftColumn from '../LeftColumn'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'

import {
  VideoItemDetailsContainer,
  CardContainer,
  VideoInfoContainer,
  VideoInfoCard,
  ViewsAndLikesCard,
  ViewsCard,
  Paragraph3,
  Paragraph,
  Paragraph2,
  LikesCard,
  ChannelLogoAndDetailsContainer,
  Image,
  ChannelCard,
  IconButton,
  HorizontalLine,
  ParagraphLDS,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    detailsOfVideo: [],
    isLiked: false,
    isDisliked: false,
    isVideoSaved: false,
  }

  componentDidMount() {
    this.getVideoDetailsData()
  }

  formatedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoURL: data.video_details.video_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageURL: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoDetailsData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiURL = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiURL, options)
    const data = await response.json()
    const updatedData = this.formatedData(data)

    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        detailsOfVideo: updatedData,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  retryOption = () => {
    this.getVideoDetailsData()
  }

  renderFailureView = () => <FailureView retryOption={this.retryOption} />

  renderLoading = () => <LoaderView />

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {detailsOfVideo, isVideoSaved, isLiked, isDisliked} = this.state
        const {
          id,
          title,
          videoURL,
          viewCount,
          publishedAt,
          description,
          name,
          profileImageURL,
          subscriberCount,
        } = detailsOfVideo

        const {addToSaveVideos, removeSaveVideos, isDarkTheme} = value

        const addOrRemoveItem = () => {
          if (isVideoSaved === true) {
            addToSaveVideos({...detailsOfVideo})
          } else {
            removeSaveVideos(id)
          }
        }

        const saveVideoToList = () => {
          this.setState(
            prev => ({isVideoSaved: !prev.isVideoSaved}),
            addOrRemoveItem,
          )
        }

        const onClickLikeButton = () => {
          this.setState(prev => ({
            isLiked: !prev.isLiked,
            isDisliked: false,
          }))
        }

        const onClickDislikeButton = () => {
          this.setState(prev => ({
            isDisliked: !prev.isDisliked,
            isLiked: false,
          }))
        }

        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const textColor = isDarkTheme ? '#ffffff' : '#000000'

        const likeIcon = isLiked ? (
          <AiFillLike size={30} />
        ) : (
          <AiOutlineLike size={30} />
        )
        const dislikeIcon = isDisliked ? (
          <AiFillDislike size={30} />
        ) : (
          <AiOutlineDislike size={30} />
        )

        return (
          <VideoInfoContainer bgColor={bgColor}>
            <ReactPlayer url={videoURL} controls width="95%" height="500px" />

            <VideoInfoCard bgColor={bgColor}>
              <Paragraph3 textColor={textColor}>{title}</Paragraph3>

              <ViewsAndLikesCard bgColor={bgColor}>
                <ViewsCard bgColor={bgColor}>
                  <Paragraph textColor={textColor}>{viewCount} views</Paragraph>
                  <Paragraph2 textColor={textColor}>{publishedAt}</Paragraph2>
                </ViewsCard>

                <LikesCard bgColor={bgColor}>
                  <IconButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLikeButton}
                  >
                    {likeIcon}
                    <ParagraphLDS color={isLiked ? '#2563eb' : '#64748b'}>
                      Like
                    </ParagraphLDS>
                  </IconButton>

                  <IconButton
                    type="button"
                    color={isDisliked ? '#2563eb' : '#64748b'}
                    onClick={onClickDislikeButton}
                  >
                    {dislikeIcon}
                    <ParagraphLDS color={isDisliked ? '#2563eb' : '#64748b'}>
                      Dislike
                    </ParagraphLDS>
                  </IconButton>

                  <IconButton
                    onClick={saveVideoToList}
                    color={isVideoSaved ? ' #3b82f6' : '#616e7c'}
                  >
                    <GiSaveArrow size={30} />
                    <ParagraphLDS color={isVideoSaved ? '#3b82f6' : '#616e7c'}>
                      {isVideoSaved ? 'Saved' : 'Save'}
                    </ParagraphLDS>
                  </IconButton>
                </LikesCard>
              </ViewsAndLikesCard>
              <HorizontalLine />

              <ChannelLogoAndDetailsContainer bgColor={bgColor}>
                <Image src={profileImageURL} alt="channel logo" />

                <ChannelCard bgColor={bgColor}>
                  <Paragraph3 textColor={textColor}>{name}</Paragraph3>
                  <Paragraph textColor={textColor}>
                    {subscriberCount} Subscribers
                  </Paragraph>
                  <Paragraph textColor={textColor}>{description}</Paragraph>
                </ChannelCard>
              </ChannelLogoAndDetailsContainer>
            </VideoInfoCard>
          </VideoInfoContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderDetailedData = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <VideoItemDetailsContainer
                bgColor={bgColor}
                data-testid="videoItemDetails"
              >
                <LeftColumn />
                <CardContainer bgColor={bgColor}>
                  {this.renderDetailedData()}
                </CardContainer>
              </VideoItemDetailsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
