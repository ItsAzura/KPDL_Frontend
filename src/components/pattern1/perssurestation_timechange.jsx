import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

const PressureStationChange = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/data/weatherstats_fortmcmurray_hourly.csv')
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = Papa.parse(csvData, { header: true }).data;
        setData(parsedData);
      })
      .catch((error) =>
        console.error('Error loading or parsing CSV file:', error)
      );
  }, []);
  return (
    <div>
      <Plot
        data={[
          {
            x: data.map((row) => row['date_time_local']),
            y: data.map((row) => row['pressure_station']),
            type: 'scatter+lines',
            mode: 'lines+points',
            marker: {
              color: 'rgba(255, 99, 71, 0.7)',
              size: 6,
              line: { color: 'rgba(255, 99, 71, 1)', width: 1 },
            },
            line: { color: 'rgba(34, 193, 195, 0.8)', width: 2.5 },
          },
        ]}
        layout={{
          width: 990,
          height: 500,
          title: 'Trend Pressure Station',
          yaxis: { title: 'Trend Pressure Station' },
        }}
        config={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default PressureStationChange;
