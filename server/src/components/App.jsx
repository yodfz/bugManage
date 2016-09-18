import React, { Component, PropTypes } from 'react';
import Todos from './Todos/Todos';
import IndexLayout from '../layouts/MainLayout/indexLayout';
import Main from './SinglePage/Main';
const App = ({ location }) => {
  return (
    <IndexLayout>
      <Main location={location} />
    </IndexLayout>
  );
};

App.propTypes = {
};

export default App;
