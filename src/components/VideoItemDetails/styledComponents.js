import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 90vh;
  background-color: ${props => props.bgColor};
`

export const CardContainer = styled.div`
  padding: 20px;
  width: 80%;
  background-color: ${props => props.bgColor};
`

export const VideoInfoContainer = styled.div`
  margin-bottom: 50px;
  background-color: ${props => props.bgColor};
`

export const VideoInfoCard = styled.div`
  margin-top: 50px;
  background-color: ${props => props.bgColor};
`

export const ViewsAndLikesCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  margin-bottom: 8px;
`

export const ViewsCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
`
export const Paragraph3 = styled.p`
  color: ${props => props.textColor};
  font-size: 25px;
  font-weight: normal;
  font-family: Roboto;
`
export const Paragraph = styled.p`
  color: ${props => props.textColor};
  font-size: 20px;
  font-weight: normal;
  font-family: Roboto;
`
export const Paragraph2 = styled.p`
  color: ${props => props.textColor};
  font-size: 20px;
  font-weight: normal;
  font-family: Roboto;
  margin-left: 50px;
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
  height: 80px;
  width: 80px;
  border-radius: 40px;
  margin-right: 20px;
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
  width: 80px;
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 10px;
`

export const ParagraphLDS = styled.p`
  color: ${props => props.color}
  font-size: 13px;
  font-family: Roboto;
  font-weight: normal;
`
