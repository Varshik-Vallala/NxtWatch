import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import NxtWatchContext from './context/nxtWatchContext'

import Login from './components/Login'

import Home from './components/Home'

import Trending from './components/Trending'

import VideoItemDetails from './components/VideoItemDetails'

import SavedVideos from './components/SavedVideos'

import ProtectedRoute from './components/ProtectedRoute'

import Routes from './components/Routes'

import Gaming from './components/Gaming'

import Header from './components/Header'

import NotFound from './components/NotFound'

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

    // some is similar to filter, but some returns boolean while filter returns filtered object

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
          <>
            <Header />
            <div className="home-container">
              <Routes />
              <div className="home-page">
                <Switch>
                  <ProtectedRoute exact path="/" component={Home} />
                  <ProtectedRoute exact path="/trending" component={Trending} />
                  <ProtectedRoute exact path="/gaming" component={Gaming} />
                  <ProtectedRoute
                    exact
                    path="/videos/:id"
                    component={VideoItemDetails}
                  />
                  <ProtectedRoute
                    exact
                    path="/saved-videos"
                    component={SavedVideos}
                  />
                  <Route path="/not-found" component={NotFound} />
                  <Redirect to="/not-found" />
                </Switch>
              </div>
            </div>
          </>
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
