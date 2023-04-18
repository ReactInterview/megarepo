import './App.css';
import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import DisplayData from '../DisplayData';

function App() {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  const { data } = useFetch({ latitude, longitude });

  return (
    <div>
      <div>Longitude</div>
      <input
        type="text"
        data-testid="LongitudeInput"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <div>Latitude</div>
      <input
        type="text"
        data-testid="LatitudeInput"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <DisplayData data={data} />
      <div data-testid="test">latitude-test-{latitude}</div>
    </div>
  );
}

export default App;
