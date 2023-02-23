import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import berlinData from './data/berlin.json';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

import './App.css';

function App() {
  const { firstName, lastName, img: picture } = berlinData[0];

  return (
    <div className="App">
      <IdCard
        firstName={firstName}
        lastName={lastName}
        gender="fluid"
        picture={picture}
        birth={new Date()}
        height="1.70"
      />
      <Greetings lang="fr ">{firstName}</Greetings>
      <Random max="3" min="1" />
      <BoxColor r="250" g="100" b="200" />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
    </div>
  );
}

export default App;
