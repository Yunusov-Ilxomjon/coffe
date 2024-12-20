import { useState } from 'react';
import React from 'react';
import './module.css'

const ChooseCards = () => {
  const [activeCard, setActiveCard] = useState(null); // Faollangan kartani saqlash uchun

  const handleCardClick = (index) => {
    setActiveCard(index); // Bosilgan kartani faollashtirish
  };

  return (
    <div className="choose-cards">
      {coffeeTypes.map((coffee, index) => (
        <div
          key={index}
          className={`choose-card ${activeCard === index ? 'active' : ''}`} // Faollangan karta uchun klass
          onClick={() => handleCardClick(index)} // Karta bosilganda
        >
          <img style={{ marginTop: '72px' }} width={72} src={coffee.imgSrc} alt="" />
          <h1 style={{ fontSize: '24px', fontFamily: 'sans-serif', marginTop: '56px', }}>{coffee.title}</h1>
          <p style={{ fontSize: '16px', fontFamily: 'sans-serif', marginTop: '24px', width: '260px', textAlign: 'center' }}>
            {coffee.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const coffeeTypes = [
  {
    imgSrc: './section-image/choose/img1.png',
    title: 'Best quality',
    description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
  },
  {
    imgSrc: './section-image/choose/img2.png',
    title: 'Exclusive benefits',
    description: 'Special offers and swag when you subscribe, including 30% off your first shipment.'
  },
  {
    imgSrc: './section-image/choose/img3.png',
    title: 'Free shipping',
    description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
  },
];

const Section = () => {
  const [isButtonActive, setIsButtonActive] = useState(false); // Tugma holatini saqlash uchun

  const handleButtonClick = () => {
    setIsButtonActive(true); // Tugma bosilganda active holatni faollashtirish
  };

  return (
    <div className='section-container'>

      <div className="great-card">
        <h1 className='card-h'>Great coffee made simple.</h1>
        <p className='card-p'>
          Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
        </p>
        <button
          className={`great-btn ${isButtonActive ? 'active' : ''}`}
          onClick={handleButtonClick} // Tugma bosilganda
        >
          Create your plan
        </button>
      </div>

      {/* ----coffe-collection---- */}

      <div className="coffe-collection">
        <h1 className="collection-text">our collection</h1>

        <div className="coffe-types">
          <div className="coffe-types-card">
            <img height={190} src="./section-image/card-coffe.png" alt="" />
            <h1 style={{ fontSize: '24px', fontFamily: 'sans-serif', marginTop: '70px', textAlign: 'center', color: '#333D4B' }}>
              Gran Espresso
            </h1>
            <p style={{ fontSize: '16px', fontFamily: 'sans-serif', marginTop: '20px', textAlign: 'center', color: '#333D4B' }}>
              Light and flavorful blend with cocoa and black pepper for an intense experience.
            </p>
          </div>

          <div className="coffe-types-card">
            <img height={190} src="./section-image/card-coffe.png" alt="" />
            <h1 style={{ fontSize: '24px', fontFamily: 'sans-serif', marginTop: '70px', textAlign: 'center', color: '#333D4B' }}>
              Planalto
            </h1>
            <p style={{ fontSize: '16px', fontFamily: 'sans-serif', marginTop: '20px', textAlign: 'center', color: '#333D4B' }}>
              Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.
            </p>
          </div>

          <div className="coffe-types-card">
            <img height={190} src="./section-image/card-coffe.png" alt="" />
            <h1 style={{ fontSize: '24px', fontFamily: 'sans-serif', marginTop: '70px', textAlign: 'center', color: '#333D4B' }}>
              Piccollo
            </h1>
            <p style={{ fontSize: '16px', fontFamily: 'sans-serif', marginTop: '20px', textAlign: 'center', color: '#333D4B' }}>
              Mild and smooth blend featuring notes of toasted almond and dried cherry.
            </p>
          </div>

          <div className="coffe-types-card">
            <img height={190} src="./section-image/card-coffe.png" alt="" />
            <h1 style={{ fontSize: '24px', fontFamily: 'sans-serif', marginTop: '70px', textAlign: 'center', color: '#333D4B' }}>
              Danche
            </h1>
            <p style={{ fontSize: '16px', fontFamily: 'sans-serif', marginTop: '20px', textAlign: 'center', color: '#333D4B' }}>
              Ethiopian hand-harvested blend densely packed with vibrant fruit notes.
            </p>
          </div>
        </div>
      </div>

      {/* ----coffe-choose---- */}

      <div className="coffe-choose">
        <div className="choose-info">
          <h1 style={{ fontSize: '40px', fontFamily: 'sans-serif', color: 'white', width: '540px', textAlign: 'center' }}>
            Why choose us?
          </h1>
          <p style={{ fontSize: '16px', fontFamily: 'sans-serif', color: '#FEFCF7', width: '540px', textAlign: 'center', marginTop: '30px' }}>
            A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.
          </p>
        </div>

        {/* Include ChooseCards component here */}
        <ChooseCards />
      </div>


      {/* ----how it works---- */}

      <div className="how-it-works">
        <h1 style={{
          fontSize: '40px',
          fontFamily: 'revert-layer',
          color: 'gray',

        }}>How it works</h1>
        <div className="check">
          <div className="sycle"></div>
          <div className="sycle"></div>
          <div className="sycle"></div>
          <div className="liner"></div>
        </div>

        <div className="works-cards">
          <div className="works-card-title">
            <h1 style={{
              fontSize: '72px',
              fontFamily: 'revert-layer',
              color: '#FDD6BA',
            }}>01</h1>

            <h1 style={{
              fontSize: '32px',
              fontFamily: 'revert-layer',
              color: '#333D4B',
              marginTop: '38px',
              width: '200px'
            }}>Pick your coffee</h1>

            <p style={{
              fontSize: '16px',
              fontFamily: 'revert-layer',
              color: '#333D4B',
              marginTop: '42px',
            }}>
              Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
            </p>
          </div>

          <div className="works-card-title">
            <h1 style={{
              fontSize: '72px',
              fontFamily: 'revert-layer',
              color: '#FDD6BA',
            }}>02</h1>

            <h1 style={{
              fontSize: '32px',
              fontFamily: 'revert-layer',
              color: '#333D4B',
              marginTop: '38px',
              width: '200px'
            }}>Choose the frequency</h1>

            <p style={{
              fontSize: '16px',
              fontFamily: 'revert-layer',
              color: '#333D4B',
              marginTop: '42px',
            }}>
              Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.            </p>
          </div>

          <div className="works-card-title">
            <h1 style={{
              fontSize: '72px',
              fontFamily: 'revert-layer',
              color: '#FDD6BA',
            }}>03</h1>

            <h1 style={{
              fontSize: '32px',
              fontFamily: 'revert-layer',
              color: '#333D4B',
              marginTop: '38px',
              width: '200px'
            }}>Receive and enjoy!</h1>

            <p style={{
              fontSize: '16px',
              fontFamily: 'revert-layer',
              color: '#333D4B',
              marginTop: '42px',
            }}>
              We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.                </p>
          </div>

        </div>







      </div>


      <button style={{
        marginLeft: '-820px',
      }}
          className={`great-btn ${isButtonActive ? 'active' : ''}`}
          onClick={handleButtonClick} // Tugma bosilganda
        >
          Create your plan
        </button>

      



    </div>
  );
};

export default Section;
