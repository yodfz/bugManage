import React, { Component, PropTypes } from 'react';

const template = ({children}) =>{
  return ({children});
};

template.propTypes = {
  children: PropTypes.element,
};

export default template;

