import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

const RelativeHumidityChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/data/weatherstats_fortmcmurray_hourly.csv')
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = Papa.parse(csvData, { header: true }).data;
        const relativehumidity = parsedData
          .map((row) => parseFloat(row['relative_humidity']))
          .filter((rel_hum) => !isNaN(rel_hum));

        const result = [];
        for (let i = 0; i < relativehumidity.length; i += 10) {
          const chunk = relativehumidity.slice(i, i + 10);
          const averageRelHum =
            chunk.reduce((sum, rel_hum) => sum + rel_hum, 0) / chunk.length;
          result.push({
            index: i / 10 + 1,
            relative_humidity: averageRelHum,
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
            y: data.map((row) => row['relative_humidity']),
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
          title: 'Relative Humidity',
          yaxis: { title: 'Average Relative Humidity' },
        }}
        config={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default RelativeHumidityChart;
