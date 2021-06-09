import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';


const App = () => {


  return (
    <Router>
      <div>
      <Header />
        <Switch>
          <Route path='/rest-countries-api-with-color-theme-switcher/' exact component={Countries} />
          <Route path='/rest-countries-api-with-color-theme-switcher/:id' exact component={CountryDetail}/>
        </Switch>
    </div>
    </Router>

  )
}

export default App

