import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function Prosentregning() {
  const [initialAmount, setInitialAmount] = useState(100);
  const [reductionPercentage, setReductionPercentage] = useState(20);
  const [years, setYears] = useState(3);
  const [chartData, setChartData] = useState(null);
  const [finalAmount, setFinalAmount] = useState(null); // Initialize as null or a number

  const calculateReduction = () => {
    let data = [];
    let amount = initialAmount;
    
    for (let i = 0; i <= years; i++) {
      data.push({ year: i, value: amount });
      amount *= (1 - reductionPercentage / 100);
    }

    setChartData({
      labels: data.map(d => `Year ${d.year}`),
      datasets: [
        {
          label: 'Final Value After Reduction Over Time',
          data: data.map(d => d.value),
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    });

    // Set the final amount after reduction
    const finalValue = calculateFinalAmount(initialAmount, reductionPercentage, years);
    setFinalAmount(finalValue); // Update state with the final amount
  };

  function calculateFinalAmount(initialAmount, reductionPercentage, years) {
    let amount = initialAmount;

    for (let i = 0; i < years; i++) {
      amount *= (1 - reductionPercentage / 100);
    }
    
    return amount; // Return the final calculated amount
  }

  return (
    <div className="container" style={containerStyle}>
      <h2 style={titleStyle}>Prosentregning</h2>
      <p>Bruk denne kalkulatoren neste gang det blir snakk om prosentregning i lunsjen ;)</p>
      
      <div style={inputContainerStyle}>
        <label style={labelStyle}>
          Initial Amount:
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(parseFloat(e.target.value))}
            style={inputStyle}
          />
        </label>
      </div>
      
      <div style={inputContainerStyle}>
        <label style={labelStyle}>
          Reduction Percentage:
          <input
            type="number"
            value={reductionPercentage}
            onChange={(e) => setReductionPercentage(parseFloat(e.target.value))}
            style={inputStyle}
          />
        </label>
      </div>
      
      <div style={inputContainerStyle}>
        <label style={labelStyle}>
          Years:
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(parseInt(e.target.value, 10))}
            style={inputStyle}
          />
        </label>
      </div>

      <button onClick={calculateReduction} style={buttonStyle}>Calculate</button>

      {chartData && (
        <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
          <Line data={chartData} />
        </div>
      )}  
      
      {finalAmount !== null && (
        <div>
          <p>Riktig svar på spørsmålet: Hvis du har verdi <strong>{initialAmount}</strong>, og rekker i fra <strong>{reductionPercentage}</strong> prosent hvert år i <strong>{years}</strong> er altså: <strong>{finalAmount.toFixed(2)}</strong></p>
        </div>
      )}
    </div>
  );
}


// Styling
const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const titleStyle = {
  color: '#4a90e2',
  marginBottom: '20px',
};

const inputContainerStyle = {
  marginBottom: '15px',
  textAlign: 'left',
};

const labelStyle = {
  display: 'block',
  fontWeight: 'bold',
  marginBottom: '5px',
  fontSize: '16px',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const buttonStyle = {
  marginTop: '15px',
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#4a90e2',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

buttonStyle[':hover'] = {
  backgroundColor: '#357ABD',
};
