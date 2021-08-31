import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BandInput from './BandInput';
import { bandAdded } from './bandsSlice';

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities);
  const dispatch = useDispatch();

  const handleSubmit = (name) => {
    dispatch(bandAdded(name));
  };

  const bandArr = bands.map((band, index) => <li key={index}>{band}</li>);
  return (
    <div>
      <BandInput onBandSubmit={handleSubmit} />
      <ul>{bandArr}</ul>
    </div>
  );
}

export default BandsContainer;
