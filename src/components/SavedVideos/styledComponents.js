import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 90vh;
  background-color: ${props => props.bgColor};
`
export const CardContainer = styled.div`
  width: 80%;
  padding: 10px;
  background-color: ${props => props.bgColor};
`

export const NoSavedVideos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
  margin-top: 100px;
`

export const Image = styled.img`
  width: 40%;
`

export const Heading = styled.h1`
  color: ${props => props.textColor};
  font-size: 40px;
  font-weight: normal;
  font-family: Roboto;
`

export const Heading2 = styled.h1`
  color: ${props => props.textColor};
  font-size: 40px;
  font-weight: normal;
  font-family: Roboto;
  margin-left: 50px;
`

export const Paragraph = styled.p`
  color: ${props => props.textColor};
  font-size: 20px;
  font-weight: normal;
  font-family: Roboto;
`

export const SavedVideosCard = styled.div`
  background-color: ${props => props.bgColor};
`

export const IconAndHeadingCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const UlElement = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`
