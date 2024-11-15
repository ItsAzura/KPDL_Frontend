import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

const PressureSeaChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/weatherstats_fortmcmurray_hourly.csv')
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = Papa.parse(csvData, { header: true }).data;
        const pressuresea = parsedData
          .map((row) => parseFloat(row['pressure_sea']))
          .filter((pre_sea) => !isNaN(pre_sea));

        const result = [];
        for (let i = 0; i < pressuresea.length; i += 10) {
          const chunk = pressuresea.slice(i, i + 10);
          const averagePreSea =
            chunk.reduce((sum, pre_sea) => sum + pre_sea, 0) / chunk.length;
          result.push({
            index: i / 10 + 1,
            pressure_sea: averagePreSea,
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
            y: data.map((row) => row['pressure_sea']),
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
          title: 'Pressure Sea',
          yaxis: { title: 'Average Pressure Sea' },
        }}
        config={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default PressureSeaChart;
