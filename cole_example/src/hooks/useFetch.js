import { useEffect, useState } from 'react';
import transformData from '../utils/transformData';

const useFetch = ({ latitude, longitude }) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (latitude == null || longitude == null) return;
    const fetchData = async () => {
      setStatus('fetching');
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
      );
      const data = await response.json();
      const transformedData = transformData(data);
      console.log(transformedData);
      setData(transformedData);
      setStatus('fetched');
    };

    fetchData();
  }, [latitude, longitude]);

  return { status, data };
};

export default useFetch;
