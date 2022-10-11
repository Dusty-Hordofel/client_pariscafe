import React from 'react';
import { Route } from 'react-router-dom';

import { withAuthenticationRequired } from "@auth0/auth0-react";

import AppSpinner from '../../UI/Spinner/AppSpinner';

const ProtectedRoute = ({ component, ...args }) => (

  <Route component={withAuthenticationRequired(component, { onRedirecting: () => <AppSpinner type={'clock'} /> })} {...args} />

)

export default ProtectedRoute;
