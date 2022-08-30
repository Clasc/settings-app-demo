import React from 'react';
import PropTypes from 'prop-types';

const Component = ({test}) => <div>{test}</div>;

Component.propTypes = {test: PropTypes.string.isRequired};
Component.defaultProps = {};
export default Component;
