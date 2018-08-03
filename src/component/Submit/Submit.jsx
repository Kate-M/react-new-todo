import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './Submit.scss';

const Submit = ({ action, btnSize, name }) => (
    <button className={`btn btn-${btnSize} btn-${action}`} type="submit">{name}</button>
);

Submit.propTypes = {
    action: PropTypes.string,
    btnSize: PropTypes.string,
    name: PropTypes.string,
};

Submit.defaultProps = {
    action: '',
    btnSize: '',
    name: '',
};

export default Submit;
