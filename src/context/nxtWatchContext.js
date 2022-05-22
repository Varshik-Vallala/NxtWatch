import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  onChangeDarkTheme: () => {},
  activeRoute: 'HOME',
  onChangeActiveRoute: () => {},
  savedVideosList: [],
  onClickSaveVideo: () => {},
})

export default NxtWatchContext
