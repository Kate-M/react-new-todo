import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './Submit.scss';

const Submit = ({ action }) => (
    <button className={`btn btn-md ${action}-btn`} type="submit" />
);

Submit.propTypes = {
    action: PropTypes.string,
};

Submit.defaultProps = {
    action: '',
};

export default Submit;
