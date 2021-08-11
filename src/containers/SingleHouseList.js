import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchHouse } from '../reducers/findSlice';
import SingleNav from '../components/SingleNav';
import SingleHouse from '../components/SingleHouse';

const SingleHouseList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.state?.data;
  const { singlehouse } = useSelector((state) => state.houses);
  useEffect(() => {
    dispatch(fetchHouse(id));
  }, [dispatch]);

  return (
    <>
      <SingleNav name={singlehouse.name} />

      <SingleHouse
        key={singlehouse.id}
        id={singlehouse.id}
        image={singlehouse.image}
        name={singlehouse.name}
        price={singlehouse.price}
        rank={singlehouse.rank}
        description={singlehouse.description}
      />
    </>
  );
};

export default SingleHouseList;
