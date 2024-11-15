import React from 'react';
import TemperatureCharts from '../../components/pattern1/temperaturechart';
import PressureStationChart from '../../components/pattern1/pressurestationchart';
import PressureSeaChart from '../../components/pattern1/pressureseachart';
import WinDir10sChart from '../../components/pattern1/winddir10schart';
import WindSpeedChart from '../../components/pattern1/windspeedchart';
import RelativeHumidityChart from '../../components/pattern1/relativehumiditychart';

const WeatherForecastCharts = () => {
  return (
    <div className="ml-72 py-4">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold ">Weather Forecast Overview</h1>
      </header>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-5xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Pressure Station Chart
          </h2>
          <PressureStationChart />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-5xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Pressure Sea Level Chart
          </h2>
          <PressureSeaChart />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-5xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Wind Direction Chart
          </h2>
          <WinDir10sChart />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-5xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Wind Speed Chart
          </h2>
          <WindSpeedChart />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-5xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Relative Humidity Chart
          </h2>
          <RelativeHumidityChart />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-5xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Temperature Chart
          </h2>
          <TemperatureCharts />
        </div>
      </div>
    </div>
  );
};

export default WeatherForecastCharts;
