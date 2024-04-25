
import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './Components/ProgressBar';

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100)
  }, [])
  return (
    <div className="App">
      <span>Progress Bar</span>
      <ProgressBar value={value}></ProgressBar>
    </div>
  );
}

export default App;
