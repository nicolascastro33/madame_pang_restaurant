import { ContactWrapper, TextContactWrapper } from "./styles";

function Contact() {
  return (
    <ContactWrapper>
      <TextContactWrapper> 
        <h1>Madame Pang où vous le souhaitez, quand vous le voulez.</h1>
        <p>La valeur fondamentale chez Madame Pang étant le partage, c’est ainsi que nous vous proposons de sortir du coeur de Bordeaux pour vous accompagner dans la réalisation de vos événements (cocktails privés ou professionnel, en intérieur ou extérieur, prestations à domicile, mariages ...). En fonction vos besoins, nous vous apportons des solutions complètes afin de vous en faciliter l’organisation.
        Le Chef Jérôme Billot et son équipe créent des offres sur-mesure afin de satisfaire vos besoins dans les moindres détails. 
        Pour obtenir plus d’informations, contactez nous à travers le formulaire ci-dessous.</p>
      </TextContactWrapper>
    </ContactWrapper>
  );
}

export default Contact;
