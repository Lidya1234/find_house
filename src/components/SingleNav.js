import Navbar from 'react-bootstrap/Navbar';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSearch, FaLessThan } from 'react-icons/fa';
import '../style/main.scss';
import '../style/style.css';

const SingleNav = ({ name }) => (
  <Navbar bg="light" variant="light" expand="lg" collapseOnSelect data-testid="login">

    <Link to="./HouseList" className="links"><FaLessThan /></Link>
    <Navbar.Brand className="brand">{name}</Navbar.Brand>

    <div className="search">
      <input type="text" className="search__input" aria-label="search" placeholder="enter your search" />
      <button type="button" className="search__submit" aria-label="submit search"><FaSearch /></button>
    </div>

  </Navbar>

);
SingleNav.propTypes = {
  name: PropTypes.string.isRequired,
};
export default SingleNav;
