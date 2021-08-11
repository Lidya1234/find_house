import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../style/main.scss';
import '../style/style.css';

const Navigation = () => (

  <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to="./" className="links">Home</Link>
        <Link to="./FavouriteList" className="links">Favourites</Link>
        <Link to="./Logout" className="links">Logout</Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Brand className="brand">Houses</Navbar.Brand>

    <div className="search">
      <input type="text" className="search__input" aria-label="search" placeholder="enter your search" />
      <button type="button" className="search__submit" aria-label="submit search"><FaSearch /></button>
    </div>

  </Navbar>

);
export default Navigation;
