import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 90vh;
  background-color: ${props => props.bgColor};
`

export const CardContainer = styled.div`
  padding: 10px;
  width: 80%;
  background-color: ${props => props.bgColor};
`

export const Image = styled.img`
  width: 200px;
`

export const Paragraph = styled.p`
  color: #1e293b;
  font-size: 20px;
  font-family: Roboto;
  font-weight: normal;
`

export const Button = styled.button`
  color: ${props => (props.retryButton ? '#ffffff' : '#181818')};
  font-size: 16px;
  font-weight: normal;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
  background-color: ${props => (props.retryButton ? '#4f46e5' : 'transparent')};
  cursor: pointer;
  border: 1px solid ${props => (props.retryButton ? '#4f46e5' : '#181818')};
  outline: none;
`

export const PremiumCard = styled.div`
  padding: 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30vh;
`

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin: 10px;
`

export const SearchInput = styled.input`
  color: #64748b;
  font-size: 16px;
  font-family: Roboto;
  padding-left: 50px;
  width: 40%;
  border: 1px solid #616e7c;
  outline: none;
`

export const BoxSearchIcon = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  border: 1px solid #616e7c;
`

export const UlElement = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-size: 35px;
  font-family: Roboto;
  font-weight: normal;
  margin-left: 50px;
`

export const NoSearchResultsFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PremimumDetails = styled.div``

export const CloseButton = styled.button`
  height: 15px;
  width: 15px;
  background-color: transparent;
  border: none;
  outline: none;
`
