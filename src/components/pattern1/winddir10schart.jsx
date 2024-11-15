import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

const WinDir10sChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/weatherstats_fortmcmurray_hourly.csv')
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = Papa.parse(csvData, { header: true }).data;
        const winddir10s = parsedData
          .map((row) => parseFloat(row['wind_dir_10s']))
          .filter((wind) => !isNaN(wind));

        const result = [];
        for (let i = 0; i < winddir10s.length; i += 10) {
          const chunk = winddir10s.slice(i, i + 10);
          const averageWind =
            chunk.reduce((sum, wind) => sum + wind, 0) / chunk.length;
          result.push({
            index: i / 10 + 1,
            wind_dir_10s: averageWind,
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
            y: data.map((row) => row['wind_dir_10s']),
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
          title: 'Wind Direction 10s',
          yaxis: { title: 'Average Wind Direction 10s' },
        }}
        config={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default WinDir10sChart;
