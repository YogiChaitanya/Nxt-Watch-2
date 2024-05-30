import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import {GiSaveArrow} from 'react-icons/gi'
// doubt1 how to add react player
// import ReactPlayer from 'react-player'
// import {RiPlayerListAddFill} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftColumn from '../LeftColumn'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'

import {
  VideoItemDetailsContainer,
  CardContainer,
  VideoInfoContainer,
  ImageVideo,
  VideoInfoCard,
  Heading,
  ViewsAndLikesCard,
  ViewsCard,
  Paragraph,
  LikesCard,
  ChannelLogoAndDetailsContainer,
  Image,
  ChannelCard,
  IconButton,
  HorizontalLine,
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
    videoDetails: [],
    isLiked: false,
    isDisliked: false,
    isVideoSaved: false,
  }

  componentDidMount() {
    this.getVideoDetailsData()
  }

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
      Authorization: `Bearer ${jwtToken}`,
    }
    const response = await fetch(apiURL, options)
    const data = await response.json()
    const updatedData = data.video_details.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      videoURL: eachItem.video_url,
      thumbnailURL: eachItem.thumbnail_url,

      channel: {
        name: eachItem.channel.name,
        profileImageURL: eachItem.channel.profile_image_url,
        subscriberCount: eachItem.channel.subscriber_count,
      },
      viewCount: eachItem.view_count,
      publishedAt: eachItem.published_at,
      description: eachItem.description,
    }))

    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => <FailureView />

  renderLoading = () => <LoaderView />

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {videoDetails, isVideoSaved, isLiked, isDisliked} = this.state
        const {
          id,
          title,
          videoURL,
          thumbnailURL,
          channel,
          viewCount,
          publishedAt,
          description,
        } = videoDetails
        const {name, profileImageURL, subscriberCount} = channel
        const {addToSaveVideos, removeSaveVideos} = value

        const addOrRemoveItem = () => {
          if (isVideoSaved === true) {
            removeSaveVideos(id)
          } else {
            addToSaveVideos({...videoDetails, videoSaved: true})
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

        const likeClass = isLiked ? '#3b82f6' : '#616e7c'
        const dislikeClass = isDisliked ? '#3b82f6' : '#616e7c'

        const likeIcon = isLiked ? <AiFillLike /> : <AiOutlineLike />

        const dislikeIcon = isDisliked ? (
          <AiFillDislike />
        ) : (
          <AiOutlineDislike />
        )

        return (
          <VideoInfoContainer>
            <ImageVideo src={videoURL} alt={thumbnailURL} />

            <VideoInfoCard>
              <Heading>{title}</Heading>

              <ViewsAndLikesCard>
                <ViewsCard>
                  <Paragraph>{viewCount}</Paragraph>
                  <Paragraph>{publishedAt}</Paragraph>
                </ViewsCard>

                <LikesCard>
                  <IconButton
                    type="button"
                    color={likeClass}
                    onClick={onClickLikeButton}
                  >
                    {likeIcon}
                    <Paragraph>Like</Paragraph>
                  </IconButton>

                  <IconButton
                    type="button"
                    color={dislikeClass}
                    onClick={onClickDislikeButton}
                  >
                    {dislikeIcon}
                    <Paragraph>Dislike</Paragraph>
                  </IconButton>

                  <IconButton
                    onClick={saveVideoToList}
                    color={isVideoSaved ? ' #3b82f6' : '#616e7c'}
                  >
                    <GiSaveArrow />
                    <Paragraph color={isVideoSaved ? '#3b82f6' : '#616e7c'}>
                      Save
                      {isVideoSaved ? 'Saved' : 'Save'}
                    </Paragraph>
                  </IconButton>
                </LikesCard>

                <HorizontalLine />

                <ChannelLogoAndDetailsContainer>
                  <Image src={profileImageURL} alt={name} />

                  <ChannelCard>
                    <Heading>{name}</Heading>
                    <Paragraph>{subscriberCount}</Paragraph>
                    <Paragraph>{description}</Paragraph>
                  </ChannelCard>
                </ChannelLogoAndDetailsContainer>
              </ViewsAndLikesCard>
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
      <>
        <Header />
        <VideoItemDetailsContainer>
          <LeftColumn />
          <CardContainer>{this.renderDetailedData()}</CardContainer>
        </VideoItemDetailsContainer>
      </>
    )
  }
}

export default VideoItemDetails
