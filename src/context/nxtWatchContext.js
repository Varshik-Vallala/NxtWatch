import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  onChangeDarkTheme: () => {},
  activeRoute: 'HOME',
  onChangeActiveRoute: () => {},
})

export default NxtWatchContext
