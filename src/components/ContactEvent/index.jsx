import './styles.css'

function ContactEvent() {
  const date = new Date()
  const dateToday =
    date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate()

  return (
    <section className="formEvent">
      <form>
        <div className="formEventQuestion">
          <label for="nom">Nom :</label>
          <input type="text" name="nom" className="name inputEvent" required />
          <p className="nameError"></p>
        </div>
        <div className="formEventQuestion">
            <label for="menuEventSelect">Choisir une formule :</label>
            <select name='menuEventSelect' className='menuEventSelect'>
                <option value="">-- Choisissez une formule --</option>
                <option value="">Madame Pang Deluxe</option>
                <option value="">Madame Pang Premium</option>
                <option value="otherMenu">Autres</option>
            </select>
            <p className="messageError"></p>
          </div>
        <div className="formEventQuestion formEventQuestionShare">
          <div className="formEventShare">
            <label for="email">Adresse email :</label>
            <input
              type="email"
              pattern=".+@globex/.com"
              size="30"
              name="adresse email"
              className="email inputEvent"
              required
            />
            <p className="emailError"></p>
          </div>
         
          <div className="formEventShare">
            <label for="numéro de téléphone">Numéro de téléphone :</label>
            <input
              type="text"
              name="numéro de téléphone"
              className="phoneNumber inputEvent"
              required
            />
            <p className="phoneNumberError"></p>
          </div>
        </div>

        <div className="formEventQuestion formEventQuestionShare">
          <div className="formEventShare">
            <label for="date">Date :</label>
            <input
              type="date"
              name="date"
              className="date inputEvent"
              min={dateToday}
              required
            />
            <p className="dateNameError"></p>
          </div>

          <div className="formEventShare">
            <label for="le nombre de personne">Nombre de personnes :</label>
            <input
              type="number"
              name="le nombre de personne"
              className="numberOfPeople inputEvent"
              min="5"
              max="100"
              required
            />
            <p className="numberOfPeopleError"></p>
          </div>
        </div>

        <div className="formEventQuestion">
          <label for="message">Message :</label>
          <input
            type="text"
            name="message"
            className="message inputEvent"
            required
          />
          <p className="messageError"></p>
        </div>

        <div className="formEventButton">
          <input type="submit" className="buttonForm" value="Valider" />
          <p className="confirmationMessage"></p>
        </div>
      </form>
    </section>
  )
}

export default ContactEvent
