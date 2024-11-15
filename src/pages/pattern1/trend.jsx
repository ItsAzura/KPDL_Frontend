import React from 'react';
import TempTimeChange from '../../components/pattern1/temp_timechange';
import PressureStationChange from '../../components/pattern1/perssurestation_timechange';
import DewWindArea from '../../components/pattern1/dew_wind_area';
import WindRosePlot from '../../components/pattern1/wind_rose_plot';
import TempBarChart from '../../components/pattern1/tempbarchart';

const Trend = () => {
  return (
    <div className="ml-72 py-4">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold ">Weather Forecast Trend</h1>
      </header>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-5xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Temperature Time Change
          </h2>
          <TempTimeChange />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-5xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Pressure Station Change
          </h2>
          <PressureStationChange />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-5xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Dew Wind Area
          </h2>
          <DewWindArea />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-5xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Wind Rose Plot
          </h2>
          <WindRosePlot />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-5xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Temperature Bar Chart
          </h2>
          <TempBarChart />
        </div>
      </div>
    </div>
  );
};

export default Trend;
