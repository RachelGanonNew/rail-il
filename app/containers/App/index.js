import React  from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';
import TrasportationListPage from 'containers/TrasportationListPage/Loadable';
import AddTrasportaionPage from 'containers/AddTrasportaionPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import 'style.scss';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

export function App() {
  return (
    <div style={{ marginLeft :'20px'}}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route
          exact
          path="/transportaionList"
          component={TrasportationListPage}
        />
        <Route exact path="/addTrasportaion" component={AddTrasportaionPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

App.propTypes = {
};

const mapStateToProps = createSelector({
});

function mapDispatchToProps() {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
