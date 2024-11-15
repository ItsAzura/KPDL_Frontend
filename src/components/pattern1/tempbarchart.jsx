import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const TempBarChart = () => {
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
          date_time_local: cols[0],
          max_air_temp: parseFloat(cols[19]),
          min_air_temp: parseFloat(cols[20]),
        };
      })
      .filter((row) => !isNaN(row.max_air_temp) && !isNaN(row.min_air_temp));
  };

  return (
    <Plot
      data={[
        {
          x: data.map((row) => row.date_time_local),
          y: data.map((row) => row.max_air_temp),
          type: 'bar',
          name: 'Max Air Temp',
          marker: { color: '#ff7f0e' },
        },
        {
          x: data.map((row) => row.date_time_local),
          y: data.map((row) => row.min_air_temp),
          type: 'bar',
          name: 'Min Air Temp',
          marker: { color: '#1f77b4' },
        },
      ]}
      layout={{
        title: 'Hourly Max and Min Air Temperature',
        barmode: 'group',
        xaxis: { title: 'Date and Time', tickangle: -45 },
        yaxis: { title: 'Temperature (°C)' },
        plot_bgcolor: '#f5f5f5',
        paper_bgcolor: '#f5f5f5',
      }}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default TempBarChart;
