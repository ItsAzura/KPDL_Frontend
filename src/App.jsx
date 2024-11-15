import Navigation from './components/navigation/navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen h-auto">
        <Outlet />
      </main>
    </>
  );
}

export default App;
