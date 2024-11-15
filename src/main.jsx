import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from './components/loading/Loading.jsx';

const WeatherForecastCharts = lazy(() =>
  import('./pages/pattern1/weatherforecastCharts.jsx')
);
const Trend = lazy(() => import('./pages/pattern1/trend.jsx'));

const CorrelationMap = lazy(() =>
  import('./pages/pattern1/correlationmap.jsx')
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="/pattern1"
        element={
          <Suspense fallback={<Loading />}>
            <WeatherForecastCharts />
          </Suspense>
        }
      />
      <Route
        path="/pattern2"
        element={
          <Suspense fallback={<Loading />}>
            <Trend />
          </Suspense>
        }
      />
      <Route
        path="/pattern3"
        element={
          <Suspense fallback={<Loading />}>
            <CorrelationMap />
          </Suspense>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
