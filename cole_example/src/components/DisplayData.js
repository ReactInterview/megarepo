import React from 'react';

const DisplayData = ({ data }) => (
  <div>
    <div>Hello</div>
    {data.map(({ time, temp }, idx) => (
      <div key={idx}>
        Hour: {time} temp {temp}
      </div>
    ))}
  </div>
);

export default DisplayData;
