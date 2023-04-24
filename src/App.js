
import './App.css';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import CashGames from './components/CashGames';
import Footer from './components/Footer';
import SpringSeries from './components/SpringSeries';
import FinalStage from './components/FinalStage';


function App() {
  const [activeComponent, setActiveComponent] = useState(3);

  const handleButtonClick = (componentIndex) => {
    setActiveComponent(componentIndex);
  }

  return (
    <div className="App">
      <div className="container-top">
        <div>
          <span>სლოტები</span>
          <span>10 იანვარი - 12 მარტი</span>
        </div>
        <AiOutlineClose />
      </div>
      <div className="container-bottom">

        <button className="play">
          ითამაშე
        </button>
      </div>
      <img src={require('./assets/images/background.png')} alt="" />
      <div className="popUp">
        <div className="container">

          <img src={require('./assets/images/banner.jpg')} alt="" className='banner' />
          <div className="top-header">
            <p>მოიპოვე 10 საგზურიდან ერთ-ერთი</p>
            <p>მოხვდი პოკერის ფესტივალზე მალტაში</p>
          </div>
          <div className='content-container'>
            <div className="buttons">
              <button onClick={() => handleButtonClick(1)} className={activeComponent === 1 && 'active'}>
                <span>1 - 29 აპრილი</span>
                <span>Cash Games</span>
              </button>
              <button className={activeComponent === 2 && 'active'} onClick={() => handleButtonClick(2)}>
                <span>13 - 29 აპრილი</span>
                <span>Spring series</span>
              </button>
              <button onClick={() => handleButtonClick(3)} className={activeComponent === 3 && 'active'}>
                <span>30 აპრილი</span>
                <span>Final Stage</span>
              </button>
            </div>


            {activeComponent === 1 && <CashGames />}
            {activeComponent === 2 && <SpringSeries />}
            {activeComponent === 3 && <FinalStage />}

            <Footer id={activeComponent}/>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
