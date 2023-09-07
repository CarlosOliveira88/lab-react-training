import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/likeButton";
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/Profiles';
import Facebook2 from './components/Facebook2'
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';
import SingleColorPicker from './components/SingleColorPicker';

function App() {

  return (
    <div className="App">
      <div className='none'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

      <div className='none'>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/75.jpg"
        />

        <IdCard
          lastName=' Nichols'
          firstName='Jennie'
          gender='female'
          height={168}
          birth={new Date("1992-03-08")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div className='none'>
        <h1>Greetings</h1>
        <Greetings lang="de" children="Daniel" />
        <Greetings lang="fr" children="Julian" />
        <Greetings lang="es" children="Joao" />
        <Greetings lang="pt" children="Carlos" />
        <Greetings lang="en" children="Anna" />
        <Greetings lang="jp" children="Alejandro" />
      </div>

      <div className='none'>
        <Random min={1} max={10} />
        <Random min={11} max={20} />
        <Random min={25} max={40} />
      </div>

      {/* <div className='colores'> */}
      <div className='none'>
        <BoxColor r={128} g={255} b={0} />
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={0} g={128} b={255} />
        <BoxColor r={255} g={255} b={0} />
        <BoxColor r={0} g={255} b={128} />
        <BoxColor r={128} g={0} b={255} />
        <BoxColor r={0} g={0} b={255} />
        <BoxColor r={255} g={128} b={0} />
        <BoxColor r={0} g={255} b={255} />
      </div>

      {/* <div className="creditCard"> */}
      <div className="none">
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
          bank=" La Caixa"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      {/* <div className="star"> */}
      <div className="none">
        <Rating children={0}></Rating>
        <Rating children={1.3}></Rating>
        <Rating children={2}></Rating>
        <Rating children={2.5}></Rating>
        <Rating children={4}></Rating>
        <Rating children={5}></Rating>
      </div>

      {/* <div className="driver"> */}
      <div className="none">
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />

        <DriverCard
          name="Jeff Bezos"
          rating={2.8}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Amazon Prime Van",
            licensePlate: "AMZN-123"
          }}
        />
      </div>

      <div className='none'>
        <LikeButton />
        <LikeButton />
      </div>

      <div className='none'>
        <ClickablePicture />
      </div>

      {/* <div className='diceDiv'> */}
      <div className='none'>
        <Dice />
        <Dice />
        <Dice />
      </div>

      <div className='none'>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />

      </div>

      {/* <div className='Numbers-Table'> */}
      <div className='none'>
        <NumbersTable limit={10} />
        <NumbersTable limit={12} />
        <NumbersTable limit={15} />
      </div>

      <div className='none'>
        <Facebook2 />

      </div>

      <div className='none'>
        <SignupPage />
      </div>

      <div className='none1'>
        <h1>RGB Color Picker</h1>
        <RGBColorPicker />
      </div>

    </div>
  );
}


export default App;
