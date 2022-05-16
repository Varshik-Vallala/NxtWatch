import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  onChangeDarkTheme: () => {},
})

export default NxtWatchContext
