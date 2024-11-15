// CorrelationMapChart.js
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

const CorrelationMapChart = () => {
  const [correlationMatrix, setCorrelationMatrix] = useState(null);
  const correlationColumns = [
    'pressure_station',
    'pressure_sea',
    'wind_dir_10s',
    'wind_speed',
    'relative_humidity',
    'dew_point',
    'temperature',
    'visibility',
    'health_index',
    'cloud_cover_4',
    'max_air_temp_pst1hr',
    'min_air_temp_pst1hr',
  ];

  useEffect(() => {
    fetch('/data/weatherstats_fortmcmurray_hourly.csv')
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            const data = result.data;
            const filteredData = data
              .map((row) =>
                correlationColumns.reduce((acc, col) => {
                  acc[col] = parseFloat(row[col]);
                  return acc;
                }, {})
              )
              .filter((row) =>
                Object.values(row).every((value) => !isNaN(value))
              );

            const matrix = calculateCorrelationMatrix(filteredData);
            setCorrelationMatrix(matrix);
          },
        });
      })
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  //Hàm tính toán ma trận tương quan
  const calculateCorrelationMatrix = (data) => {
    //Xác định số lương cột
    const numCols = correlationColumns.length;
    //Tạo ma trận 2 chiều với giá trị ban đầu là 0
    const matrix = Array(numCols)
      .fill(null)
      .map(() => Array(numCols).fill(0));

    //Tính toán giá trị tương quan giữa các cột
    for (let i = 0; i < numCols; i++) {
      for (let j = 0; j < numCols; j++) {
        const colI = correlationColumns[i];
        const colJ = correlationColumns[j];
        matrix[i][j] = calculateCorrelation(data, colI, colJ);
      }
    }
    return matrix;
  };

  //Hàm tính toán tương quan
  const calculateCorrelation = (data, colX, colY) => {
    //Lấy giá trị của cột X và Y
    const x = data.map((row) => row[colX]);
    const y = data.map((row) => row[colY]);
    //Tính toán giá trị trung bình của cột X và Y
    const meanX = x.reduce((sum, val) => sum + val, 0) / x.length;
    const meanY = y.reduce((sum, val) => sum + val, 0) / y.length;

    //Tính toán giá trị tương quan
    const numerator = x
      .map((xi, idx) => (xi - meanX) * (y[idx] - meanY))
      .reduce((sum, val) => sum + val, 0);
    //Tính toán giá trị mẫu số
    const denominator = Math.sqrt(
      x.map((xi) => (xi - meanX) ** 2).reduce((sum, val) => sum + val, 0) *
        y.map((yi) => (yi - meanY) ** 2).reduce((sum, val) => sum + val, 0)
    );
    //Trả về giá trị tương quan hoặc 0 nếu mẫu số bằng 0
    return denominator ? numerator / denominator : 0;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      {correlationMatrix && (
        <Plot
          data={[
            {
              z: correlationMatrix,
              x: correlationColumns,
              y: correlationColumns,
              type: 'heatmap',
              colorscale: 'RdBu',
              reversescale: true,
              zmin: -1,
              zmax: 1,
              colorbar: {
                title: 'Correlation',
                titleside: 'right',
                tickvals: [-1, -0.5, 0, 0.5, 1],
                ticktext: ['-1', '-0.5', '0', '0.5', '1'],
              },
            },
          ]}
          layout={{
            title: {
              text: 'Correlation Matrix Heatmap',
              font: { size: 24, color: '#333' },
              x: 0.5,
              xanchor: 'center',
            },
            xaxis: {
              title: 'Variables',
              tickangle: -45,
              automargin: true,
              showgrid: true,
              tickfont: { size: 10 },
            },
            yaxis: {
              title: 'Variables',
              automargin: true,
              showgrid: true,
              tickfont: { size: 10 },
            },
            margin: { t: 80, l: 100, r: 100, b: 100 },
            width: 800,
            height: 600,
            paper_bgcolor: '#f8f9fa',
            plot_bgcolor: '#f8f9fa',
            font: {
              family: 'Arial, sans-serif',
              color: '#333',
            },
          }}
        />
      )}
    </div>
  );
};

export default CorrelationMapChart;
