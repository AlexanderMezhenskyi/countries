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
                      <Route path="/countries/" exact render={() => <h1 className="heading-text text-primary">Welcome to Countries Application</h1>}/>
                      <Route path="/countries/africa/:name?" component={AfricaPage} />
                      <Route path="/countries/americas/:name?" component={AmericasPage} />
                      <Route path="/countries/asia/:name?" component={AsiaPage} />
                      <Route path="/countries/europe/:name?" component={EuropePage} />
                      <Route path="/countries/oceania/:name?" component={OceaniaPage} />
                      <Route path="/countries/countries-by-language/:name?" component={CountriesByLanguagePage} />
                      <Route path="/countries/favorite-countries/:name?" component={FavoriteCountriesPage} />
                      <Route render={() => <h1 className="heading-text text-danger">404<br/>Page not found</h1>} />
                  </Switch>
              </Router>
          </ErrorBoundry>
      </>
  );
};

export default App;
