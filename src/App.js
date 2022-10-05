import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes/Routes';
import { useAuth0 } from '@auth0/auth0-react';
import { createUser } from './api/user';
import { CLAIMS_URI } from './config/Config';

function App() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const createUserHandler = async () => {
    if (isAuthenticated) {
      const loginCount = parseInt(user[`${CLAIMS_URI}/logins`]) || 0; //parseInt converts a string to an integer
      console.log(
        '🚀 ~ file: App.js ~ line 15 ~ createUserHandler ~  loginCount ',
        loginCount
      );

      console.log('🚀 ~ file: App.js ~ line 20 ~ App ~ user', user);

      const token = await getAccessTokenSilently();
      console.log(
        '🚀 ~ file: App.js ~ line 24 ~ createUserHandler ~ token',
        token
      );

      if (loginCount <= 1) {
        const result = await createUser(user, token);
        console.log('🚀 ~ file: App.js ~ line 28 ~ init ~ result', result.data);
        console.log('🚀 ~ file: App.js ~ line 28 ~ init ~ result', token);
      } else {
        console.log('User already present in our system ....');
        const token = await getAccessTokenSilently();
        console.log(
          '🚀 ~ file: App.js ~ line 24 ~ createUserHandler ~ token',
          token
        );
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  useEffect(() => {
    createUserHandler();
  }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  const renderApp = () => {
    return <Routes />;
  };
  return <div className="App">{renderApp()}</div>;
}

export default App;
