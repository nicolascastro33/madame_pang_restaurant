import { colors } from '../../utils/styles/colors'
import styled from 'styled-components'

export const EventWrapper = styled.div`
  width: 40vh;
  border-radius: 10%;
  overflow: hidden;
  border: 2px solid ${colors.red};
  background: ${colors.secondary};
  height: 400px;
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

`

export const EventImageWrapper = styled.div`    
  width: 100%;
  position : absolute;
  transition: all 400ms ease-in-out;
  transform: translateY(0);
  opacity: 1;
  margin: 0;
  display: flex;
  ${(props) =>
    props.$isOpen &&`
    opacity: 0;
    transform: translateY(-200%);
    transition: all 400ms ease-in-out;
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
  &:hover{
  }
`