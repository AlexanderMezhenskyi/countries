import React from 'react';
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Header from "../Header/Header";
import RandomCountry from "../RandomCountry/RandomCountry";
import './App.scss';

const App = () => {
  return (
      <>
          <ErrorBoundry>
              <Header/>
              <RandomCountry/>
          </ErrorBoundry>
      </>
  );
};

export default App;
