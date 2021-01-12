import React from 'react';
import Navbar from './components/Navbar';
import NewsContainer from './containers/NewsContainer';
import NotesContainer from './containers/NotesContainer';
import 'fontsource-roboto';

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
        <Navbar />
        <NewsContainer />
        <NotesContainer />
    </div>
  );
}

export default App;
