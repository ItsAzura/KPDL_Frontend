import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const WindRosePlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/weatherstats_fortmcmurray_hourly.csv')
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = parseCSV(csvData);
        setData(parsedData);
      })
      .catch((error) => console.error('Error loading CSV:', error));
  }, []);

  const parseCSV = (csvData) => {
    const rows = csvData.split('\n').slice(1);
    return rows
      .map((row) => {
        const cols = row.split(',');
        return {
          wind_dir: parseFloat(cols[7]), // Giả sử cột 7 là wind_dir
          wind_speed: parseFloat(cols[6]), // Giả sử cột 6 là wind_speed
        };
      })
      .filter((row) => !isNaN(row.wind_dir) && !isNaN(row.wind_speed));
  };

  return (
    <Plot
      data={[
        {
          type: 'barpolar',
          r: data.map((row) => row.wind_speed),
          theta: data.map((row) => row.wind_dir),
          name: 'Wind Speed',
          marker: {
            color: '#1f77b4',
            opacity: 0.7,
          },
        },
      ]}
      layout={{
        title: 'Wind Rose Plot of Wind Direction and Speed',
        polar: {
          radialaxis: { ticksuffix: ' m/s', title: { text: 'Wind Speed' } },
          angularaxis: {
            direction: 'clockwise',
            rotation: 90,
            title: { text: 'Wind Direction' },
          },
        },
        showlegend: false,
      }}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default WindRosePlot;
