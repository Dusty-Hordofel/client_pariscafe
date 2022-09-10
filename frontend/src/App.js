import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes/Routes';

function App() {
  const renderApp = () => {
    return <Routes />;
  };
  return <div className="App">{renderApp()}</div>;
}

export default App;
