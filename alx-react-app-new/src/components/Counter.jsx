import { useState } from 'react';

function Counter() {
  // Step 2: useState for count
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      {/* Step 4: Display current count */}
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>

      {/* Step 3: Buttons with handlers */}
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
