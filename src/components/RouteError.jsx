import React from 'react';
import { useRouteError } from 'react-router';

const RouteError = () => {
    const error = useRouteError();
  console.error(error);
  return <div>{error.message}</div>;
}
 
export default RouteError;