import React  from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from "react-router-dom";
import { history } from 'utils/history';

import MoviesList from 'containers/MoviesListPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AddMoviePage  from 'containers/AddMoviePage/Loadable';
import EditMoviePage  from 'containers/EditMoviePage/Loadable';
import MovieDetails from '../MovieDetails';

import 'style.scss';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


export function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={["/", "/moviesList"]} component={MoviesList} />
        <Route  path="/create" component={AddMoviePage} />
        <Route  path="/edit/:id" component={EditMoviePage} />
        <Route  path="/details/:id" component={MovieDetails} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

App.propTypes = {
};


export default connect(
)(App);
