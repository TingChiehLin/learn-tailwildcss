import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/NavigationBar'

import HeroImage from './layout/HeroImage';

function App() {
  return (
    <div>
      <NavigationBar/>
      <HeroImage/>
      <div className='h-96'>

      </div>
    </div>
  );
}

export default App;

