import { ContactForEvent, ContactWrapper, MenuEventWrapper, TextContactWrapper } from "./styles";
import { useEffect } from "react";
import MenuEvents from "../../components/MenuEvents";
import ContactEvent from "../../components/ContactEvent";
import { MenuData } from "../../data/MenuData";

function Contact() {
  useEffect(() => {
    document.title = 'Madame Pang - Contact'
  }) 
  const SpecialEventsMenu = MenuData.SpecialEvents
  return (
    <ContactWrapper>
      <TextContactWrapper> 
        <h1>Contact pour événements</h1>
        <p>La valeur fondamentale chez Madame Pang étant le partage, c’est ainsi que nous vous proposons de sortir du coeur de Bordeaux pour vous accompagner dans la réalisation de vos événements (cocktails privés ou professionnel, en intérieur ou extérieur, prestations à domicile, mariages ...). En fonction vos besoins, nous vous apportons des solutions complètes afin de vous en faciliter l’organisation.
        Le Chef Jérôme Billot et son équipe créent des offres sur-mesure afin de satisfaire vos besoins dans les moindres détails. 
        Pour obtenir plus d’informations, contactez nous à travers le formulaire ci-dessous.</p>
      </TextContactWrapper>
      <ContactForEvent>
        <ContactEvent/>
        <MenuEventWrapper>
          {SpecialEventsMenu?.map((menu, index) => (
            <MenuEvents
              key={`${menu.name}-${index}`}
              content={menu.content}
              name={menu.name}
              picture={menu.picture}
              priceTT={menu.priceFromTuesdayToThursday}
              priceFS={menu.priceFromFridayToSaturday}
              priceSunday={menu.priceSunday}
            />
          ))}
        </MenuEventWrapper>
      </ContactForEvent>
    </ContactWrapper>
  );
}

export default Contact;
