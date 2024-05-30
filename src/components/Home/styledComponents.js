import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ebebeb;
  min-height: 90vh;
`

export const HomeCard = styled.div`
  width: 80%;
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
  color: #181818;
  font-size: 16px;
  font-weight: normal;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
  background-size: transparent;
  cursor: pointer;
  border: 1px solid #181818;
  outline: none;
`

export const PremiumCard = styled.div`
  padding: 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
`

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  margin: 10px;
`

export const SearchInput = styled.input`
  color: #64748b;
  font-size: 16px;
  font-family: Roboto;
  padding-left: 50px;
  border: 1px solid #616e7c;
  width: 250px;
`

export const BoxSearchIcon = styled.div`
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

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailedImage = styled.img`
  width: 40%;
  margin: 30px;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-size: 50px;
  font-family: Roboto;
  font-weight: normal;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`
