import React from 'react'
import './module.css'

const About = () => {
  return (
    <div className='about-container'>

      <div className="about-us-image">
        <div className="about-us-info">
          <h2 className='about-us-h'>About Us</h2>
          <p className='about-us-p'>
            Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
          </p>

        </div>
      </div>

      {/* -----commitmeny----- */}

      <div className="commitment">
        <div className="commitment-img">
          <img alt="" src="../about/rasm1.png" height={520} width={445} />
        </div>

        <div className="commitment-info">
          <h1 className='commitment-h'>Our commitment</h1>
          <p className='commitment-p'>
            We're built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
          </p>
        </div>
      </div>

      {/* ---quality--- */}

      <div className="quality">
        <div className="quality-text">
          <h1 className="quality-h">Uncompromising quality</h1>
          <p className="quality-p">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        </div>

        <img alt="" className="quality-img" src="../about/rasm3.png" height={474} width={445} />

      </div>

      {/* ---headquarters--- */}

      <div className="headquarters">
        <h1 className='headquarters-h1'>Our headquarters</h1>
        <div className="countries">
          <div className="countries-card">
            <img alt="" src="../about/uk.png"  />
            <h1 className='headquarters-h11'>United Kingdom</h1>
            <ul className='headquarters-ul'>
              <li><a href="/">68  Asfordby Rd</a></li>
              <li><a href="/">Alcaston</a></li>
              <li><a href="/">SY6 1YA</a></li>
              <li><a href="/">+44 1241 918425</a></li>
            </ul>
          </div>

          <div className="countries-card">
            <img alt="" src="../about/canada.png" />
            <h1 className='headquarters-h11'>Canada</h1>
            <ul className='headquarters-ul'>
              <li><a href="/"> Toronto</a></li>
              <li><a href="/">Alcaston</a></li>
              <li><a href="/">Ontario M4P 1A6</a></li>
              <li><a href="/">+1 416 485 2997</a></li>
            </ul>
          </div>

          <div className="countries-card">
            <img alt="" src="../about/australia.png" />
            <h1 className='headquarters-h11'>Australiya</h1>
            <ul className='headquarters-ul'>

             
             
              
              <li><a href="/">36 Swanston Street</a></li>
              <li><a href="/"> Kewell</a></li>
              <li><a href="/"> Victoria</a></li>
              <li><a href="/">+61 4 9928 3629</a></li>
            </ul>
          </div>


        </div>





      </div>


    </div>
  )
}

export default About