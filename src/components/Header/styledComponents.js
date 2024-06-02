import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  background-color: ${props => props.bgColor};
`

export const UlElement = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
`

export const LiElement = styled.li`
  text-decoration: none;
  margin-right: 50px;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  margin-left: 100px;
`
export const Image = styled.img`
  height: 40px;
  width: 40px;
`

export const Button = styled.button`
  color: #3b82f6;
  font-size: bold;
  font-weight: normal;
  font-family: 'Roboto';
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: transparent;
  border: 1px solid #3b82f6;
  border-radius: 6px;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #313131;
  height: 180px;
  width: 350px;
  border-radius: 10px;
`

export const AlignColumn = styled.div`
  padding: 30px;
`

export const ModalDesc = styled.div`
  color: #f1f1f1;
  text-align: center;
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`

export const CancelButton = styled.button`
  color: #909090;
  font-size: bold;
  font-weight: normal;
  font-family: 'Roboto';
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: transparent;
  border: 1px solid #909090;
`

export const ConfirmButton = styled.button`
  color: #ffffff;
  font-size: bold;
  font-weight: normal;
  font-family: 'Roboto';
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #3b82f6;
  border: none;
  margin-left: 50px;
`
