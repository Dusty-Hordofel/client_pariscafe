import { useState } from 'react';
import _ from 'lodash';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  const [name, setName] = useState('React');
  console.log('🚀 ~ file: App.js ~ line 6 ~ App ~ name', name);

  console.log(name);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
