import styled from 'styled-components'

export const Link = styled.link`
  text-decoration: none;
`

export const VideoContainer = styled.div`
  text-decoration: none;
  width: 250px;
  background-color: ${props => props.bgColor};
  margin: 10px;
`

export const Image = styled.img`
  height: 150px;
  width: 250px;
`

export const ChannelDetails = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
`

export const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`

export const Heading = styled.p`
  color: ${props => props.textColor};
  font-size: 16px;
  font-weight: normal;
  font-family: Roboto;
  text-decoration: none;
`

export const Paragraph = styled.p`
  color: ${props => props.textColor};
  font-size: 12px;
  font-weight: normal;
  font-family: Roboto;
  text-decoration: none;
`

export const ViewsAndDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
`
