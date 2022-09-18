import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes/Routes';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      console.log('🚀 ~ file: App.js ~ line 9 ~ App ~ user', user);
    } else {
      console.log('user is not authenticated');
    }
  }, [isAuthenticated, user]);

  const renderApp = () => {
    return <Routes />;
  };
  return <div className="App">{renderApp()}</div>;
}

export default App;
