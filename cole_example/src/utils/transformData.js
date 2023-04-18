const transformData = (rawData) => {
  if (!rawData.hourly) {
    return [];
  }
  const { time, temperature_2m } = rawData.hourly;
  const hourly = [];
  for (let i = 0; i <= 10; i += 1) {
    hourly.push({ time: time[i], temp: temperature_2m[i] });
  }
  return hourly;
};

export default transformData;
