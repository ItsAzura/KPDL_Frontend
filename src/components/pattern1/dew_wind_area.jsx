import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const DewWindArea = () => {
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
          dew_point: parseFloat(cols[9]),
          wind_speed: parseFloat(cols[6]),
        };
      })
      .filter((row) => !isNaN(row.dew_point) && !isNaN(row.wind_speed));
  };

  return (
    <Plot
      data={[
        {
          x: data.map((row) => row.date_time_local),
          y: data.map((row) => row.dew_point),
          type: 'scatter',
          mode: 'lines',
          fill: 'tozeroy',
          name: 'Dew Point',
          line: { color: '#1f77b4' },
        },
        {
          x: data.map((row) => row.date_time_local),
          y: data.map((row) => row.wind_speed),
          type: 'scatter',
          mode: 'lines',
          fill: 'tozeroy',
          name: 'Wind Speed',
          line: { color: '#ff7f0e' },
        },
      ]}
      layout={{
        title: 'Area Chart of Dew Point and Wind Speed',
        xaxis: { title: 'Date and Time' },
        yaxis: { title: 'Value' },
        showlegend: true,
        plot_bgcolor: '#f5f5f5',
        paper_bgcolor: '#f5f5f5',
      }}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default DewWindArea;
