import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

const WindSpeedChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/weatherstats_fortmcmurray_hourly.csv')
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = Papa.parse(csvData, { header: true }).data;
        const windspeed = parsedData
          .map((row) => parseFloat(row['wind_speed']))
          .filter((wind) => !isNaN(wind));

        const result = [];
        for (let i = 0; i < windspeed.length; i += 10) {
          const chunk = windspeed.slice(i, i + 10);
          const averageWind =
            chunk.reduce((sum, wind) => sum + wind, 0) / chunk.length;
          result.push({
            index: i / 10 + 1,
            wind_speed: averageWind,
          });
        }

        setData(result);
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
            x: data.map((row) => row.index),
            y: data.map((row) => row['wind_speed']),
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
          title: 'Wind Speed',
          yaxis: { title: 'Average Wind Speed' },
        }}
        config={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default WindSpeedChart;
