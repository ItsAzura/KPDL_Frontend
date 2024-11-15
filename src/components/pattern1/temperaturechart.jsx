import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

const TemperatureCharts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/weatherstats_fortmcmurray_hourly.csv')
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = Papa.parse(csvData, { header: true }).data;

        const temperature = parsedData
          .map((row) => parseFloat(row['temperature']))
          .filter((temp) => !isNaN(temp));

        const result = [];
        for (let i = 0; i < temperature.length; i += 10) {
          const chunk = temperature.slice(i, i + 10);
          const averageTemp =
            chunk.reduce((sum, temp) => sum + temp, 0) / chunk.length;
          result.push({
            index: i / 10 + 1,
            temperature: averageTemp,
          });
        }

        setData(result);
      })
      .catch((error) =>
        console.error('Error loading or parsing CSV file:', error)
      );
  }, []);

  console.log(data);

  return (
    <div>
      <Plot
        data={[
          {
            x: data.map((row) => row.index),
            y: data.map((row) => row['temperature']),
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
          title: 'Temperature',
          yaxis: { title: 'Average Temperature (°C)' },
        }}
        config={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default TemperatureCharts;
