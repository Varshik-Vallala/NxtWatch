import {Component} from 'react'

import {Switch, Route, BrowserRouter} from 'react-router-dom'

import './App.css'

import NxtWatchContext from './context/nxtWatchContext'

import Login from './components/Login'

import Home from './components/Home'

import Trending from './components/Trending'

import Routes from './components/Routes'

import Gaming from './components/Gaming'
import Header from './components/Header'

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
        </Switch>

        <div>
          <Header />
          <Routes />
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
