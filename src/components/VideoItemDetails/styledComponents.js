import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
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

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  background-color: ${props => props.bgColor};
`

export const ImageVideo = styled.img`
  width: 90%;
  height: 50vh;
`

export const VideoInfoCard = styled.div`
  margin-top: 50px;
  background-color: ${props => props.bgColor};
`

export const Heading = styled.h1`
  color: ${props => props.textColor};
  font-size: 40px;
  font-weight: normal;
  font-family: Roboto;
`

export const ViewsAndLikesCard = styled.div`
  color: ${props => props.textColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ViewsCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
`

export const Paragraph = styled.p`
  color: ${props => props.textColor};
  font-size: 20px;
  font-weight: normal;
  font-family: Roboto;
`

export const LikesCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
`

export const ChannelLogoAndDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
`

export const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-right: 10px;
`

export const ChannelCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
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

export const HorizontalLine = styled.hr`
  color: #909090;
`

export const IconButton = styled.button`
  height: 20px;
  width: 20px;
`
