import React, { Component, PropTypes } from 'react';
import Todos from './Todos/Todos';
import MainLayout from '../layouts/MainLayout/MainLayout';
import IndexLayout from '../layouts/MainLayout/indexLayout';
const App = ({ location }) => {
  return (
    <IndexLayout>
      <Todos location={location} />
    </IndexLayout>
  );
};

App.propTypes = {
};

export default App;
