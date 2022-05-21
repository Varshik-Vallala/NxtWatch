import {Component} from 'react'

import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'

import {BiListCheck, BiListPlus} from 'react-icons/bi'

import {formatDistanceToNow} from 'date-fns'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

import Routes from '../Routes'

import {
  LoaderContainer,
  NoVideosImage,
  EmptyListText,
  RetryButton,
} from '../Home/styledComponents'

import {
  VideoContainer,
  VideoDetailsContainer,
  RowFlex,
  Title,
  ViewCount,
  ChannelImage,
  ChannelDetailsContainer,
  ChannelName,
  OptionsContainer,
} from './styledComponents'

const initialApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoData: {},
    apiStatus: initialApiStatus.initial,
  }

  componentDidMount() {
    this.getVideoData()
  }

  updatedChannelDetails = channel => {
    const updatedChannel = {
      name: channel.name,
      profileImageUrl: channel.profile_image_url,
      subscriberCount: channel.subscriber_count,
    }

    return updatedChannel
  }

  getVideoData = async () => {
    this.setState({apiStatus: initialApiStatus.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('nxtWatch_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedVideoData = {
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        channelName: data.video_details.channel.name,
        channelProfileImage: data.video_details.channel.profile_image_url,
        channelSubscriberCount: data.video_details.channel.subscriber_count,
      }
      //   console.log(data)

      this.setState({
        videoData: updatedVideoData,
        apiStatus: initialApiStatus.success,
      })
    } else {
      this.setState({apiStatus: initialApiStatus.failure})
    }

    // console.log(data)
  }

  renderLoadingView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideoDetails = () => {
    const {videoData} = this.state

    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channelName,
      channelProfileImage,
      channelSubscriberCount,
      description,
    } = videoData

    return (
      <VideoContainer>
        <div className="video">
          <ReactPlayer
            width="100%"
            height="60vh"
            url={videoUrl}
            controls
            origin="http://localhost:3000/"
          />
        </div>
        <Title>{title}</Title>
        <VideoDetailsContainer>
          <OptionsContainer>
            <ViewCount>{`${viewCount} views`}</ViewCount>
            {/* <p className="dot">.</p> */}
            <ViewCount>{publishedAt}</ViewCount>
          </OptionsContainer>
          <OptionsContainer>
            <RowFlex>
              <AiOutlineLike />
              <p>Like</p>
            </RowFlex>
            <RowFlex>
              <AiOutlineDislike />
              <p>Dislike</p>
            </RowFlex>
            <RowFlex>
              <BiListPlus />
              <p>Save</p>
            </RowFlex>
          </OptionsContainer>
        </VideoDetailsContainer>
        <hr />

        <ChannelDetailsContainer>
          <ChannelImage src={channelProfileImage} alt={channelName} />
          <div>
            <ChannelName>{channelName}</ChannelName>
            <ViewCount>{channelSubscriberCount} subscribers</ViewCount>
            <p>{description}</p>
          </div>
        </ChannelDetailsContainer>
      </VideoContainer>
    )
  }

  renderFailureView = () => (
    <LoaderContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt=" failure-image"
      />
      <EmptyListText heading>Opps! Something Went Wrong</EmptyListText>
      <EmptyListText>
        We are having some trouble to complete your request.
      </EmptyListText>
      <EmptyListText>Please try again.</EmptyListText>
      <RetryButton type="button">Retry</RetryButton>
    </LoaderContainer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderVideoDetails()
      case 'INPROGRESS':
        return this.renderLoadingView()
      case 'FAILURE':
        return null
      default:
        return null
    }
  }

  render() {
    // console.log(videoData)

    // const {name, profileImageUrl, subscriberCount} = channel

    // console.log(formatDistanceToNow(new Date(publishedAt)))

    return (
      <>
        <Header />
        <div className="home-container">
          <Routes />
          <div className="home-page">{this.renderApiStatus()}</div>
        </div>
      </>
    )
  }
}

export default VideoItemDetails
