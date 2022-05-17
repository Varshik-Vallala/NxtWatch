import {Component} from 'react'

import Header from '../Header'

import Routes from '../Routes'

class Gaming extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <Routes />
        </div>
        {/* <div>
          <ul>
            {routes.map(eachRoute => (
              <li key={eachRoute.id}> {eachRoute.displayText}</li>
            ))}
          </ul>
        </div> */}
      </>
    )
  }
}

export default Gaming
