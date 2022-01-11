import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    axios.get('https://httpbin.org/get').then((response) => {
      setResponse(response.data);
    });
  }, []);
  return (
    <div>
      {
        response && response.map((i) => (<div key={i.id} data-testid="list">{i.id}</div>))
      }
    </div>
  );
};

export default App;
