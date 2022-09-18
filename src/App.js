import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes/Routes';
import { useAuth0 } from '@auth0/auth0-react';
import { createUser } from './api/user';

function App() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const init = async () => {
    if (isAuthenticated) {
      console.log('🚀 ~ file: App.js ~ line 9 ~ App ~ user', user);
      const result = await createUser(user);
      console.log('🚀 ~ file: App.js ~ line 15 ~ App ~ result', result);
    } else {
      console.log('user is not authenticated');
    }
  };

  useEffect(() => {
    init();
  }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  const renderApp = () => {
    return <Routes />;
  };
  return <div className="App">{renderApp()}</div>;
}

export default App;
