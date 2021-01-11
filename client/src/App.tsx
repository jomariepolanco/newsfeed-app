import React from 'react';

function App() {
  const [data, setData] = React.useState("null");

  const getData = () => {
    fetch('/api/users')
      .then((result) => result.text())
      .then((res) => setData(res));
  };
  return (
    <div className="App">
        <button onClick={getData}>Click Me For Data</button>
        {data}
    </div>
  );
}

export default App;
