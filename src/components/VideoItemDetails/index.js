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
  Description,
} from './styledComponents'

import NxtWatchContext from '../../context/nxtWatchContext'

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
    like: false,
    disLike: false,
    videoAdded: false,
    checkVideo: false,
  }

  componentDidMount() {
    this.getVideoData()
  }

  onClickLike = () => {
    this.setState(prevState => ({
      like: !prevState.like,
      disLike: false,
    }))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({
      disLike: !prevState.disLike,
      like: false,
    }))
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
    const {videoData, like, disLike, videoAdded} = this.state

    const {
      id,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channelName,
      channelProfileImage,
      channelSubscriberCount,
      description,
    } = videoData

    // console.log(id)

    // const checkVideo = savedVideosList.filter(id === savedVideosList.id) */

    //  const checkVideo = savedVideosList.map(
    //         eachVideo => eachVideo.id === id,
    //       )

    //   <BiListCheck className="active" />

    //    <p className="active">Saved</p>

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme, onClickSaveVideo, savedVideosList} = value

          const onSaveVideo = () => {
            onClickSaveVideo(videoData, id)
            this.setState({videoAdded: !videoAdded})

            const checkVideoList = savedVideosList.some(
              eachVideo => eachVideo.id === id,
            )

            console.log(checkVideoList)

            return checkVideoList
          }

          const checkVideoList = savedVideosList.some(
            eachVideo => eachVideo.id === id,
          )

          /* this.setState({checkVideo: checkVideoList}) */

          return (
            <VideoContainer darkTheme={darkTheme}>
              <div className="video">
                <ReactPlayer
                  width="100%"
                  height="60vh"
                  url={videoUrl}
                  controls
                  origin="http://localhost:3000/"
                />
              </div>
              <Title darkTheme={darkTheme}>{title}</Title>
              <VideoDetailsContainer>
                <OptionsContainer>
                  <ViewCount
                    darkTheme={darkTheme}
                  >{`${viewCount} views`}</ViewCount>
                  {/* <p className="dot">.</p> */}
                  <ViewCount darkTheme={darkTheme}>{publishedAt}</ViewCount>
                </OptionsContainer>
                <OptionsContainer>
                  <RowFlex darkTheme={darkTheme} onClick={this.onClickLike}>
                    <AiOutlineLike className={like ? 'active' : null} />
                    <p className={like ? 'active' : null}>Like</p>
                  </RowFlex>
                  <RowFlex darkTheme={darkTheme} onClick={this.onClickDisLike}>
                    <AiOutlineDislike className={disLike ? 'active' : null} />
                    <p className={disLike ? 'active' : null}>Dislike</p>
                  </RowFlex>
                  <RowFlex
                    // checkVideo={checkVideo}
                    darkTheme={darkTheme}
                    onClick={onSaveVideo}
                  >
                    {videoAdded || checkVideoList ? (
                      <BiListCheck className="active" />
                    ) : (
                      <BiListPlus />
                    )}
                    {videoAdded || checkVideoList ? (
                      <p className="active">Saved</p>
                    ) : (
                      <p>Save</p>
                    )}
                  </RowFlex>
                  {/* {checkVideo ? (
                    <RowFlex darkTheme={darkTheme} onClick={onSaveVideo}>
                      <BiListCheck className="active" />
                      <p className="active">Saved</p>
                    </RowFlex>
                  ) : null} */}
                </OptionsContainer>
              </VideoDetailsContainer>
              <hr />

              <ChannelDetailsContainer>
                <ChannelImage src={channelProfileImage} alt={channelName} />
                <div>
                  <ChannelName darkTheme={darkTheme}>{channelName}</ChannelName>
                  <ViewCount darkTheme={darkTheme}>
                    {channelSubscriberCount} subscribers
                  </ViewCount>
                  <Description darkTheme={darkTheme}>{description}</Description>
                </div>
              </ChannelDetailsContainer>
            </VideoContainer>
          )
        }}
      </NxtWatchContext.Consumer>
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
