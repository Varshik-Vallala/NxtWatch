import {Component} from 'react'

import {AiFillHome, AiFillFire} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'

const routes = [
  {
    id: 'HOME',
    displayText: 'Home',
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
  },
  {
    id: 'SAVEDVIDEOS',
    displayText: 'SavedVideos',
  },
]

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <ul>
            {routes.map(eachRoute => (
              <li key={eachRoute.id}> {eachRoute.displayText}</li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Home
