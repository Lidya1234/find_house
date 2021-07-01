import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../style/style.css';
import '../style/Rating.css';
import ReactTextCollapse from 'react-text-collapse';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Notify from '../Notification/Notify';
import { addfavorite, fetchFavorite, removefavorite } from '../reducers/findSlice';

const SingleHouse = ({
  id, name, image, price, rank, description,
}) => {
  const rate = (rank / 5) * 100;
  const TEXT_COLLAPSE_OPTIONS = {
    collapse: false,
    collapseText: <FaAngleDown />,
    expandText: <FaAngleUp />,
    minHeight: 50,
    maxHeight: 100,
    textStyle: {
      color: 'gray',
      fontSize: '20px',
      float: 'center',
      textAlign: 'center',
    },
  };
  const dispatch = useDispatch();
  const { singlehouse, favorite } = useSelector((state) => state.houses);
  const favadded = [];
  let addButton;
  let btnA = 'Add to Favourite';
  let btnR = 'Remove from Favourite';
  const handleAddFavorite = (event) => {
    event.preventDefault();
    const userid = id;
    const houseid = singlehouse.id;
    const favoritee = {
      user_id: userid,
      house_id: houseid,
    };
    dispatch(addfavorite(favoritee));
    setTimeout(() => {
      dispatch(fetchFavorite);
      btnA = 'Remove from Favourite';
      Notify();
    }, 5000);
  };
  const handleRemoveFavorite = (event) => {
    event.preventDefault();
    dispatch(removefavorite(id));
    setTimeout(() => {
      dispatch(fetchFavorite);
      btnR = 'Add to Favourite';
      Notify();
    }, 5000);
  };
  if (favorite !== undefined) {
    favorite.forEach((favhouse) => {
      if (favhouse.house_id === id) {
        favadded.push(true);
      } else {
        favadded.push(false);
      }
    });
  }

  if (favadded.includes(true)) {
    addButton = (

      <button
        type="button"
        className="appbtn"
        onClick={handleRemoveFavorite}
      >
        {btnR}
      </button>
    );
  } else {
    addButton = (

      <button
        type="button"
        className="appbtn"
        onClick={handleAddFavorite}
      >
        {btnA}
      </button>
    );
  }

  return (
    <>
      <div className="singlehouse" data-testid="house">
        <img className="singleimage" src={image} alt={image} />
        <div className="description">
          <div className="name">
            {name}
            <div>
              {' '}
              <span className="star-wrapper">
                <span className="stars" style={{ width: `${rate}%` }} />
              </span>
            </div>
          </div>
          <div className="price">
            $
            {price}
            <div>per month</div>
          </div>

        </div>
      </div>
      <div className="collapsible">
        <h6>About this listing</h6>
        <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
          <p>
            {description}
          </p>
        </ReactTextCollapse>
      </div>

      {addButton}
    </>
  );
};

SingleHouse.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
export default SingleHouse;
