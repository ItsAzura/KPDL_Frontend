import React from 'react';
import CorrelationMapChart from '../../components/pattern1/correlationmapchart';

const CorrelationMap = () => {
  return (
    <div className="ml-80 py-4">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold ">
          Weather Forecast Correlation map
        </h1>
      </header>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-5xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Correlation map
          </h2>
          <CorrelationMapChart />
        </div>
      </div>
    </div>
  );
};

export default CorrelationMap;
