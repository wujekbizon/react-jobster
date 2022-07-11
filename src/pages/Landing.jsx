import { Logo } from '../components';
import main from '../assets/images/main2.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Mixtape tattooed letterpress, cliche hammock taxidermy vinyl bespoke
            messenger bag gentrify. Before they sold out gastropub paleo
            taxidermy, master cleanse vaporware marfa semiotics brunch
            flexitarian raw denim roof party migas tote bag. Bitters pop-up
            gochujang farm-to-table taiyaki butcher migas lyft beard hoodie
            pinterest before they sold out mumblecore dreamcatcher DSA.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
