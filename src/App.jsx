import React, { useState } from 'react';

function App() {
  const [fact, setFact] = useState('');

  const getFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Failed to fetch a fact.');
      console.error('Error fetching fact:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Random Cat Fact</h1>
      <button onClick={getFact} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Get Cat Fact
      </button>
      {fact && (
        <p style={{ marginTop: '20px', maxWidth: '400px', margin: '20px auto' }}>
          {fact}
        </p>
      )}
    </div>
  );
}

export default App;
