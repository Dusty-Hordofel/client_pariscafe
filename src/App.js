import { useState } from 'react';
import _ from 'lodash';
import './App.css';

function App() {
  const [name, setName] = useState('React');
  console.log('🚀 ~ file: App.js ~ line 6 ~ App ~ name', name);

  console.log(name);

  return <div className="App">Hello React 2</div>;
}

export default App;
