import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import './App.css'

import NxtWatchContext from './context/nxtWatchContext'

import Login from './components/Login'

import Home from './components/Home'

import Trending from './components/Trending'

import VideoItemDetails from './components/VideoItemDetails'

import SavedVideos from './components/SavedVideos'

import ProtectedRoute from './components/ProtectedRoute'

// import Routes from './components/Routes'

import Gaming from './components/Gaming'

// import Header from './components/Header'

// Replace your code here

const routeIds = ['HOME', 'TRENDING', 'GAMING', 'SAVEDVIDEOS']

class App extends Component {
  state = {
    darkTheme: false,
    activeRoute: routeIds[0],
    savedVideosList: [],
  }

  onChangeDarkTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  onChangeActiveRoute = id => {
    this.setState({activeRoute: id})
  }

  onClickSaveVideo = (videoData, id) => {
    const {savedVideosList} = this.state

    const isThere = savedVideosList.some(eachVideo => eachVideo.id === id)

    if (isThere) {
      this.setState(prevState => ({
        savedVideosList: prevState.savedVideosList.filter(
          eachVideo => eachVideo.id !== id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoData],
      }))
    }

    // if (isThere) {
    //   this.setState({
    //     savedVideosList: savedVideosList.filter(
    //       eachVideo => eachVideo.id !== id,
    //     ),
    //   })
    // } else {
    //   this.setState(prevState => ({
    //     savedVideosList: [...prevState.savedVideosList, videoData],
    //   }))
    // }

    // const duplicateCheck = () => {
    //   if (isThere) {
    //     return
    //   }
    //   return this.setState(prevState => ({
    //     savedVideosList: [...prevState.savedVideosList, videoData],
    //   }))
    // }

    // return addRemoveVideo
    //   ? this.setState({savedVideosList: updatedSavedVideosList})
    //   : this.duplicateCheck
  }

  render() {
    const {darkTheme, activeRoute, savedVideosList} = this.state

    console.log(savedVideosList)

    return (
      <NxtWatchContext.Provider
        value={{
          darkTheme,
          onChangeDarkTheme: this.onChangeDarkTheme,
          activeRoute,
          onChangeActiveRoute: this.onChangeActiveRoute,
          savedVideosList,
          onClickSaveVideo: this.onClickSaveVideo,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>

        <div>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/trending" component={Trending} />
            <Route exact path="/gaming" component={Gaming} />
            <Route exact path="/videos/:id" component={VideoItemDetails} />
            <Route exact path="/saved-videos" component={SavedVideos} />
          </Switch>
        </div>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
