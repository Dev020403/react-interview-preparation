import './App.css';
import { useState } from 'react';

function App() {
  const [cost, setCost] = useState(0)
  const [interest, setInterest] = useState(0)
  const [fee, setFee] = useState(1)
  const [downPayment, setDownPayment] = useState(0)
  const [tenure, setTenure] = useState(12)
  const [emi, setEmi] = useState(0)

  const updateEMI = (e) => {

  }

  return (
    <div className="App">
      <span className='title'>EMI calculator</span>
      <span className='title'>Total cost of Asset</span>
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder='Total cost of Asset'
      />
      <span className='title'>Interest rate (in %)</span>
      <input
        type="number"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        placeholder='Total cost of Asset'
      />
      <span className='title'>Processing fee (in %)</span>
      <input type="number"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
        placeholder='Total cost of Asset'
      />
      <span className='title'>Down Payment.</span>
      {/* slider */}
      <input
        type="range"
        className='slider'
        value={downPayment}
        onChange={updateEMI}
        min={0}
        max={cost} />
      <span className='title' >Tenure</span>
      {/* slider */}
    </div>
  );
}

export default App;
