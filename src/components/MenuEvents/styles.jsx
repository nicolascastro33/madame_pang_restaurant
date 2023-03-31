import { colors } from '../../utils/styles/colors'
import styled from 'styled-components'

export const EventWrapper = styled.div`
  width: 50vh;
  border-radius: 20px;
  overflow: hidden;
  border: thick ridge white;
  background: ${colors.secondary};
  height: 500px;
  margin-bottom: 50px;
  margin-right: 20px;
  transform: scale(1) rotate(0deg);
  transition: transform 1000ms ease-in-out;
//   &:hover {
//     transform: scale(1.4) rotate(-360deg);
//     transition: transform 1000ms ease-in-out;
//   }
`

export const EventTextWrapper = styled.div`
  width: 100%;
  margin-left: 5%; 
  display: flex;
  flex-direction: column;
  & h2{
    text-align: center;
    margin-right: 10px;
  }
  & li{
    list-style-type: trad-chinese-informal ;
  }
  & p{
    margin: 0;
  }
`

export const EventImageWrapper = styled.div`    
  width: 100%;
  position : absolute;
  transition: all 700ms ease-in-out;
  transform: translateY(0);
  opacity: 1;
  margin: 0;
  display: flex;
  ${(props) =>
    props.$isOpen &&`
    opacity: 0;
    transform: translateY(-200%);
    transition: all 700ms ease-in-out;
    `
  }
`
export const EventImage = styled.img`
  width: 100%;
  filter: grayscale(100%) blur(3px);
`

export const EventImageButton = styled.button`
  margin: auto; 
  position: absolute;
  width: 70%;
  border-radius: 10px;
  border: thick double ${colors.primary};
  backgound-color: ${colors.secondary};
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-in-out;
  cursor: pointer;
`

export const EventCancelButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px; 
  border-radius: 100%; 
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  ${(props) =>
    props.$isOpen &&`
    opacity: 1;
    transition: all 1000ms ease-in-out;
    `
  }
`