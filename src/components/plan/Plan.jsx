import React, { useState } from 'react';
import './module.css';

const Plan = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleClick = (number) => {
    setSelectedNumber(number);
  };


  

  return (
    <div className="plan-container">
      <div className="create-img">
        <h1 className='create-h'>Create a plan</h1>
        <p className='create-p'>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
      </div>

      {/* ----how-it-works1--- */}
      <div className="how-it-works1">
        <div className="check">
          <div className="sycle"></div>
          <div className="sycle"></div>
          <div className="sycle"></div>
          <div className="liner"></div>
        </div>

        <div className="works-cards">
          <div className="works-card-title">
            <h1 className="number" style={{ color: '#FDD6BA', fontSize: '72px', fontFamily: 'cursive' }}>01</h1>
            <h1 className="label" style={{ color: 'white', fontSize: '32px', fontFamily: 'cursive', marginTop: '38px', width: '200px' }}>Pick your coffee</h1>
            <p style={{ color: 'white', fontSize: '16px', fontFamily: 'cursive', marginTop: '42px' }}>
              Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them.
            </p>
          </div>

          <div className="works-card-title">
            <h1 className="number" style={{ color: '#FDD6BA', fontSize: '72px', fontFamily: 'cursive' }}>02</h1>
            <h1 className="label" style={{ color: 'white', fontSize: '32px', fontFamily: 'cursive', marginTop: '38px', width: '200px' }}>Choose the frequency</h1>
            <p style={{ color: 'white', fontSize: '16px', fontFamily: 'cursive', marginTop: '42px' }}>
              Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment.
            </p>
          </div>

          <div className="works-card-title">
            <h1 className="number" style={{ color: '#FDD6BA', fontSize: '72px', fontFamily: 'cursive' }}>03</h1>
            <h1 className="label" style={{ color: 'white', fontSize: '32px', fontFamily: 'cursive', marginTop: '38px', width: '200px' }}>Receive and enjoy!</h1>
            <p style={{ color: 'white', fontSize: '16px', fontFamily: 'cursive', marginTop: '42px' }}>
              We ship your package within 48 hours, freshly roasted. Sit back and enjoy world-class coffees curated to provide a distinct tasting experience.
            </p>
          </div>
        </div>
      </div>

      {/* ----coffe-select---- */}
      <div className="coffe-select">
        <div className="coffe-select-left">
          {[1, 2, 3, 4, 5].map((num) => (
            <div className="left-number" key={num} onClick={() => handleClick(num)}>
              <h1 className="number" style={{ color: selectedNumber === num ? '#333D4B' : '#83888F' }}>{`0${num}`}</h1>
              <h1 className="label" style={{ color: selectedNumber === num ? '#333D4B' : '#83888F' }}>
                {num === 1 ? 'Preferences' : num === 2 ? 'Bean Type' : num === 3 ? 'Quantity' : num === 4 ? 'Grind Option' : 'Deliveries'}
              </h1>
            </div>
          ))}
        </div>

        {/* ----------- */}

        <div className="coffe-select-right">

          <div className="drink-coffe">
            <div className="coffe-text">
              <h1 className="drink-coffe-h1">How do you drink your coffee?</h1>
              <h1 className="drink-coffe-h2">^</h1>
            </div>

            <div className="drink-coffe-cards">
              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>Capsule</h1>
                <p className='drink-coffe-card-p'>Compatible with Nespresso systems and similar brewers</p>
              </div>

              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>Filter</h1>
                <p className='drink-coffe-card-p'>For pour over or drip methods like Aeropress, Chemex, and V60</p>
              </div>

              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>Espresso</h1>
                <p className='drink-coffe-card-p'>Dense and finely ground beans for an intense, flavorful experience</p>
              </div>
            </div>




          </div>

          <div className="type-coffe">
            <div className="coffe-text">
              <h1 className="drink-coffe-h1">What type of coffee?</h1>
              <h1 className="drink-coffe-h2">^</h1>
            </div>

            <div className="drink-coffe-cards">
              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>Single Origin</h1>
                <p className='drink-coffe-card-p'>Distinct, high quality coffee from a specific family-owned farm</p>
              </div>

              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>Decaf</h1>
                <p className='drink-coffe-card-p'>Just like regular coffee, except the caffeine has been removed</p>
              </div>

              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>Blended</h1>
                <p className='drink-coffe-card-p'>Combination of two or three dark roasted beans of organic coffees</p>
              </div>
            </div>




          </div>

          <div className="much-coffe">
            <div className="coffe-text">
              <h1 className="drink-coffe-h1">How much would you like?</h1>
              <h1 className="drink-coffe-h2">^</h1>
            </div>

            <div className="drink-coffe-cards">
              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>250g</h1>
                <p className='drink-coffe-card-p'>Perfect for the solo drinker. Yields about 12 delicious cups.</p>
              </div>

              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>500g</h1>
                <p className='drink-coffe-card-p'>Perfect option for a couple. Yields about 40 delectable cups.</p>
              </div>

              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>1000g</h1>
                <p className='drink-coffe-card-p'>Perfect for offices and events. Yields about 90 delightful cups.</p>
              </div>
            </div>




          </div>

          <div className="grind-coffe">
            <div className="coffe-text">
              <h1 className="drink-coffe-h1">Want us to grind them?</h1>
              <h1 className="drink-coffe-h2">^</h1>
            </div>

            <div className="drink-coffe-cards">
              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>Wholebean</h1>
                <p className='drink-coffe-card-p'>Best choice if you cherish the full sensory experience</p>
              </div>

              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>Filter</h1>
                <p className='drink-coffe-card-p'>For drip or pour-over coffee methods such as V60 or Aeropress</p>
              </div>

              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>Cafetiére</h1>
                <p className='drink-coffe-card-p'> Course ground beans specially suited for french press coffee</p>
              </div>
            </div>




          </div>

          <div className="deliver-coffe">
            <div className="coffe-text">
              <h1 className="drink-coffe-h1">How often should we deliver?</h1>
              <h1 className="drink-coffe-h2">^</h1>
            </div>

            <div className="drink-coffe-cards">
              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>Every week</h1>
                <p className='drink-coffe-card-p'>$7.20 per shipment. Includes free first-class shipping.</p>
              </div>

              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>Every 2 weeks</h1>
                <p className='drink-coffe-card-p'>$9.60 per shipment. Includes free priority shipping.</p>
              </div>

              <div className="drink-coffe-card">
                <h1 className='drink-coffe-card-h'>Every month</h1>
                <p className='drink-coffe-card-p'>$12.00 per shipment. Includes free priority shipping.</p>
              </div>
            </div>


          </div>

          {/* -----order------ */}


          <div className="order-summary">
            <p className='order-p'>Order Summary</p>
            <h1 className='order-h1'>“I drink my coffee as Filter, with a Decaf type of bean. 250g ground ala Cafetiare, sent to me Every Week.”</h1>
          </div>

          <button className='submit'>Create my plan!</button>

        </div>
      </div>

      {/* <div className="modal-window">
        <div className="modal-summary">
          <h1 className='summary-h'>Order Summary</h1>
        </div>
        <div className='summary-text'>
          <h1 className='summary-text-h'>“I drink my coffee as Filter, with a Decaf type of bean. 250g ground ala Cafetiére, sent to me Every Week.”</h1>
          <p className='summary-text-p'>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
          <div className="costs">
            <h1 className='costs-h'>$14.00 / mo</h1>
            <button className='costs-btn'>Checkout</button>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default Plan;
