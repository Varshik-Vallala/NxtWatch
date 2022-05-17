import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import './App.css'

import NxtWatchContext from './context/nxtWatchContext'

import Login from './components/Login'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

// Replace your code here
class App extends Component {
  state = {darkTheme: false}

  onChangeDarkTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  render() {
    const {darkTheme} = this.state

    return (
      <NxtWatchContext.Provider
        value={{darkTheme, onChangeDarkTheme: this.onChangeDarkTheme}}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
