import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './Submit.scss';

const Submit = ({ action, btnSize }) => (
    <button className={`btn btn-${btnSize} btn-${action}`} type="submit" />
);

Submit.propTypes = {
    action: PropTypes.string,
    btnSize: PropTypes.string,
};

Submit.defaultProps = {
    action: '',
    btnSize: '',
};

export default Submit;
