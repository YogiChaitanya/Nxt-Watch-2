import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import {LoaderContainer} from './styledComponents'

const LoaderView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#000000' : '#ffffff'

      return (
        <LoaderContainer data-testid="loader" bgColor={bgColor}>
          <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
        </LoaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default LoaderView
