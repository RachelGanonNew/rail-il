import React, { Suspense, lazy }  from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from "react-router-dom";
import { history } from 'utils/history';

const NotFoundPage = lazy(() => import('../NotFoundPage/Loadable'));
const MoviesList = lazy(() => import('containers/MoviesListPage/Loadable'));
const AddMoviePage = lazy(() => import('containers/AddMoviePage/Loadable'));
const EditMoviePage = lazy(() => import('containers/EditMoviePage/Loadable'));
const MovieDetails = lazy(() => import('../MovieDetails'));

// import 'style.scss';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


export function App() {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>

        <Switch>
          <Route exact path={["/", "/moviesList"]} component={MoviesList} />
          <Route  path="/create" component={AddMoviePage} />
          <Route  path="/edit/:id" component={EditMoviePage} />
          <Route  path="/details/:id" component={MovieDetails} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

App.propTypes = {
};


export default connect(
)(App);
