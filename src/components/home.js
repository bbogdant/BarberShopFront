import React from 'react';
import './home.css';


const Home = () => {
  return (
    <div className="home-container">
    <header className="hero">
      <div className="hero-content">
        <h1>Welcome to Barber Shop</h1>
        <p>Your One-Stop Barbering Experience</p>
      </div>
    </header>

      <h2>Featured Services</h2>
      <section className="featured-services">
        <div className="service-card">
          <img src="img1.png" alt="Service 1" />
          <h3>Haircuts</h3>
          <p>Get the perfect haircut tailored to your style.</p>
          <p className="service-price">$25</p> {/* Add the pricing here */}
        </div>
        <div className="service-card">
          <img src="/img2.png" alt="Service 2" />
          <h3>Beard Grooming</h3>
          <p>Experience professional beard grooming.</p>
          <p className="service-price">$20</p> {/* Add the pricing here */}
        </div>
        <div className="service-card">
          <img src="/img3.png" alt="Service 3" />
          <h3>Shaving</h3>
          <p>Relax with a traditional hot towel shave.</p>
          <p className="service-price">$15</p> {/* Add the pricing here */}
        </div>
      </section>

      
      <section  className="our-team">
      <div id="barbers" name="barbers">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/barber1.jpg" alt="Barber 1" />
            <p>John Doe</p>
          </div>
          <div className="team-member">
            <img src="/images/barber2.jpg" alt="Barber 2" />
            <p>Jane Smith</p>
          </div>
          <div className="team-member">
            <img src="/images/barber3.jpg" alt="Barber 3" />
            <p>Michael Johnson</p>
          </div>
        </div>
        </div>
      </section>

      


      <section className="appointment-button">
        <button className="btn">Book an Appointment</button>
      </section>
    </div>
  );
};

export default Home;
