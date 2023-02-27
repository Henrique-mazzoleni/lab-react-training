import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumsTable from './components/NumsTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';

import './App.css';
import berlinArray from './data/berlin.json';
import { useState } from 'react';

function App() {
  const [countrySelected, setCountrySelected] = useState('All');
  const [displayArray, setDisplayArray] = useState(berlinArray);
  
  const countries = berlinArray
    .map((member) => member.country)
    .filter((country, i, arr) => arr.indexOf(country) === i);
    countries.unshift('All');
    
    const countryHandler = (country) => {
      setCountrySelected(country);
    };
    
    const sortHandler = (sortParameter) => {
      displayArray.sort((a, b) => {
        if (a[sortParameter] > b[sortParameter]) return 1;
      else return -1;
    });
    setDisplayArray([...displayArray]);
  };
  
  const searchHandler = (event) => {
    setDisplayArray(
      berlinArray.filter((member) =>
      Object.values(member).some(
        (field) =>
            typeof field === 'string' &&
            field.toLowerCase().includes(event.target.value.toLowerCase())
        )
        )
    );
  };

  return (
    <div className="App">
      <RGBColorPicker />  

      <SignupPage />
      
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
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

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />

      <LikeButton />

      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />

      <Dice />

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <NumsTable limit={120} />

      <button onClick={sortHandler.bind(null, 'firstName')}>
        Sort by first name
      </button>
      <button onClick={sortHandler.bind(null, 'lastName')}>
        Sort by last name
      </button>
      <button onClick={sortHandler.bind(null, 'country')}>
        Sort by country
      </button>

      <label>
        Search
        <input type="text" onChange={searchHandler} />
      </label>
      {countries.sort().map((country) => (
        <button
          key={country}
          style={
            country === countrySelected ? { backgroundColor: '#A3D2E2' } : {}
          }
          onClick={countryHandler.bind(null, country)}
        >
          {country}
        </button>
      ))}

      {displayArray.map((member) => (
        <Facebook
          isSelected={
            countrySelected === member.country || countrySelected === 'All'
          }
          key={member.img}
          {...member}
        />
      ))}

    </div>
  );
}

export default App;
