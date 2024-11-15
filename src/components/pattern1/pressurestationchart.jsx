import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

const PressureStationChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/weatherstats_fortmcmurray_hourly.csv')
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = Papa.parse(csvData, { header: true }).data;
        const pressurestation = parsedData
          .map((row) => parseFloat(row['pressure_station']))
          .filter((pre_sta) => !isNaN(pre_sta));
        const result = [];
        for (let i = 0; i < pressurestation.length; i += 10) {
          const chunk = pressurestation.slice(i, i + 10);
          const averagePreSta =
            chunk.reduce((sum, pre_sta) => sum + pre_sta, 0) / chunk.length;
          result.push({
            index: i / 10 + 1,
            pressure_station: averagePreSta,
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
          title: 'Pressure Station',
          yaxis: { title: 'Average Pressure Station' },
        }}
        config={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default PressureStationChart;
