import { useState } from 'react'
import {
  EventImage,
  EventTextWrapper,
  EventWrapper,
  EventImageWrapper,
  EventImageButton,
} from './styles.jsx'

function MenuEvents({ name, content, picture, priceTT, priceFS, priceSunday }) {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)

  if (isOpen) {
    return (
      <EventWrapper>
        <EventImageWrapper $isOpen>
          <EventImage src={picture} alt="Events Food" />
          <EventImageButton
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            {name}
          </EventImageButton>
        </EventImageWrapper>

        <EventTextWrapper>
          <h2>{name}</h2>
          <ul>
            {content?.map((item, index) => (
              <li key={`item-${index}`}>{item}</li>
            ))}
          </ul>
          <p>Du Mardi au Jeudi: {priceTT}€/pers</p>
          <p>Vendredi & Samedi: {priceFS}€/pers</p>
          <p>Dimanche: {priceSunday}€/pers</p>
        </EventTextWrapper>
      </EventWrapper>
    )
  }
  return (
    <EventWrapper>
      <EventImageWrapper>
        <EventImage src={picture} alt="Events Food" />
        <EventImageButton
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          {name}
        </EventImageButton>
      </EventImageWrapper>

      <EventTextWrapper>
        <h2>{name}</h2>
        <ul>
          {content?.map((item, index) => (
            <li key={`item-${index}`}>{item}</li>
          ))}
        </ul>
        <p>Du Mardi au Jeudi: {priceTT}€/pers</p>
        <p>Vendredi & Samedi: {priceFS}€/pers</p>
        <p>Dimanche: {priceSunday}€/pers</p>
      </EventTextWrapper>
    </EventWrapper>
  )
}

export default MenuEvents
