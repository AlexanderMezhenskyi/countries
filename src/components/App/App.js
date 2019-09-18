import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Header from "../Header/Header";
import RandomCountry from "../RandomCountry/RandomCountry";
import {AfricaPage, AmericasPage, AsiaPage, EuropePage, OceaniaPage, CountriesByLanguagePage, FavoriteCountriesPage} from '../Pages';
import './App.scss';

const App = () => {
    return (
      <>
          <ErrorBoundry>
              <Router>
                  <Header/>
                  <RandomCountry/>
                  <Switch>
                      <Route path="/" exact render={() => <h1 className="heading-text text-primary">Welcome to Countries Application</h1>}/>
                      <Route path="/africa/:name?" component={AfricaPage} />
                      <Route path="/americas/:name?" component={AmericasPage} />
                      <Route path="/asia/:name?" component={AsiaPage} />
                      <Route path="/europe/:name?" component={EuropePage} />
                      <Route path="/oceania/:name?" component={OceaniaPage} />
                      <Route path="/countries-by-language/:name?" component={CountriesByLanguagePage} />
                      <Route path="/favorite-countries/:name?" component={FavoriteCountriesPage} />
                      <Route render={() => <h1 className="heading-text text-danger">404<br/>Page not found</h1>} />
                  </Switch>
              </Router>
          </ErrorBoundry>
      </>
  );
};

export default App;
