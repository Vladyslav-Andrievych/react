import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [isVisible, setIsVisble] = useState(true);

  return (
    <>
      <button onClick={() => setIsVisble(!isVisible)}>Toggle</button>
      {isVisible && (
        <>
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="New York" offset={-5} />
        </>
      )}
    </>
  );
};

export default App;
