import React from 'react';
import Router from 'react-router/lib/Router';
// import browserHistory from 'react-router/lib/browserHistory';
import hashHistory from 'react-router/lib/hashHistory';
import routes from './routes';

/**
 * Router takes in the browserHitsory and all the routes we 
 * created in './routes/'. This is the highest level component
 * of our application. 
 * learn more: https://github.com/ReactTraining/react-router/blob/master/docs/API.md#router
 */
const Root = () => <Router history={hashHistory} routes={routes} />;

export default Root;
