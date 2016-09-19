import React, { Component, PropTypes } from 'react';
import Todos from './Todos/Todos';
import IndexLayout from '../layouts/MainLayout/indexLayout';
const App = ({ children }) => {
  return (
    <IndexLayout>
      {children}
    </IndexLayout>
  );
};

App.propTypes = {
  children: PropTypes.element,
};

export default App;
