import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="overlay"></div>

      <div className="hero-content">

        <h1>
          Life is sweet.<br />
          Have a slice.
        </h1>

        <p>
          Handcrafted cakes, pastries, and custom creations made with love.
        </p>

        <div className="buttons">
          <Link to="/Menu" className="btn primary">
            View Cakes
          </Link>

          <Link to="/create-cake" className="btn secondary">
            Order Custom Cake
          </Link>
        </div>

      </div>

    </section>
  );
}

export default Hero;