import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import berlinData from './data/berlin.json';

import './App.css';

function App() {
  const { firstName, lastName, img: picture} = berlinData[0]

  return (
    <div className="App">
      <IdCard firstName={firstName} lastName={lastName} gender="fluid" picture={picture} birth={new Date()} height="1.70" />
      <Greetings lang='fr '>{firstName}</Greetings>
    </div>
  );
}

export default App;
