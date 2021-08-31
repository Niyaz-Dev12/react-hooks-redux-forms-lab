import React, { useState } from 'react';

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBandSubmit(name);
    setName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input id="name" type="name" onChange={handleChange} value={name} />
      <input type="submit" value="add band" />
    </form>
  );
}

export default BandInput;
