import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import './App.css'

import NxtWatchContext from './context/nxtWatchContext'

import Login from './components/Login'

import Home from './components/Home'

import Trending from './components/Trending'

// import Routes from './components/Routes'

import Gaming from './components/Gaming'
// import Header from './components/Header'

// Replace your code here

const routeIds = ['HOME', 'TRENDING', 'GAMING', 'SAVEDVIDEOS']

class App extends Component {
  state = {darkTheme: false, activeRoute: routeIds[0]}

  onChangeDarkTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  onChangeActiveRoute = id => {
    this.setState({activeRoute: id})
  }

  render() {
    const {darkTheme, activeRoute} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          darkTheme,
          onChangeDarkTheme: this.onChangeDarkTheme,
          activeRoute,
          onChangeActiveRoute: this.onChangeActiveRoute,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/trending" component={Trending} />
            <Route exact path="/gaming" component={Gaming} />
          </Switch>
        </div>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
